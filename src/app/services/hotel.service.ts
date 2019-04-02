import { Injectable } from '@angular/core';
import { Hotel } from '../interfaces/interfaces';
import { Hotels } from '../mock/damn';
@Injectable({
	providedIn: 'root'
})
export class HotelService {

	private filteredHotels: Hotel[] = this.getHotels();

  // public getHotels(): Hotel[] {
  //  return Hotels;
  // }

	public getfiltrHotels(rating: number): Hotel[] {
		if (rating != 2) {
			return this.filteredHotels = this.getHotels().
				filter((hotel: Hotel) => hotel.stars === rating);
		} else {
			return this.filteredHotels = this.getHotels();
		}
	}

	// async setTimeout
	public getHotels(): any {
		return new Promise<Hotel[]>((res) => {
			setTimeout(() => {
				res(Hotels);
			}, 3000);
		});
	}

}
