import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AppHotelsComponent } from '../app-hotels/app-hotels.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { HotelDetailComponent } from '../hotel-detail/hotel-detail.component';
import { CommentsComponent } from '../hotel-detail/comments/comments.component';
import { ExitContactGuard } from './exit-contact.guard';
import { AuthGuard } from '../auth/auth.guard';
import { UserComponent } from '../user/user.component';
import { ListComponent } from '../app-hotels/list/list.component';

const appRoutes: Routes = [
  { path: '', component: AppHotelsComponent ,
  //  children:[
  //   {path: 'hotels', component: ListComponent}
  // ]
},
{ path: 'hotels', component: AppHotelsComponent ,
// //  children:[
// //   {path: 'hotels', component: ListComponent}
// // ]
},
  { path: 'about', component: AboutComponent},
  { path: 'users', component: UserComponent, canActivate: [AuthGuard]},
  { path: 'contact', component: ContactComponent, canDeactivate: [ExitContactGuard]},
  { path: 'hotel-detail/:id', component: HotelDetailComponent, children:[
    {path: 'comments', component: CommentsComponent}
  ]},
  { path: '**', redirectTo: 'hotels'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        // preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }