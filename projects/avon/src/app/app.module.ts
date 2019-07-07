import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';

const routes: Routes = [
  {path: 'about', loadChildren: () => import('./about/about.module').then(module => module.AboutModule)},
  {path: 'companies', loadChildren: () => import('./company/company.module').then(module => module.CompanyModule)},
  {path: 'events', loadChildren: () => import('./event/event.module').then(module => module.EventModule)},
  {path: 'home', loadChildren: () => import('./home/home.module').then(module => module.HomeModule)},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
