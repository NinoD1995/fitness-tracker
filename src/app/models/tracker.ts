export class Routine {
    name: string;
    duration: number;

    constructor(n: string, d: number) {
        this.name = n;
        this.duration = d;
      }
}
export class Tracker {
    myRoutines: Routine[] = [];
    totalTime: number=0;
}