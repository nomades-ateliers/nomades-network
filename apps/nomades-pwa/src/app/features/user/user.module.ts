import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// external libs
import {WebcamModule} from 'ngx-webcam';
import { QuillModule } from 'ngx-quill';
// libs
import { SharedPipeModule } from '@nomades-network/core/pipes';
import { UiModule } from '@nomades-network/ui';
// app
import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './containers/user-page/user-page.component';
import { COMPONENTS, ENTRY_COMPONENTS } from './components';
import { CurrentUserPageComponent } from './containers/current-user/current-user.page';
// import { CameraService } from '@nomades-network/core/services';

@NgModule({
  entryComponents: [
    ...ENTRY_COMPONENTS
  ],
  declarations: [
    UserPageComponent,
    CurrentUserPageComponent,
    ...COMPONENTS
  ],
  imports: [
    IonicModule,
    UiModule,
    UserRoutingModule,
    ReactiveFormsModule,
    SharedPipeModule,
    WebcamModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic'],
          [{ 'align': [] }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          // [{ 'font': [] }],
        ],
        // syntax: true
      },
      theme: 'snow',
      placeholder: 'Vous pouvez ajouter des commentaires ici ...',
    })
  ],
  providers: [
    // CameraService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UserModule { }
