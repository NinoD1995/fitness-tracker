import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl } from "@angular/forms";
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { Http } from "@angular/http";
import { TrackerService } from '../models/tracker.service';
import { Tracker, Routine } from '../models/tracker';
import { FitnessComponent } from "../fitness/fitness.component";
import { Person } from '../models/Person';


@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css']
})


export class TypeaheadComponent {

  constructor(private http: Http, private trackerService: TrackerService) { 
    
  }

  tracker: Tracker;
  routines: Routine[];
  myControl: FormControl = new FormControl();
  fitness: FitnessComponent;
  me: Person;

  options = [
    "Jogging",
    "Weight Lifting",
    "Cycling",
    "Swimming",
    "Yoga"
  ];

  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
      this.http.get(this.trackerService.apiRoot + "/fitness/routines").subscribe( data =>{
        this.options = data.json();
    });
  }

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

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

}
