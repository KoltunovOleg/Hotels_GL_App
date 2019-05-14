import { Injectable } from '@angular/core';
import { of } from 'rxjs';

localStorage.setItem('usertoken',"true");
localStorage.setItem('admintoken',"adminAdmin");

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn = localStorage.getItem('usertoken');

  public getAuthorizationToken() {
    return localStorage.getItem('admintoken');
  }

}