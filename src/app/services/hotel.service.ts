import { Injectable } from '@angular/core';
import { Hotel } from '../interfaces/interfaces';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class HotelService {

	private url: string = `${environment.baseUrl}/hotels?_page=1&_limit=10`;
	private filterHotelsSource$ = new Subject<Hotel[]>();
	private hotelsSource$ = new Subject<Hotel[]>();

	constructor(
		private http: HttpClient
	) { }


	public filteredHotels$ = this.filterHotelsSource$.asObservable();
	public hotelsList$ = this.hotelsSource$.asObservable();



	public getDefaultHotelsList() {
		this.http.get<any>(this.url, {observe: 'response'}).subscribe(res => {
			console.log(res.headers.get('X-Total-Count'));
			return this.hotelsSource$.next(res.body);
		})
	}

	public filterHotels(value: Array<any>) {

		const inputValue: string = `title_like=${value[0]}`;
		const ratingValue: string = `stars=${value[1]}`;

		const endPoint = value.reduce((sum, current, index) => {
			if (!sum && current && index === 0) {
				return sum = `&${inputValue}`
			} else if (!sum && current > 2 && index === 1) {
				return sum = `&${ratingValue}`
			} else if (sum && current > 2 && index === 1) {
				return sum = `${sum}&${ratingValue}`
			} else {
				return sum;
			}
		}, '');

		this.http.get<any>(this.url + endPoint,{observe: 'response'}).subscribe(res => {
			console.log(res.headers.get('X-Total-Count'));
			return this.filterHotelsSource$.next(res.body);
		})
		return this.filteredHotels$;
	}
}
