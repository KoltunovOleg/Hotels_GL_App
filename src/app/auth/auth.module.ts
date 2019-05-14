import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './basic-auth.interceptor';
import { EnsurHttpsInterceptor } from './ensure-https.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    AuthService,
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true 
    },
      { provide: HTTP_INTERCEPTORS,
        useClass: EnsurHttpsInterceptor,
        multi: true 
      }
  ]
})
export class AuthModule { }
