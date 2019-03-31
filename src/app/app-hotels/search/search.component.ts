import { Component} from '@angular/core';
import { Hotels } from 'src/app/mock/damn';
import { Hotel } from 'src/app/interfaces/interfaces';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent {

	public hotels: Hotel[];
  myControl = new FormControl();
  // options: string[] = ['One', 'Two', 'Three'];
	filteredOptions: Observable<Hotel[]>;

	constructor(
    private hotelService: HotelService
  ) { }
	
	
  ngOnInit() {
		this.hotels = this.hotelService.getHotels();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): Hotel[] {
    const filterValue = value.toLowerCase();

    return this.hotels.filter(hotel => hotel.title.toLowerCase().includes(filterValue));
  }

}
