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
    myRoutines: Routine[];

    
    drawRoutines() {

        const index = 0;

        $("#routine-List").html(
            this.routineList.map(x=> `<button class="list-group-item">${x.name}</button>`).join("")
        );

        // $("#routine-List button").each(function(index) {
        //     $(this).attr("id", "id" + index);
        //     index++;
        // });
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

$('.list-group-item').click(function(e) {
    e.preventDefault();
    const workoutName = e.target.textContent;

    document.getElementById('default-message').innerHTML = '';
    $("#my-routines").append($("<li class=\"list-group-item\">").text(workoutName));
    //const newRoutine = new Routine(workoutName);
    //tracker.drawMyRoutines();
});