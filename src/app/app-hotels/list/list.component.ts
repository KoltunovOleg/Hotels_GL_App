import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Hotel } from 'src/app/interfaces/interfaces';
import { HotelService } from 'src/app/services/hotel.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public hotels: Hotel[];
  public picture:string = "assets/images/1.jpg";
  public searchtxt: string;
  
  constructor(
    private favHotelService: FavoritesService,
    private filterService: HotelService
  ) { }
  
  ngOnInit() {
    this.hotels = this.hotelsArr;
  }
  
  @Input('hotels') hotelsArr: Hotel[];

  @Output() selectedHotel = new EventEmitter<Hotel>();

  public selectHotel(hotel: Hotel): void {
    this.selectedHotel.emit(hotel);
    this.picture = hotel.picture;
  }

  public makeFavorite(hotel: Hotel): void {
    event.stopPropagation();
    this.favHotelService.addHotel(hotel);
  }

  public selectedRaiting(range:string):void {
    this.hotels = this.filterService.getfiltrHotels(Number(range)+2);
  }

  public searchText(text: string) {
    return this.searchtxt =  text;
  }
}
