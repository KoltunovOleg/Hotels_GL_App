

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule, MatCardModule, MatButtonModule, MatListModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDividerModule } from '@angular/material';


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
    MatIconModule,
    MatDividerModule
  ],
  exports: [
    MatAutocompleteModule, 
    MatCardModule, 
    MatButtonModule, 
    MatListModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatIconModule,
    MatDividerModule
  ]
})


export class AngularMaterialModule {
}
