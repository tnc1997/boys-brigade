import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {DomSanitizer} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {SidenavComponent} from './components/sidenav/sidenav.component';

const components: any[] = [
  SidenavComponent
];

const modules: any[] = [
  CommonModule,
  FormsModule,
  MatButtonModule,
  MatCardModule,
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
