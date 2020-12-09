import { Injectable } from '@angular/core';
import { Mobile } from "./mobile";
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class MobileDeviceServiceService {
  private mobilesUrl = 'http://localhost:3000/api/mobiles';

  constructor(private http: HttpClient) { }

  // Get all the mobiles
  getMobiles(): Promise<void | Mobile[]> {
    return this.http.get(this.mobilesUrl)
      .toPromise()
      .then(response => response as Mobile[])
      .catch(this.handleError);
  }

  // Get a single mobile for Details 
  getSingleMobile(mobileId: String): Promise<void | Mobile> {
    return this.http.get(this.mobilesUrl + '/' + mobileId)
      .toPromise()
      .then(response => response as Mobile)
      .catch(this.handleError);
  }

  // Create a new mobile 
  createMobile(newMobile: Mobile): Promise<void | Mobile> {
    return this.http.post(this.mobilesUrl, newMobile)
      .toPromise()
      .then(response => response as Mobile)
      .catch(this.handleError);
  }

  // Delete a single mobile
  deleteSingleMobile(mobileId: String): Promise<void | Mobile> {
    return this.http.delete(this.mobilesUrl + '/' + mobileId)
      .toPromise()
      .then(response => response as Mobile)
      .catch(this.handleError);

  }

  private handleError(error: any) {
    console.log("error");
  }

}
