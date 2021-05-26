import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Users } from '../users';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  users: Users[] = [];
  constructor(public rs:RestService) { }

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response)=>{
      this.users=response;
    })
  }

}
