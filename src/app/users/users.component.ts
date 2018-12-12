import { Component, OnInit } from '@angular/core';

// @ilias import the service
import { DataService } from '../data.service';
// @ilias observable -- subcribe https://angular.io/guide/rx-library
 import { Observable } from 'rxjs';
import { Config } from 'protractor';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userList: Object;

  //  @ilias by adding this private with service over here it's a dependecy injection  
  constructor(private dataServ: DataService) {
    console.log('------users component constructor-----');
  }

  ngOnInit() {
    // @ilias you can user Interface or other observable
    // pls check here for more https://angular.io/guide/http
    this.dataServ.getUsers().subscribe( resp => {
      console.log(resp);
      this.userList = resp;

    } );
  }

}
