import { Component, Output} from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent{

  // public range: string = "0";
  public rating: Array<string> = ["All", "***", "****", "*****"];

  @Output() selectedRaiting = new EventEmitter();

  getRange(item: HTMLBaseElement):void {
    const valueAttr:string = item.attributes['data-range'].value;
    this.selectedRaiting.emit(valueAttr);
    // this.range = valueAttr;
  }
}
