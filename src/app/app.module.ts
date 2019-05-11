import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHotelsModule } from "./app-hotels/app-hotels.module";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule, MatSnackBarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { Router} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HotelDetailComponent
  ],
  imports: [
    AppHotelsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
 }
