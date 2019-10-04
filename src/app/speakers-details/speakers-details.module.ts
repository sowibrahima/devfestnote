import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SpeakersDetailsPage } from './speakers-details.page';

const routes: Routes = [
  {
    path: '',
    component: SpeakersDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SpeakersDetailsPage]
})
export class SpeakersDetailsPageModule {}
