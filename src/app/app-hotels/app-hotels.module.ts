import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHotelsComponent } from './app-hotels/app-hotels.component';
import { ListComponent } from './list/list.component';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
  declarations: [AppHotelsComponent, ListComponent, WeatherComponent, ProfileComponent, SearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule
  ],
  exports: [AppHotelsComponent]
})
export class AppHotelsModule { }
