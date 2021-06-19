import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from '../../../shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.css']
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service:PaymentDetailService) {
    
   }
   pagamentoSingolo?:PaymentDetail;
  i:number=0;
  listapagamenti:PaymentDetail[]=[];

  

  ngOnInit(): void {
    this.service.getAllPayments().subscribe(
      res=>{console.log(res);this.listapagamenti=res}
    );
  }

  delete(id:number){
    this.service.delete(id).subscribe(
      res=>{console.log(res)}
    );
    window.location.reload();
  }

  showModifica(pagamento:PaymentDetail){
    this.pagamentoSingolo=pagamento;
  }

  populateForm(selectedRecord:PaymentDetail){
   this.service.formData= Object.assign({},selectedRecord);
  }

}
