import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// @ilias observable -- subcribe https://angular.io/guide/rx-library
 import { Observable } from 'rxjs';
 import { ActivatedRoute, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  userSingleId: Object;
  userSingleObj: Object;


  constructor(private dataServ: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.userSingleId = params.id);
  }

  ngOnInit() {
    this.dataServ.getuserId(this.userSingleId).subscribe( resp => {
      //console.log( resp);
      //this.userSuserSingleIdingleObj += resp;
      this.userSingleId = resp;
      console.log( this.userSingleId);
      //this.userSingle = resp;

    } );
  }

}
