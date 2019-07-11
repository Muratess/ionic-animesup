import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration, PayPalPaymentDetails } from '@ionic-native/paypal/ngx';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  constructor(private payPal: PayPal) {

  }

 comprar(){
   this.payPal.init({
       PayPalEnvironmentProduction:'',
       PayPalEnvironmentSandbox: 'AUwIhhywQBW05PzBC__lvYvON4PA9T5I9r97Rqt_w6LOazdVcTyd7l0BCHXicERfX6cdtNrkIMJAxzU9'
   }).then(() => {
     this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
       acceptCreditCards: false,
       languageOrLocale: 'pt-BR',
       merchantName: 'AnimesUp',
       merchantPrivacyPolicyURL: '',
       merchantUserAgreementURL: ''
     })).then(() => {
       let detail = new PayPalPaymentDetails('19.99', '00.00', '0.00');
       let payment = new PayPalPayment('19.99', 'BRL', 'AnimesUp', 'Sale', detail);
       this.payPal.renderSinglePaymentUI(payment).then((response) => {
         console.log('pagamento efetuado')
       }, () => {
         console.log('erro ao renderizar o pagamento do paypal');
       })
     })
   })
 }
  ngOnInit() {
  }

}
