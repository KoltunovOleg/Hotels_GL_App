import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from 'src/app/interfaces/interfaces';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {


  transform(hotels: Hotel[], text?: string): any {
    let hotelsArr: Hotel[] = hotels;
    if (!text) {
      return hotelsArr;
    }

    hotelsArr = hotels.filter(hotel => {
      const title:string  = hotel.title.toLowerCase();
      const description:string  = hotel.description.toLowerCase();

    if(title.includes(text.toLowerCase()) || description.includes(text.toLowerCase()))
      return hotel;
    });

    return hotelsArr;
  }
}
