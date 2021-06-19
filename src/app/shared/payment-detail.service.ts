import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  private readonly url="https://localhost:5001/api/PaymentDetails/"

  constructor( public http:HttpClient) { }

  formData:PaymentDetail=new PaymentDetail();
  
  postPaymentDetail(){
 return this.http.post(this.url,this.formData);
  }

  getAllPayments():Observable<PaymentDetail[]>{
  return this.http.get<PaymentDetail[]>(this.url);
  }

  delete(id:number){
  return this.http.delete(this.url+id);
  }

  update(){
    return this.http.put(this.url+this.formData.paymentDetailId,this.formData);
  }
}
