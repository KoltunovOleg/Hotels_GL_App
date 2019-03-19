import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from "../interfaces/interfaces";


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() hotel: Hotel;

  constructor() { }

  ngOnInit() {
  }

}
