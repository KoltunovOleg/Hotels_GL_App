import { Component, Input } from '@angular/core';
import { IProfile } from 'src/app/interfaces/interfaces';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

	@Input() profile: IProfile;

}
