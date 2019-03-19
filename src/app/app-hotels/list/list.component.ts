import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Hotel } from "../interfaces/interfaces";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public picture:string = "assets/images/1.jpg";
  public range: string;
  
  constructor() { }
  
  ngOnInit() {
  }
  
  @Input() hotels: Hotel;

  @Output() SelectedHotel = new EventEmitter<Hotel>();

  selectHotel(hotel: Hotel): void {
    this.SelectedHotel.emit(hotel);
    this.picture = hotel.picture;
  }

  makeFavorite(hotel: Hotel): void {
    
  }

  SelectedRaiting(range:string):void {
    this.range = range;
  }
}
