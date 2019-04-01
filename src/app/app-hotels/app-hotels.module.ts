import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SharedModule } from '../shared/shared.module';
import { AppHotelsComponent } from './app-hotels.component';
import { HotelService } from '../services/hotel.service';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppHotelsComponent, 
    ListComponent, 
    WeatherComponent, 
    ProfileComponent, 
    SearchComponent, 
    FilterComponent, 
    FavoritesComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [HotelService],
  exports: [AppHotelsComponent]
})
export class AppHotelsModule { }
