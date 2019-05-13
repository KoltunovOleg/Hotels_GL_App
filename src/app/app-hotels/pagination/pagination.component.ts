import { Component } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  private qParams: object;

  constructor(
    private hotelService: HotelService,
		private route: ActivatedRoute,
		private router: Router
  ) { 
    this.hotelService.pagination$.subscribe( data => {
      if(data[0]['prev']) {
        this.isPrev = true;
        this.prevURL = data[0]['prev'];
      } else {
        this.isPrev = false;
        this.prevURL = null;
      }

      if(data[0]['next']) {
        this.isNext = true;
        this.nextURL = data[0]['next'];
      } else {
        this.isNext = false;
        this.nextURL = null;
      }

      
      this.qParams = JSON.parse('{"' + data[1].replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) });;
      this.router.navigate(['/hotels'], {queryParams: this.qParams});
    })
  }

  ngOnInit(): void {

		// this.router.navigate(['/hotels'], {queryParams: this.qParams});
    console.log(this.route.snapshot.queryParams);
  }

  public Prev(event: MouseEvent) {
    // console.log("Prev event: ",this.prevURL);
    this.hotelService.getHotelsList(this.prevURL)
  }

  public Next(event: MouseEvent) {
    // console.log("Next event: ",this.nextURL);
    this.hotelService.getHotelsList(this.nextURL)
  }

}
