import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor(
    private hotelService: HotelService
  ) { 
    this.hotelService.hotelsList$.subscribe( data => {
			console.log(data)
		})
  }

  ngOnInit() {
    this.hotelService.getDefaultHotelsList();
  }

  public Prev(event: MouseEvent) {
    console.log("Prev event: ",event.target);
  }

  public Next(event: MouseEvent) {
    console.log("Next event: ",event.target);
  }

}
