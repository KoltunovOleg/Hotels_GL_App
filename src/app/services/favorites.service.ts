import { Injectable } from '@angular/core';
import { Hotel } from '../interfaces/interfaces';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class FavoritesService {

	private favHotels: Hotel[] = [];

	private url: string = "http://localhost:3004/favorites";
	private favoritesHotelsSource$ = new Subject<Hotel[]>();
	public favoritesHotels$ = this.favoritesHotelsSource$.asObservable();

	// private httpOptions: object = {
	// 	headers: new HttpHeaders({
	// 		'Content-Type':  'application/json',
	// 		'Authorization': 'my-auth-token'
	// 	})
	// };

	constructor(
		private http: HttpClient,
		private snackBar: MatSnackBar
	) {}

	public getHotels(): Hotel[] {
		return this.favHotels;
	}

	public addHotel(fav: Hotel):  Hotel[]{
		// console.log("endPoint fav: ", fav);
		this.http.get(`${this.url}?key=${fav.key}`).subscribe((data: Hotel[]) => {
			console.log("endPoint fav: ", data);
			if(data.length) {
				// return this.favoritesHotelsSource$.next(data);
				this.openSnackBar('Было добавлено в favorites раньше!');
			} else {
				this.http.post<Hotel>(this.url, 
					{
						key: fav.key,
						title: fav.title
					})
					.subscribe(
					response => {
						console.log("response: ", response);
						
						this.favHotels = [...this.favHotels, response];
						this.openSnackBar('Добавлено в favorites!');
					}
				);
    // .pipe(
    //   // catchError(this.handleError('addHero', fav))
    // );
			}
		})
		// const isAddedHotel = this.favHotels.find((hotel) => hotel.id === fav.id);


		// if (!isAddedHotel) {
		// 	this.favHotels = [...this.favHotels, fav];
		// 	this.openSnackBar('Добавлено в favorites!');
		// } else {
		// 	this.openSnackBar('Было добавлено в favorites раньше!');
		// }
		
		return this.favHotels;
	}

	public removeHotel(fav: Hotel): Hotel[] {
		// this.openSnackBar('Удалено из favorites!');
		// return this.favHotels = this.favHotels.filter(hotel => hotel.id !== fav.id);
		return this.favHotels;
	}

	private openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
