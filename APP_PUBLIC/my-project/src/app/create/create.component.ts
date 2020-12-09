import { Component, OnInit, Input } from '@angular/core';
import { Mobile } from "../mobile";
import { MobileDeviceServiceService } from "../mobile-device-service.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers : [MobileDeviceServiceService]
})
export class CreateComponent implements OnInit {
  public newMobile : Mobile = {
    _id : '',
    name: '',
    downPayment: '',
    monthlyPrice: '',
    extra: '',
    fullPrice: '',
    color : '',
    storage : '',
    comments : ''
  }
  constructor(private mobileDataService : MobileDeviceServiceService) { }

  ngOnInit() {
  }

  public createNewMobile(newMobile : Mobile):void{
    this.mobileDataService.createMobile(newMobile);
    window.location.href = "";
  }

}
