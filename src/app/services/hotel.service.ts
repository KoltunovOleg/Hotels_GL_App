import { Injectable} from '@angular/core';
import { Hotel } from '../interfaces/interfaces';
import { Observable, pipe, Subject, from } from 'rxjs';
import { Hotels } from '../mock/damn';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
	providedIn: 'root'
})
export class HotelService {

	// private filteredHotels: Hotel[] = this.getHotels();
	private url: string = "http://localhost:3004/hotels?_page=1&_limit=10";
	private filterHotelsSource$ = new Subject<Hotel[]>();
	private hotelsSource$ = new Subject<Hotel[]>();

  constructor(
		private http: HttpClient
	) { }
	


	public filteredHotels$ = this.filterHotelsSource$.asObservable();
	public hotelsList$ = this.hotelsSource$.asObservable();

	

	public getDefaultHotelsList() {
		this.http.get(this.url).subscribe((data: Hotel[]) => {
			return this.hotelsSource$.next(data);
		})
	}

	public filterHotels(value: Array<any>) {
		// console.log("filterHotels: ", value);
		// const inputValue: string = `title_like=${value[0]}&description_like=${value[0]}`;
		const inputValue: string = `title_like=${value[0]}`;
		const ratingValue: string = `stars=${value[1]}`;

		const endPoint = value.reduce((sum, current, index)=> {
			if(!sum && current && index === 0 ) {
				return sum = `&${inputValue}`
			} else if(!sum && current > 2 && index === 1 ) {
				return sum = `&${ratingValue}`
			} else if(sum && current > 2 && index === 1 ) {
				return sum = `${sum}&${ratingValue}`
			} else {
				return sum;
			}
		}, '');
		// console.log("endPoint:", this.url + endPoint);

		// if(endPoint) {
			this.http.get(this.url + endPoint).subscribe((data: Hotel[]) => {
				// console.log("endPoint data: ", data);
				// if(data.length) {
					return this.filterHotelsSource$.next(data);
				// }
			})
		// } else {
		// 	this.getDefaultHotelsList();
		// }
		return this.filteredHotels$;
	}

	


  // public getHotels(): Hotel[] {
  //  return Hotels;
	// }

	// public getfiltrHotels(rating: number): Hotel[] {
	// 	if (rating != 2) {
	// 		return this.filteredHotels = this.getHotels().
	// 			filter((hotel: Hotel) => hotel.stars === rating);
	// 	} else {
	// 		// return this.filteredHotels = this.getHotels();
	// 		this.getHotels$.subscribe(data => this.filteredHotels = data);
	// 		return this.filteredHotels;
	// 	}
	// }

	// async setTimeout
	// public getHotelsTimeout(): any {
	// 	return new Promise<Hotel[]>((res) => {
	// 		setTimeout(() => {
	// 			res(Hotels);
	// 		}, 3000);
	// 	});
	// }


	//-----------------------------------------------
	// Oservables

// 	public getHotels$: Observable<Hotel[]>  = Observable.create((observer: any) => {
// 			fetch(this.url)
// 			.then(response => response.json())
// 			.then(data => {
// 				observer.next(data);
// 				observer.complete();
// 			})
// 			.catch(err => observer.error(err));
// 		}).pipe(delay(3000));

// 	public getHotelsOBS(): Observable<Hotel[]> {
// 		return Observable.create((observer: any) => {
// 			fetch(this.url)
// 			.then(response => response.json())
// 			.then(data => {
// 				observer.next(data);
// 				observer.complete();
// 			})
// 			.catch(err => observer.error(err));
// 		}).pipe(delay(3000))
// 	 }
}
