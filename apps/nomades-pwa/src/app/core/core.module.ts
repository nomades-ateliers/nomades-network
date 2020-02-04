import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { INTERCEPTORS } from './interceptors';

// app

const MODULES_FOR_ROOT = [];

const MODULES = [
  BrowserModule,
  HttpClientModule
];
const MODULES_EXPORT = [
  ...MODULES,
]
const PROVIDERS = [
  {
    provide: APP_BASE_HREF,
    useValue: '/'
  },
  ...INTERCEPTORS
  // ...PIPES
];

@NgModule({
  declarations: [],
  imports: [
    ...MODULES,
    ...MODULES_FOR_ROOT
  ],
  providers: [
    ...PROVIDERS
  ],
  exports: [
    ...MODULES_EXPORT
  ]
})
export class CoreModule {}