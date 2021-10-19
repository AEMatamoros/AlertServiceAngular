import { Component } from '@angular/core';
import { AlertsService } from './alerts.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alerts';
  msg = {
    title:"",
    description:"",
    type:""
  }
  constructor(private alertService: AlertsService){}
  
  sendAlert(){
    this.alertService.sendAlert( this.msg.title, this.msg.description, this.msg.type );
  }
}
