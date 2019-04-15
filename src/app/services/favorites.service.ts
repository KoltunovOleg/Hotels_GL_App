import { Injectable } from '@angular/core';
import { IFavHotel } from '../interfaces/interfaces';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class FavoritesService {

	private url: string = `${environment.baseUrl}/favorites`;
	private favoritesHotelsSource$ = new Subject<any>();
	public favoritesHotels$ = this.favoritesHotelsSource$.asObservable();


	constructor(
		private http: HttpClient,
		private snackBar: MatSnackBar
	) { }

	public getHotels(): void {
		this.http.get(this.url).subscribe((data: IFavHotel[]) => {
			this.favoritesHotelsSource$.next(data)
		})
	}

	public addHotel(fav: IFavHotel): void {
		this.http.get(`${this.url}?key=${fav.key}`).subscribe((data: IFavHotel[]) => {
			if (data.length) {

				this.openSnackBar('Было добавлено в favorites раньше!');

			} else {
				this.http.post<IFavHotel>(this.url,
					{ key: fav.key, title: fav.title }
				).subscribe((response) => {

					this.favoritesHotelsSource$.next(response)
					this.openSnackBar('Добавлено в favorites!');

				});
			}
		})
	}

	public removeHotel(fav: IFavHotel): void {
		this.http.delete(`${this.url}/${fav.id}`).subscribe(
			() => {
				this.favoritesHotelsSource$.next({ delete: fav.id })
				this.openSnackBar('Удалено из favorites!');
			}
		)
	}

	private openSnackBar(message: string, action?: string) {
		this.snackBar.open(message, action, {
			duration: 2000,
		});
	}
}
