import { Component, Output, EventEmitter} from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})

export class FilterComponent{

  public rating: Array<string> = ["All", "***", "****", "*****"];

  // constructor(
  //   private hotelService: HotelService
  // ){}

  @Output() selectedRaiting = new EventEmitter();

  getRange(event: MouseEvent, elem: HTMLLinkElement):void {
    event.preventDefault();
    const valueAttr:string = elem.attributes['data-range'].value;
    this.selectedRaiting.emit(valueAttr);
    // this.hotelService.filterHotels(Number(valueAttr)+2)

  }
}
