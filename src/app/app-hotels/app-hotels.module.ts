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
import { MatSnackBarModule } from '@angular/material';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { PrealoadDirective } from './directive/preaload.directive';
import { PaginationComponent } from './pagination/pagination.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppHotelsComponent, 
    ListComponent, 
    WeatherComponent, 
    ProfileComponent, 
    SearchComponent, 
    FilterComponent, 
    FavoritesComponent,
    SearchFilterPipe,
    ProgressbarComponent,
    PrealoadDirective,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase, 'apphotelsgl'),
    AngularFireDatabaseModule
  ],
  providers: [HotelService, MatSnackBarModule],
  exports: [AppHotelsComponent]
})
export class AppHotelsModule { }
