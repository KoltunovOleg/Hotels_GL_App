import { Component, Output} from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent{

  public range: string = "0";

  @Output() SelectedRaiting = new EventEmitter();

  getRange(item: HTMLBaseElement):void {
    const valueAttr:string = item.attributes['data-range'].value;
    this.SelectedRaiting.emit(valueAttr);
    this.range = valueAttr;
  }
}
