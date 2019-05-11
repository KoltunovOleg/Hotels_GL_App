import { Injectable } from '@angular/core';
import { Hotel, IPagination } from '../interfaces/interfaces';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class HotelService {

	private url: string = `${environment.baseUrl}/hotels?_page=1&_limit=5`;
	private filterHotelsSource$ = new Subject<Hotel[]>();
	private hotelsSource$ = new Subject<Hotel[]>();
	private paginationSource$ = new Subject<IPagination>();

	constructor(
		private http: HttpClient
	) { }


	public filteredHotels$ = this.filterHotelsSource$.asObservable();
	public hotelsList$ = this.hotelsSource$.asObservable();
	public pagination$ = this.paginationSource$.asObservable();



	public getDefaultHotelsList() {
		this.getHotelsList(this.url);
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
			// console.log(res.headers.get('X-Total-Count'));
			this.parseResponse(res.headers.get('link'))
			return this.filterHotelsSource$.next(res.body);
		})
		return this.filteredHotels$;
	}

	public getHotelsList(url:string) {
		this.http.get<any>(url, {observe: 'response'}).subscribe(res => {
			// console.log(res.headers.get('link'));
			this.parseResponse(res.headers.get('link'))
			return this.hotelsSource$.next(res.body);
		})
	}

	private parseResponse(res: any):any {
		const paginationInfoObject: IPagination = {};
		const paginationInfo =  res.split(', ').map(i => {
			return i.split('; ').map((i, index )=> {
				if(index === 0) {
					return i.substring(i.indexOf("<")+1,i.lastIndexOf(">"));
				} else {
					return i.substring(i.indexOf('"')+1,i.lastIndexOf('"'));
				}
			})
		});

		paginationInfo.forEach(element => {
			paginationInfoObject[element[1]] = element[0];
		});

		this.paginationSource$.next(paginationInfoObject);
	}
}
