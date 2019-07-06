import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatGridListModule, MatIconModule, MatIconRegistry, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';

const components: any[] = [
  HeaderComponent,
  FooterComponent,
  SidenavComponent
];

const modules: any[] = [
  CommonModule,
  FormsModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules,
    RouterModule
  ],
  exports: [
    ...components,
    ...modules
  ]
})
export class SharedModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    const url = domSanitizer.bypassSecurityTrustResourceUrl('/assets/mdi.svg');
    matIconRegistry.addSvgIconSet(url);
  }
}
