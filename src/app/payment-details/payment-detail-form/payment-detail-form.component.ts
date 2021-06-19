import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { NgForm, NgModel } from '@angular/forms';
@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.css']
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service:PaymentDetailService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
  if(this.service.formData.paymentDetailId==0)
   this.insertRecord(form);
   else
   this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postPaymentDetail().subscribe(
      res=>console.log(res),
      err=>console.log(err)
    );
    window.location.reload();
  }

  updateRecord(form:NgForm){
    this.service.update().subscribe(
      res=>console.log(res),
      err=>console.log(err)
    );
    window.location.reload();
  }

}
