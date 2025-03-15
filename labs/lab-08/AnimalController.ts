import Animal from "./Animal";

export default class AnimalController {

    findWinner(listAnimalSpeed: Animal[]): void {
        let winner = listAnimalSpeed[0];
        for (const animal of listAnimalSpeed) {
            if (animal.getSpeed() > animal.getMaxSpeed()) {
                animal.setSpeed(animal.getMaxSpeed());
            }
            console.log(animal.getName(), animal.getSpeed());
            if (animal.getSpeed() > winner.getSpeed()) {
                winner = animal;
            }
        }
        console.log(`Winner is ${winner.getName()} with speed ${winner.getSpeed()}`);
    }
}
