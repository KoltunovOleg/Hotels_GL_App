

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule, MatCardModule, MatButtonModule, MatListModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule
  ],
  exports: [
    MatAutocompleteModule, 
    MatCardModule, 
    MatButtonModule, 
    MatListModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatIconModule
  ]
})


export class AngularMaterialModule {
}
