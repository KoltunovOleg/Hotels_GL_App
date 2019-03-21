import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { Hotel } from '../interfaces/interfaces';

@Component({
	selector: 'app-favorites',
	templateUrl: './favorites.component.html',
	styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

	constructor(
		private favHotelsService: FavoritesService
	) { }

	public favHotels: Hotel[];

	ngOnInit() {
		this.favHotels = this.favHotelsService.getHotels()
	}

	delFavorite(hotel: Hotel): void {
		this.favHotelsService.removeHotel(hotel);
	}

}
