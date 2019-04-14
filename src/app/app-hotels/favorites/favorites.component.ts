import { Component, OnInit} from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { IFavHotel } from 'src/app/interfaces/interfaces';

@Component({
	selector: 'app-favorites',
	templateUrl: './favorites.component.html',
	styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit  {

	constructor(
		private favHotelsService: FavoritesService

	) { }

	public favHotels: IFavHotel[] = [];

	ngOnInit() {
		this.favHotelsService.getHotels();
		this.favHotelsService.favoritesHotels$.subscribe(data => {
				this.favHotels = data;
			}
		);
	}

	delFavorite(hotel: IFavHotel): void {
		this.favHotelsService.removeHotel(hotel);
	}

}
