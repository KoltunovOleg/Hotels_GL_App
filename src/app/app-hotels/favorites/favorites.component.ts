import { Component, OnInit, DoCheck} from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Hotel } from 'src/app/interfaces/interfaces';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
	selector: 'app-favorites',
	templateUrl: './favorites.component.html',
	styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, DoCheck {

	constructor(
		private favHotelsService: FavoritesService

	) { }

	public favHotels: Hotel[];

	ngOnInit() {
		this.favHotels = this.favHotelsService.getHotels();
	}

	ngDoCheck() {
		this.favHotels = this.favHotelsService.getHotels();
	}

	delFavorite(hotel: Hotel): void {
		this.favHotels = this.favHotelsService.removeHotel(hotel);
	}

}
