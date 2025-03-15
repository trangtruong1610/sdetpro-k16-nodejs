import AnimalController from "./AnimalController";
import Dog from "./Dog";
import Tiger from "./Tiger";
import Horse from "./Horse";

const dog = new Dog()
const tiger = new Tiger();
const horse = new Horse();
const animalController = new AnimalController();
animalController.findWinner([dog, tiger, horse]);