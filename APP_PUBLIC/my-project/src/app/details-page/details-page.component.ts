import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { MobileDeviceServiceService } from "../mobile-device-service.service";
import { Mobile } from "../mobile";
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers : [MobileDeviceServiceService]
})
export class DetailsPageComponent implements OnInit {

  constructor(
    private mobileDataService : MobileDeviceServiceService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  
  newMobile : Mobile;

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params:Params) => {
        return this.mobileDataService.getSingleMobile(params['mobileid'])
      })
    ).subscribe((newMobile : Mobile) => {
      this.newMobile = newMobile;

    })
  }
  
  // Deleting a mobile device
  public deleteMobile(newMobile : Mobile): void{
    this.mobileDataService.deleteSingleMobile(newMobile._id);
    window.location.href = "";
  }
  
  pageContent = {
    header : {
  }
}

}
