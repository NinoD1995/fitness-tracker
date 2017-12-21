import { Component, OnInit } from '@angular/core';
import { TrackerService } from "../models/tracker.service";
import { Router } from '@angular/router';
import { Person } from '../models/Person';
import { Http } from '@angular/http';
import { Routine } from '../models/tracker';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  users: Person[] = [];
  me: Person;
  myRoutines: Routine [];

  constructor(private router: Router, private http: Http, private tracker: TrackerService) {
     
  }

  ngOnInit() {
    if(this.tracker.me == null) {
      this.router.navigate(['/login']);
    }
    setInterval(()=> this.update(), 1000)
    this.me = this.tracker.me;
    this.myRoutines = this.me.myRoutines;
    this.http.get(this.tracker.apiRoot + "/fitness/users").subscribe( data =>{
      this.users = data.json();
  });
  }

  update(){
    this.http.get(this.tracker.apiRoot + "/fitness/users").subscribe( data =>{
        this.users = data.json();
    });
  }

}
