import { NgModule } from '@angular/core';

import { GavatarPipe } from './gavatar/gavatar.pipe';


// pipes no using by shared component 
const CORE_PIPES = [];

// pipes used in features and shared component
const SHARED_PIPES = [
  GavatarPipe
];

@NgModule({
  declarations: [
    ...CORE_PIPES
  ],
  exports: [
    ...CORE_PIPES
  ]
})
export class CorePipeModule { }

@NgModule({
  declarations: [
    ...SHARED_PIPES
  ],
  exports: [
    ...SHARED_PIPES
  ]
})
export class SharedPipeModule { }
