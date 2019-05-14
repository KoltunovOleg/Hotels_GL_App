import { Component, OnInit, OnDestroy } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { IFavHotel } from 'src/app/interfaces/interfaces';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-favorites',
	templateUrl: './favorites.component.html',
	styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, OnDestroy {

	constructor(
		private favHotelsService: FavoritesService

	) { }

	public favHotels: IFavHotel[] = [];
	private subscriptions: Subscription = new Subscription();

	ngOnInit() {
		this.favHotelsService.getHotels();
		this.subscriptions.add(
		this.favHotelsService.favoritesHotels$.subscribe(data => {
			if (data.delete) {
				this.favHotels = this.favHotels.filter(item => item.id !== data.delete);
			} else {
				this.favHotels = [...this.favHotels, ...data];
			}
		}
		));
	}

	delFavorite(hotel: IFavHotel): void {
		this.favHotelsService.removeHotel(hotel);
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}

}
