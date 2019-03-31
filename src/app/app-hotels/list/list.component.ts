import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Hotel } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public picture:string = "assets/images/1.jpg";
  public range: string;
  
  constructor(
    private favHotelService: FavoritesService
  ) { }
  
  ngOnInit() {
  }
  
  @Input() hotels: Hotel;

  @Output() selectedHotel = new EventEmitter<Hotel>();

  selectHotel(hotel: Hotel): void {
    this.selectedHotel.emit(hotel);
    this.picture = hotel.picture;
  }

  makeFavorite(hotel: Hotel): void {
    event.stopPropagation();
    this.favHotelService.addHotel(hotel);
  }

  SelectedRaiting(range:string):void {
    this.range = range;
  }
}
