

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MatAutocompleteModule, MatCardModule, MatButtonModule,
	MatListModule, MatFormFieldModule, MatInputModule,
	MatIconModule, MatDividerModule
} from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatCheckboxModule} from '@angular/material';


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
		MatDividerModule,
		MatProgressBarModule,
		MatCheckboxModule
	],
	exports: [
		MatAutocompleteModule,
		MatCardModule,
		MatButtonModule,
		MatListModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatDividerModule,
		MatProgressBarModule,
		MatCheckboxModule
	]
})


export class SharedModule {
}
