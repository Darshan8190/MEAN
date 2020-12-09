import { Component, OnInit } from '@angular/core';
import { Mobile } from "../mobile";
import { MobileDeviceServiceService } from "../mobile-device-service.service";

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers : [MobileDeviceServiceService]
})
export class HomeListComponent implements OnInit {

  mobiles : Mobile[]

  constructor(private mobileService : MobileDeviceServiceService) { }

  ngOnInit() {
    this.mobileService
     .getMobiles()
     .then((mobiles: Mobile[]) => {
       this.mobiles = mobiles.map(mobile => {
         return mobile;
       });
     });
 }

}
