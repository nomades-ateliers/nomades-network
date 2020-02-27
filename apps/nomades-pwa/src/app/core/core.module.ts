import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { INTERCEPTORS } from './interceptors';
import { IonicModule } from '@ionic/angular';
import { COMPONENTS } from './components';



const MODULES_FOR_ROOT = [];

const MODULES = [
  BrowserModule,
  HttpClientModule
];
const MODULES_EXPORT = [
  ...MODULES,
  IonicModule
]
const PROVIDERS = [
  {
    provide: APP_BASE_HREF,
    useValue: '/'
  },
  // {
  //   provide: ErrorHandler,
  //   useClass: ErrorHandlerService
  // },
  ...INTERCEPTORS
  // ...PIPES
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES,
    ...MODULES_FOR_ROOT
  ],
  providers: [
    ...PROVIDERS
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES_EXPORT
  ]
})
export class CoreModule {}