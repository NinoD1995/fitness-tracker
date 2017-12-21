import { Component, OnInit } from '@angular/core';
import { Tracker, Routine } from '../models/tracker';
import { Router } from '@angular/router';
import { Http } from "@angular/http";
import { TrackerService } from '../models/tracker.service';
import { Person } from '../models/person';


@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.css']
})
export class FitnessComponent implements OnInit {

  me: Person;
  constructor(private http: Http, private router: Router, private trackerService: TrackerService) { }

  ngOnInit() {
    if(this.trackerService.me == null) {
      //this.router.navigate(['/login']);
    }
    this.http.get(this.trackerService.apiRoot + "/fitness/routines").subscribe( data =>{
      this.tracker.routineList = data.json();
    });
    this.me = this.trackerService.me;
    setInterval(()=> this.update(), 1000)
  }

  update(){
    this.http.get(this.trackerService.apiRoot + "/fitness/routines").subscribe( data =>{
        this.tracker.routineList = data.json();
    });
    this.http.get(this.trackerService.apiRoot + "/fitness/myRoutines").subscribe( data =>{
        this.me.myRoutines = data.json();
    });
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

    this.http.post(this.trackerService.apiRoot + "/fitness/myRoutines", ex1).subscribe(res=>{
      
      this.me.myRoutines.push( res.json() );
      this.tracker.myRoutines.push( res.json());
    });

    /* this.tracker.myRoutines.push(ex1);
    this.me.myRoutines.push(ex1); */
    
    console.log(exerciseName);
  }

  removeFromMyExercises(key: Routine) {
    var index = this.tracker.myRoutines.indexOf(key, 0);
    if (index > -1) {
      this.tracker.totalTime -= key.duration;
      this.tracker.myRoutines.splice(index, 1);
      
    }
  }

  
}