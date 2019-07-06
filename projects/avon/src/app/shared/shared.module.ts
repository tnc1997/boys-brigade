import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatIconModule, MatIconRegistry, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

const modules = [
  CommonModule,
  FormsModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class SharedModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    const url = domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg');
    matIconRegistry.addSvgIconSet(url);
  }
}
