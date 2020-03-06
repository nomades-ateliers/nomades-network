import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { COMPONENTS } from './components';

const MODULES = [
  CommonModule,
  // HttpClientModule,
  IonicModule
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES,
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ]
})
export class UiModule {}
