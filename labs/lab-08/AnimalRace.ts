import AnimalController from "./AnimalController";
import Dog from "./Dog";
import Tiger from "./Tiger";
import Horse from "./Horse";

const dog = new Dog()
const tiger = new Tiger();
const horse = new Horse();
let winner = AnimalController.findWinner([dog, tiger, horse]);
console.log("Winner is", winner.getName(), "with speed", winner.getSpeed());