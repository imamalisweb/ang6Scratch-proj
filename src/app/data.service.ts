import { Injectable } from '@angular/core';
// @ ilias import service http for usage
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) {
     console.log('data service constructor ()  ');
  }

  // @ ilias the http is defined on constructor method and here can be visible-accessibkle 
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
   }

   getuserId(userId) {
     return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
   }

}
