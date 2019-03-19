import { Injectable } from '@angular/core';
import { Hotel } from '../interfaces/interfaces';
import { HotelService } from './hotel.service';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SelectedHotelService {

  constructor(
    private hotelService: HotelService
  ) { }
  

  public selectedHotel: Hotel;

  public setSelectedHotel(id:number): void {
    this.selectedHotel = this.hotelService.getDataSelectedHotel(id)
  }

  public getDataHotel(): Observable<Hotel> {
    return of(this.selectedHotel);
  }
}
