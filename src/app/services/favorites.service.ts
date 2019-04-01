import { Injectable } from '@angular/core';
import { Hotel } from '../interfaces/interfaces';
import { MatSnackBar } from '@angular/material';

@Injectable({
	providedIn: 'root'
})
export class FavoritesService {

	private favHotels: Hotel[] = [];

	constructor(
		private snackBar: MatSnackBar
	) {}

	public getHotels(): Hotel[] {
		return this.favHotels;
	}

	public addHotel(fav: Hotel):  Hotel[]{
		const isAddedHotel = this.favHotels.find((hotel) => hotel.id === fav.id);

		if (!isAddedHotel) {
			this.favHotels = [...this.favHotels, fav];
			this.openSnackBar('Добавлено в favorites!');
		} else {
			this.openSnackBar('Было добавлено в favorites раньше!');
		}
		
		return this.favHotels;
	}

	public removeHotel(fav: Hotel): Hotel[] {
		this.openSnackBar('Удалено из favorites!');
		return this.favHotels = this.favHotels.filter(hotel => hotel.id !== fav.id);
	}

	private openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
