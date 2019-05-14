import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IComment } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public comments: IComment

  constructor(
    private activateRoute: ActivatedRoute,
    private hotelService: HotelService
  ) { }

  ngOnInit() {
    this.activateRoute.parent.params.subscribe((params)=>{
      this.hotelService.getHotelComments(params['id']);
    });
    this.hotelService.hotelComments$.subscribe(data => {
      this.comments = data;
    });
  }
  
}
