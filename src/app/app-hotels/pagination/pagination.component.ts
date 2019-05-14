import { Component, OnDestroy } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnDestroy{

  private subscriptions: Subscription = new Subscription();
  private prevURL: string;
  private nextURL: string;
  private qParams: object;
  private url: string = `${environment.baseUrl}/hotels`;

  public isNext: boolean;
  public isPrev: boolean;

  constructor(
    private hotelService: HotelService,
		private route: ActivatedRoute,
		private router: Router
  ) { 
    this.subscriptions.add(
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
    }))
  }
  
  ngOnInit(): void {
    const params = this.route.snapshot.queryParams;
    const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
   
    this.hotelService.getHotelsList(`${this.url}?${queryString}`);
  }

  public Prev(event: MouseEvent) {
    // console.log("Prev event: ",this.prevURL);
    this.hotelService.getHotelsList(this.prevURL)
  }

  public Next(event: MouseEvent) {
    // console.log("Next event: ",this.nextURL);
    this.hotelService.getHotelsList(this.nextURL)
  }

  ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}

}
