import { Injectable } from '@angular/core';
import { Hotel } from '../interfaces/interfaces';

@Injectable({
	providedIn: 'root'
})
export class FavoritesService {

	private favHotels: Hotel[] = [];

	public getHotels(): Hotel[] {
		return this.favHotels;
	}

	public addHotel(fav: Hotel):  Hotel[]{
		const isAddedHotel = this.favHotels.find((hotel) => hotel.id === fav.id);

		if (!isAddedHotel) {
			this.favHotels = [...this.favHotels, fav];
		}
		
		return this.favHotels;
	}

	public removeHotel(fav: Hotel): Hotel[] {
		return this.favHotels = this.favHotels.filter(hotel => hotel.id !== fav.id);
	}
}
