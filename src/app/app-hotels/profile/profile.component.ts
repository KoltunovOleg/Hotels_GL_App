import { Component, Input } from '@angular/core';
import { Hotel, IProfile } from "../interfaces/interfaces";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  @Input() profile: IProfile;

}
