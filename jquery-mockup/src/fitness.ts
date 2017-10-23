import * as $ from 'jquery';

export class Routine {
    name: string;

    constructor(name:string) {
        this.name = name;
    }
}

export class Tracker {
    routineList: Routine[] = [
        { name: "Weight Lifting"},
        { name: "Jogging"},
        { name: "Cycling"}
    ];
    myRoutines: Routine[] = [];

    
    drawRoutines() {
        $("#routine-List").html(
            this.routineList.map(x=> `<button class="list-group-item">${x.name}</button>`).join("")
        );
    }

    drawMyRoutines() {
        $("#my-routines").html(
            this.myRoutines.map(x=> `<li class="list-group-item">${x.name}</li>`).join("")
        );
    }
}

//Controller

const tracker = new Tracker();
let empty:boolean = true;

tracker.drawRoutines();

$('.list-group-item').click(function(e) {
    e.preventDefault();
    const workoutName = e.target.textContent;
    if(empty) {
        document.getElementById('default-message').remove();
        empty = false;
    }
    const newRoutine = new Routine(workoutName);
    tracker.myRoutines.push(newRoutine);
    console.log(tracker.myRoutines);
    tracker.drawMyRoutines();
});