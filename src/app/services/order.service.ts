import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http:HttpClient,
  ) { }

  addOrder(Data: {idCart:String,idUser:String}){
    return  this.http.post<any>('http://localhost:3000/order/addOrder',Data)
    .pipe(map(
      data =>{

      return data;
      }
    ));
  }

  getOrderNotSlip(obj:{idUser:String}){
    return  this.http.post<any>('http://localhost:3000/order/getOrderNotslip',obj)
    .pipe(map(data =>{

      return data;
    }));
  }

  getOrderHaveSlip(obj:{idUser:String}){
    return  this.http.put<any>('http://localhost:3000/order/getOrderHaveslip',obj)
    .pipe(map(data =>{

      return data;
    }));
  }

  getAllOrderHaveSlip(){
    return  this.http.get<any>('http://localhost:3000/order/getAllOrderHaveslip')
    .pipe(map(data =>{

      return data;
    }));
  }

  getAllOrderDisapprove(id:string){
    return  this.http.get<any>('http://localhost:3000/order/getOrderDisapprove/'+id)
    .pipe(map(data =>{

      return data;
    }));
  }

  
  getAllOrderHaveSlipAndVerifyTrue(){
    return  this.http.get<any>('http://localhost:3000/order/trueVerifyPayment')
    .pipe(map(data =>{

      return data;
    }));
  }

  getAllOrderAlreadySend(){
    return  this.http.get<any>('http://localhost:3000/order/getAllOrderHaveAlreadySend')
    .pipe(map(data =>{
      console.log(data);
      return data;
    }));
  }

  updateImgSlip(obj:{idOrder:String,img:String, address:String}){
    return  this.http.put<any>('http://localhost:3000/order/updateSlip',obj)
    .pipe(map(data =>{

      return data;
    }));
  }

  verifyPayment(obj:{idOrder:string, idUser:string, paymentStatus:boolean}){
    return  this.http.put<any>('http://localhost:3000/order/verifyPayment',obj)
    .pipe(map(data =>{

      return data;
    }));
  }

  updateIDTracking(obj:{idOrder:string, idTracking:string, expressCompany:string}){
    return  this.http.put<any>('http://localhost:3000/order/trackingOrder',obj)
    .pipe(map(data =>{

      return data;
    }));
  }

  cancleOrder(id:string){
    return  this.http.delete<any>('http://localhost:3000/order/cancleOrder/'+id)
    .pipe(map(data =>{

      return data;
    }));
  }

  getOrderNotActive(id:string){
    return  this.http.get<any>('http://localhost:3000/order/getOrderNotActive/'+id)
    .pipe(map(data =>{

      return data;
    }));
  }

  getPDFOrder(id:string){
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/pdf',
    //   'Accept': 'application/pdf',
    // });
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return  this.http.get('http://localhost:3000/order/orderPDF/'+id, { headers: headers, observe:'response' , responseType: 'blob'})
    .pipe(data =>{
      return data;
    });

  }

}
