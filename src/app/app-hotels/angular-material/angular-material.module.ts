

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule, MatCardModule, MatButtonModule, MatListModule, MatFormFieldModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [
    MatAutocompleteModule, 
    MatCardModule, 
    MatButtonModule, 
    MatListModule, 
    MatFormFieldModule, 
    MatInputModule
  ]
})


export class AngularMaterialModule {
}
