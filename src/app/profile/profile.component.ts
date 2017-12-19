import { Component, OnInit } from '@angular/core';
import { ME, TrackerService } from "../models/tracker.service";
import { Person } from '../models/Person';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  ts: TrackerService;
  me: Person;
  constructor(trackerService: TrackerService) {
    this.ts = trackerService;
    this.me = trackerService.me;
  }

  ngOnInit() {
  }

  changeName(newName: string) {
    this.me.name = newName;
  }

}
