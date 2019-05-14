import { Component, Output, EventEmitter, Input, OnDestroy} from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Hotel } from 'src/app/interfaces/interfaces';
import { HotelService } from 'src/app/services/hotel.service';
import { Subject, Observable, Subscription } from 'rxjs';
import { startWith, combineLatest } from 'rxjs/operators';



@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnDestroy{

	private subscriptions: Subscription = new Subscription();
	private searchTextSourse$ = new Subject<any>();
	private ratingSourse$ = new Subject<any>();
	private searchText$ = this.searchTextSourse$.asObservable();
	private rating$ = this.ratingSourse$.asObservable();

	// public hotels: Hotel[];
	public picture: string = "assets/images/1.jpg";

	constructor(
		private favHotelService: FavoritesService,
		private filterService: HotelService
	) {
		this.subscriptions.add(
		this.filter$.subscribe(val => {			
			this.filterService.filterHotels(val).subscribe(data => {
				this.hotels = data;
			})
		}))
	}

	@Input('hotels') hotels: Hotel[];

	@Output() selectedHotel = new EventEmitter<Hotel>();

	public selectHotel(hotel: Hotel): void {
		this.selectedHotel.emit(hotel);
		this.picture = hotel.picture;
	}

	public makeFavorite(hotel: Hotel): void {
		event.stopPropagation();
		this.favHotelService.addHotel(hotel);
	}

	public selectedRaiting(range: string): any {
		this.ratingSourse$.next(Number(range) + 2);
	}

	public searchText(text: string) {
		this.searchTextSourse$.next(text);
	}

	private filter$: Observable<any> = this.searchText$.pipe(startWith(0))
		.pipe(combineLatest(
			this.rating$.pipe(startWith(0)),
		))

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}
}
