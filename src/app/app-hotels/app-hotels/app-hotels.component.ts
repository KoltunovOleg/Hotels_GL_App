import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { Hotels } from '../damn';

@Component({
  selector: 'app-hotels',
  templateUrl: './app-hotels.component.html',
  styleUrls: ['./app-hotels.component.css']
})
export class AppHotelsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  hotels = Hotels;
  selectedHotel: Hotel = Hotels[0];

  onChanged(hotel: Hotel) {
    this.selectedHotel = hotel;
  }
}
