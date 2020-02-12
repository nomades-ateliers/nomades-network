import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalOptions } from '@ionic/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { IUser } from '@nomades-network/api-interfaces';

@Component({
  selector: 'nomades-network-training-form',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-button (click)="modalCtrl.dismiss()">
          <ion-icon slot="iconOnly" name="close"></ion-icon>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <pre>{{user|json}}</pre>
      <ion-button>
        <ion-icon name="save" slot="start"></ion-icon>
        Enregistrer
      </ion-button>
    </ion-content>
  `,
  styles: [``],
  encapsulation: ViewEncapsulation.None
})
export class TrainingFormComponent implements OnInit {

  form: FormArray;
  @Input() user: IUser;
  @Input() modalOptions: ModalOptions;

  constructor(
    public readonly modalCtrl: ModalController
  ) { }

  async ngOnInit() {
    const {trainings = null} = this.user;
    console.log('--->', this.user, trainings);
    
  }

  addControl() {
    this.form.push(new FormGroup({
      name: new FormControl()
    }))
  }

  removeControl(index: number) {
    this.form.removeAt(index);
  }

  save() {
    this.modalCtrl.dismiss(this.form.value);
  }
}
