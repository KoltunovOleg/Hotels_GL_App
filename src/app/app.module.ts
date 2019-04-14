import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppHotelsModule } from "./app-hotels/app-hotels.module";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule, MatSnackBarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AppHotelsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
