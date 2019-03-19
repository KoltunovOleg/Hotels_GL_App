import { Injectable } from '@angular/core';
import { Hotel } from '../interfaces/interfaces';
import { Hotels } from '../mock/damn';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favHotels: Hotel[] = [];

  public getHotels(): Hotel[] {
    return this.favHotels;
  }

  public addHotel(fav:Hotel): void {
    console.log(fav);
  //   console.log(this.favHotels);
  //   if(!this.favHotels.length) {
  //     this.favHotels.push(fav);
  //   } else {
  //   this.favHotels.map((item) => {
  //     if(item.id !== fav.id)
  //     this.favHotels.push(fav);
  //   });
  // }
  }

  public removeHotel(fav:Hotel): void {

   this.favHotels.map((item, i, arr) => {
      if(item.id === fav.id)
      arr.splice(i, 1);
    });
  }
}
