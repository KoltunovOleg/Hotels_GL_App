import { Component, OnInit } from '@angular/core';
import { HotelService } from "../services/hotel.service";
import { Hotel } from '../interfaces/interfaces';

@Component({
  selector: 'app-hotels',
  templateUrl: './app-hotels.component.html',
  styleUrls: ['./app-hotels.component.css']
})
export class AppHotelsComponent implements OnInit{

  constructor(
    private hotelService: HotelService
  ) { }

  public hotels: Hotel[];
  public selectedHotel: Hotel;

  ngOnInit() {
    this.hotels = this.hotelService.getHotels();
    this.selectedHotel = this.hotels[0];
  }
  
  selectHotel(hotel: Hotel) {
    this.selectedHotel = hotel;
  }
}
