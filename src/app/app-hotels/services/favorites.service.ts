import { Injectable } from '@angular/core';
import { Hotel } from '../interfaces/interfaces';
import { Hotels } from '../mock/damn';

@Injectable({
	providedIn: 'root'
})
export class FavoritesService {

	private favHotels: Hotel[] = [];

	public getHotels(): Hotel[] {
		return this.favHotels;
	}

	public addHotel(fav: Hotel): void {

		if (!this.favHotels.length) {
			this.favHotels.push(fav);
		} else if (this.favHotels.every(isHotel)) {
			this.favHotels.push(fav);
		}

		function isHotel(hotel: Hotel) {
			return hotel.id !== fav.id;
		}
	}

	public removeHotel(fav: Hotel): void {

		this.favHotels.map((item, i, arr) => {
			if (item.id === fav.id)
				arr.splice(i, 1);
		});
	}
}
