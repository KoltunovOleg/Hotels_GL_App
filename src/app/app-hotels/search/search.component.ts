import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Hotel } from "../interfaces/interfaces";
import { Hotels } from '../mock/damn';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent {
	hotelCtrl = new FormControl();
	filteredHotels: Observable<Hotel[]>;

	public hotels: Hotel[] = Hotels;

	constructor() {
		this.filteredHotels = this.hotelCtrl.valueChanges
			.pipe(
				startWith(''),
				map(hotel => hotel ? this._filterHotels(hotel) : this.hotels.slice())
			);
	}

	private _filterHotels(value: string): Hotel[] {
		const filterValue = value.toLowerCase();

		return this.hotels.filter(hotel => hotel.title.toLowerCase().indexOf(filterValue) === 0);
	}
}
