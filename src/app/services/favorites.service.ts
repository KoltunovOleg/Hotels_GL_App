import { Injectable } from '@angular/core';
import { Hotel, IFavHotel } from '../interfaces/interfaces';
import { MatSnackBar } from '@angular/material';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class FavoritesService {

	private favHotels: Hotel[] = [];

	private url: string = "http://localhost:3004/favorites";
	private favoritesHotelsSource$ = new Subject<any>();
	public favoritesHotels$ = this.favoritesHotelsSource$.asObservable();


	constructor(
		private http: HttpClient,
		private snackBar: MatSnackBar
	) {}

	public getHotels(): void{
		this.http.get(this.url).subscribe((data: IFavHotel[]) => {
			this.favoritesHotelsSource$.next(data)
		})
	}

	public addHotel(fav: IFavHotel): void{
		this.http.get(`${this.url}?key=${fav.key}`).subscribe((data: IFavHotel[]) => {
			if(data.length) {

				this.openSnackBar('Было добавлено в favorites раньше!');

			} else {
				this.http.post<IFavHotel>(this.url, 
					{
						key: fav.key,
						title: fav.title
					})
					.subscribe(
					() => {
						this.http.get(this.url).subscribe((data: IFavHotel[]) => {
							this.favoritesHotelsSource$.next(data)
						})

						this.openSnackBar('Добавлено в favorites!');
					}
				);
			}
		})
	}

	public removeHotel(fav: IFavHotel): void {
		this.http.delete(`${this.url}/${fav.id}`).subscribe(
			(response: IFavHotel) => {

				// Изменить эту часть на более правильную концепцию?
				// Повторяется код(пересмотреть)
				this.http.get(this.url).subscribe((data: IFavHotel[]) => {
					this.favoritesHotelsSource$.next(data)
				})

				this.openSnackBar('Удалено из favorites!');
			})
	}

	private openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
