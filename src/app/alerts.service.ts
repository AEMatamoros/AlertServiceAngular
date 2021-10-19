import { Injectable } from '@angular/core';

import { default as swal } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  sendAlert(title:string,description:string,type:any):void{
    swal.fire(title,description,type).then()
  }
}
