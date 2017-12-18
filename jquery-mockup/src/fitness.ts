import * as $ from 'jquery';

export class Routine {
    name: string;
    duration: number;

    constructor(name:string) {
        this.name = name;
    }

}
export class Tracker {
    routineList: Routine[] = [];
    myRoutines: Routine[] = [];
    totalTime: number = 0;

    init() {
        return $.when(
            $.getJSON("/fitness/routines").done( data =>{
                this.routineList = [new Routine(data)];
            })
        );
    }
    
    drawRoutines() {
        $("#routine-List").html(
            this.routineList.map(x=> `<button class="list-group-item">${x.name}</button>`).join("")
        );
    }

    drawMyRoutines() {
        $("#my-routines").html(
            this.myRoutines.map(x=> `<li class="list-group-item">${x.name}</li>`).join("")
        );

        $("#time-spent").html(
            this.myRoutines.map(x=> `<li class="list-group-item">${x.duration + " minutes"}</li>`).join("")
        );
    }

    durationPrompt() {
        var input, duration;

        input = prompt("Enter the amount of time you did this routine for (in minutes)");
        while(! /^[0-9]+$/.test(input)) {
            input = prompt("Invalid input. Please enter an amount of time in minutes");
        }
        duration = parseInt(input);
        this.totalTime += duration;
        $("#total-time").text("Total Time = " + this.totalTime + " minutes")
        
        return duration;
    }
}

//Controller

const tracker = new Tracker();
let empty:boolean = true;
var duration;


tracker.drawRoutines();

$('.list-group-item').click(function(e) {
    e.preventDefault();
    duration = tracker.durationPrompt();
    const workoutName = e.target.textContent;
    if(empty) {
        document.getElementById('default-message').remove();
        empty = false;
    }
    const newRoutine = new Routine(workoutName);
    newRoutine.duration = duration;
    tracker.myRoutines.push(newRoutine);
    tracker.drawMyRoutines();
});