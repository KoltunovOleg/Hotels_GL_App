import { Injectable } from '@angular/core';
import { Hotel } from '../interfaces/interfaces';
import { Hotels } from '../mock/damn';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  public getHotels(): Hotel[] {
    return Hotels;
  }

  public getDataSelectedHotel(id:number): Hotel {
    let hotel: Hotel;
    Hotels.forEach((item, index) => {
      if(item.id === id) hotel = item;
  });
  return hotel;
  }
}
