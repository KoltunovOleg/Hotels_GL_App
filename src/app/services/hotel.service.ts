import { Injectable } from '@angular/core';
import { Hotel } from '../interfaces/interfaces';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class HotelService {

	private url: string = `${environment.baseUrl}/hotels?_page=1&_limit=10`;
	private filterHotelsSource$ = new Subject<Hotel[]>();
	private hotelsSource$ = new Subject<Hotel[]>();
	private paginationSource$ = new BehaviorSubject<any>(0);

	constructor(
		private http: HttpClient
	) { }


	public filteredHotels$ = this.filterHotelsSource$.asObservable();
	public hotelsList$ = this.hotelsSource$.asObservable();
	public pagination$ = this.paginationSource$.asObservable();



	public getDefaultHotelsList() {
		this.http.get<any>(this.url, { observe: 'response' }).subscribe(res => {
			this.hotelsSource$.next(res.body);
			this.paginationSource$.next(this.handlerHeaderRes(res.headers));
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

		this.http.get<any>(this.url + endPoint, { observe: 'response' }).subscribe(res => {
			this.filterHotelsSource$.next(res.body);
			this.paginationSource$.next(this.handlerHeaderRes(res.headers));
		})
		return this.filteredHotels$;
	}

	public pagination(value: string) {
		this.http.get<any>(value, { observe: 'response' }).subscribe(res => {
			this.hotelsSource$.next(res.body);
			this.paginationSource$.next(this.handlerHeaderRes(res.headers));
		})
	}

	public filterFilter(value: any) {

	}

	private handlerHeaderRes(header: any) {

		const infoHeader: { [k: string]: any } = {};
		header.get('link').split(', ').map(item => {
			const i = item.split(';').map((item, index) => {
				if (!(index % 2)) {
					item = item.slice(1, item.length - 1);
				} else {
					item = item.slice(6, item.length - 1);
				}
				return item
			});
			const key: string = i[1];
			const value: string = i[0];
			infoHeader[key] = value;
		});
		return infoHeader;
	}
}
