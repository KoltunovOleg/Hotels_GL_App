import { Injectable } from '@angular/core';
import { Hotel } from '../interfaces/interfaces';
import { Hotels } from '../mock/damn';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private filteredHotels: Hotel[] = this.getHotels();

  public getHotels(): Hotel[] {
    return Hotels;
  }

  public getfiltrHotels(rating:number): Hotel[] {
    if(rating !=2) {
      return this.filteredHotels = this.getHotels().filter(hotel => hotel.stars === rating);
    } else {
      return this.filteredHotels = this.getHotels();
    }
  }

}
