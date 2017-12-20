import { Component, OnInit } from '@angular/core';
import { TrackerService } from "../models/tracker.service";
import { Router } from '@angular/router';
import { Person } from '../models/Person';
import { Http } from '@angular/http';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  users: Person[] = [];

  constructor(private router: Router, private http: Http, private tracker: TrackerService) {
     
  }

  ngOnInit() {
    setInterval(()=> this.update(), 1000)
  }

  update(){
    this.http.get(this.tracker.apiRoot + "/fitness/users").subscribe( data =>{
        this.users = data.json();
    });
  }

}
