import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PagamentoPage } from './pagamento.page';

import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

const routes: Routes = [
  {
    path: '',
    component: PagamentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    PayPal
  ],
  declarations: [PagamentoPage]
})
export class PagamentoPageModule {}
