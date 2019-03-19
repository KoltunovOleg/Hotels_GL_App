import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHotelsComponent } from './app-hotels/app-hotels.component';
import { ListComponent } from './list/list.component';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HotelService } from './services/hotel.service';
import { SelectedHotelService } from './services/selected-hotel.service';
import { FilterComponent } from './filter/filter.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppHotelsComponent, 
    ListComponent, 
    WeatherComponent, 
    ProfileComponent, 
    SearchComponent, 
    FilterComponent, FavoritesComponent, ButtonComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule
  ],
  providers: [HotelService, SelectedHotelService],
  exports: [AppHotelsComponent]
})
export class AppHotelsModule { }
