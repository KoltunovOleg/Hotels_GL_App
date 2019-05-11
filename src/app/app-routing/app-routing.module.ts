import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AppHotelsComponent } from '../app-hotels/app-hotels.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { HotelDetailComponent } from '../hotel-detail/hotel-detail.component';

const appRoutes: Routes = [
  { path: '', component: AppHotelsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'hotel-detail/:id', component: HotelDetailComponent},
  { path: '**', redirectTo: '/'}
  // {
  //   path: 'compose',
  //   component: ComposeMessageComponent,
  //   outlet: 'popup'
  // },
  // {
  //   path: 'admin',
  //   loadChildren: './admin/admin.module#AdminModule',
  //   canLoad: [AuthGuard]
  // },
  // {
  //   path: 'crisis-center',
  //   loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule',
  //   data: { preload: true }
  // },
  // { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
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
