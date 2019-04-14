import { Component, Output, EventEmitter, Input, OnChanges, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Hotel } from 'src/app/interfaces/interfaces';
import { HotelService } from 'src/app/services/hotel.service';
import { Subject, Observable} from 'rxjs';
import { startWith, combineLatest, filter, delay } from 'rxjs/operators';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {

  public hotels: Hotel[];
  public picture:string = "assets/images/1.jpg";
  // public searchtxt: string;
  
  constructor(
    private favHotelService: FavoritesService,
    private filterService: HotelService
  ) { }
  

  
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

  private searchTextSourse$ = new Subject<any>();
  private ratingSourse$ = new Subject<any>();
  private searchText$ = this.searchTextSourse$.asObservable();
  private rating$ = this.ratingSourse$.asObservable();

  public selectedRaiting(range:string):any {
    // this.hotels = this.filterService.getfiltrHotels(Number(range)+2);
    // console.log("range: ", Number(range)+2)
    this.ratingSourse$.next(Number(range)+2);
    // this.getFilteredList();
  }

  public searchText(text: string) {
    // console.log("searchtxt: ", text);
    // this.searchtxt =  text;
    this.searchTextSourse$.next(text);
    // this.getFilteredList();
  }


  ngOnInit(): void {
    this.getFilteredList();
  }

  ngOnChanges() {
    // this.hotels = this.hotelsArr;
  }



  private filter$: Observable<any> =  this.searchText$.pipe(startWith(0))
  .pipe(combineLatest(
    this.rating$.pipe(startWith(0))
  ))

  private getFilteredList(): void {
    this.filter$.subscribe(val => {
      this.filterService.filterHotels(val).subscribe(data => {
        // console.log("filter$ value: ",data);
        this.hotels = data;
      });
    })
  }


}
