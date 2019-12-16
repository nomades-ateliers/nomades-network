import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { HttpClientModule } from '@angular/common/http';

const MODULES = [
  CommonModule,
  HttpClientModule
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
