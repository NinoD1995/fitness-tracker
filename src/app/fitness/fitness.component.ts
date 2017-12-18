import { Component, OnInit } from '@angular/core';
import { Tracker, Routine } from '../models/tracker';
import { Router } from '@angular/router';
import { Http } from "@angular/http";


@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.css']
})
export class FitnessComponent implements OnInit {

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    
  }

  tracker = new Tracker();

  AddToDone(exerciseName: string) {
    var input;
    do{
      input = prompt("Enter the amount of time you did this routine for (in minutes)");
    } while(! /^[0-9]+$/.test(input))
    
    var duration = parseInt(input);
    var ex1 = new Routine(exerciseName, duration);
    this.tracker.totalTime += duration;
    this.tracker.myRoutines.push(ex1);
    console.log(exerciseName + ", ");
  }

  removeFromMyExercises(key: Routine) {
    var index = this.tracker.myRoutines.indexOf(key, 0);
    if (index > -1) {
      this.tracker.totalTime -= key.duration;
      this.tracker.myRoutines.splice(index, 1);
    }
  }
}