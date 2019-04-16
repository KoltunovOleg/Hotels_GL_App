import { Component, OnInit } from '@angular/core';
import { HotelService } from "../services/hotel.service";
import { Hotel } from '../interfaces/interfaces';

@Component({
	selector: 'app-hotels',
	templateUrl: './app-hotels.component.html',
	styleUrls: ['./app-hotels.component.css']
})
export class AppHotelsComponent implements OnInit {

	public hotels: Hotel[];
	public selectedHotel: Hotel;
	public hotelsI: Hotel[];

	constructor(
		private hotelService: HotelService
	) { 
		this.hotelService.hotelsList$.subscribe( data => {
			this.hotels = data;
			this.selectedHotel = data[0];
		})
	}

	ngOnInit() {
		this.hotelService.getDefaultHotelsList();
	}
	

	selectHotel(hotel: Hotel) {
		this.selectedHotel = hotel;
	}
}
