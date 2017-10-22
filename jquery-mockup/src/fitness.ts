import * as $ from 'jquery';

export class Routine {
    name: string;
}

export class Tracker {
    routineList: Routine[] = [
        { name: "Weight Lifting"},
        { name: "Jogging"},
        { name: "Cycling"}
    ];
    myRoutines: Routine[];

    
    drawRoutines() {
        $("#routine-List").html(
            this.routineList.map(x=> `<button class="list-group-item" id="cmd-add">${x.name}</button>`).join("")
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

tracker.drawRoutines();

$("#cmd-add").click(function(e) {
    e.preventDefault();
    const workout = document.getElementById("cmd-add").textContent;
    tracker.myRoutines = [
        { name: workout}
    ];
    tracker.drawMyRoutines();
})