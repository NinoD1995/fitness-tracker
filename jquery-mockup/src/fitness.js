"use strict";
exports.__esModule = true;
var $ = require("jquery");
var Routine = /** @class */ (function () {
    function Routine() {
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
        $("#routine-List").html(this.routineList.map(function (x) { return "<button class=\"list-group-item\">" + x.name + "</button>"; }).join(""));
    };
    return Tracker;
}());
exports.Tracker = Tracker;
var tracker = new Tracker();
tracker.drawRoutines();
