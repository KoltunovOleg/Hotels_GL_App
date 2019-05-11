import { Component } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.css']
})
export class PaginationComponent{

  private isNext: boolean;
  private isPrev: boolean;
  private prevURL: string;
  private nextURL: string;

  constructor(
    private hotelService: HotelService
  ) { 
    this.hotelService.pagination$.subscribe( data => {
      console.log(data)
      if(data['prev']) {
        this.isPrev = true;
        this.prevURL = data['prev'];
      } else {
        this.isPrev = false;
        this.prevURL = null;
      }

      if(data['next']) {
        this.isNext = true;
        this.nextURL = data['next'];
      } else {
        this.isNext = false;
        this.nextURL = null;
      }

		})
  }

  public Prev(event: MouseEvent) {
    console.log("Prev event: ",this.prevURL);
    this.hotelService.getHotelsList(this.prevURL)
  }

  public Next(event: MouseEvent) {
    console.log("Next event: ",this.nextURL);
    this.hotelService.getHotelsList(this.nextURL)
  }

}
