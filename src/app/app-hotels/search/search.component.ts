import { Component, Output, EventEmitter} from '@angular/core';
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

  // filteredOptions: Observable<Hotel[]>;
  
  @Output() searchText = new EventEmitter<string>();

  public searchHotel(value: string) {
    this.searchText.emit(value);
  }

}
