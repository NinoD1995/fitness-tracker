import { Routine } from "./tracker";

export class Person {
    constructor(n: string, ID: string, pic: string) {
      this.name = n;
      this.id = ID;
      this.picture = pic;
      this.height = 0;
      this.weight = 0;
    }
    id: string;
    picture: string;
    name: string;
    myRoutines: Routine[] = [];
    weight: number;
    height: number;
}