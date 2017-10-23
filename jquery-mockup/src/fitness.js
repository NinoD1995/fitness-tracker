"use strict";
exports.__esModule = true;
var $ = require("jquery");
var Routine = /** @class */ (function () {
    function Routine(name) {
        this.name = name;
    }
    return Routine;
}());
exports.Routine = Routine;
var Tracker = /** @class */ (function () {
    function Tracker() {
        this.routineList = [
            { name: "Weight Lifting" },
            { name: "Jogging" },
            { name: "Cycling" }
        ];
    }
    Tracker.prototype.drawRoutines = function () {
        var index = 0;
        $("#routine-List").html(this.routineList.map(function (x) { return "<button class=\"list-group-item\">" + x.name + "</button>"; }).join(""));
        $("#routine-List button").each(function (index) {
            $(this).attr("id", "id" + index);
            index++;
        });
    };
    Tracker.prototype.drawMyRoutines = function () {
        $("#my-routines").html(this.myRoutines.map(function (x) { return "<li class=\"list-group-item\">" + x.name + "</li>"; }).join(""));
    };
    return Tracker;
}());
exports.Tracker = Tracker;
//Controller
var tracker = new Tracker();
tracker.drawRoutines();
$('.list-group-item').click(function (e) {
    e.preventDefault();
    //const workoutID = e.target.id;
    var workoutName = e.target.textContent;
    document.getElementById('default-message').innerHTML = '';
    //$("#my-routines").append($("<li class=\"list-group-item\">").text(workoutName));
    var newRoutine = new Routine(workoutName);
    tracker.myRoutines.push(newRoutine);
    console.log(JSON.stringify(tracker.routineList));
    tracker.drawMyRoutines();
});
