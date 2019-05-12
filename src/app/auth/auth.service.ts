import { Injectable } from '@angular/core';
import { of } from 'rxjs';

localStorage.setItem('usertoken',"true")

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn = localStorage.getItem('usertoken');

}