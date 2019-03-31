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
}
