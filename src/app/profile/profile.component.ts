import { Component, OnInit } from '@angular/core';
import { TrackerService } from "../models/tracker.service";
import { Person } from '../models/Person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  ts: TrackerService;
  me: Person;
  constructor(trackerService: TrackerService, private router: Router) {
    this.ts = trackerService;
    this.me = trackerService.me;
  }

  ngOnInit() {
    if(this.ts.me == null) {
      this.router.navigate(['/login']);
    }
    this.me = this.ts.me;
    
  }

  

  changeName(newName: string) {
    this.me.name = newName;
  }

  changeHeight(newHeight: any) {
    if(! /^[0-9]+$/.test(newHeight)){
      
    }else{
      newHeight = parseInt(newHeight);
      this.me.height = newHeight;
    }
  }

  changeWeight(newWeight: any) {
    if(! /^[0-9]+$/.test(newWeight)){
      
    }else{
      newWeight = parseInt(newWeight);
      this.me.weight = newWeight;
    }
  }

}
