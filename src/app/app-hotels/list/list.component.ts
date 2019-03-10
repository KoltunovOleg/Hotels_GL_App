import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Hotel } from "../hotel";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  picture:string = "assets/images/1.jpg";
  
  constructor() { }
  
  ngOnInit() {
  }
  
  @Input() hotels: object;

  @Output() onChanged = new EventEmitter<Hotel>();

  onSelect(hotel: Hotel): void {
    this.onChanged.emit(hotel);
    this.picture = hotel.picture;
  }
}
