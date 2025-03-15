import AnimalController  from "./AnimalController";
import Animal from "./Animal";

const dog = new Animal("Dog", 60)
const tiger = new Animal("Tiger", 100);
const horse = new Animal("Horse", 75);

const animalRace = new AnimalController();
animalRace.findWinner([dog, tiger, horse]);