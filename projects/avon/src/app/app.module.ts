import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {AboutModule} from './about/about.module';
import {CompaniesModule} from './companies/companies.module';
import {HomeModule} from './home/home.module';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AboutModule,
    CompaniesModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
