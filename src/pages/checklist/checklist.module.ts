import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Checklist } from './checklist';

@NgModule({
  declarations: [
    Checklist,
  ],
  imports: [
    IonicModule.forRoot(Checklist),
  ],
  exports: [
    Checklist
  ]
})
export class ChecklistModule {}
