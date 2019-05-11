import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Hotel } from '../interfaces/interfaces';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  private hotel: Hotel;

  constructor(
    private activateRoute: ActivatedRoute,
    private hotelService: HotelService
    ) { }

    ngOnInit() {
      this.activateRoute.params.subscribe((params: ParamMap)=>{
        console.log(params)
        this.hotelService.getHotelDetail(params['id']);
        this.hotelService.hotelDetail$.subscribe(data => {
            this.hotel = data;
        })
      });
    }

}
