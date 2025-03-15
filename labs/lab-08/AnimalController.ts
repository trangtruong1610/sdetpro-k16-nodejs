import Animal from "./Animal";

export default class AnimalController {

   calculateSpeed(animal: Animal): number {
        animal.speed = Math.floor(Math.random() * 100) + 1;
        if (animal.speed > animal.maxSpeed) {
            animal.speed = animal.maxSpeed;
        }
        return animal.speed
    }

    findWinner(listAnimalSpeed: Animal[]): void {
       let winner = listAnimalSpeed[0];
        for (const animal of listAnimalSpeed) {
            animal.speed = this.calculateSpeed(animal)
            console.log(animal.name, animal.speed);
            if (animal.speed > winner.speed) {
                winner = animal;
            }
        }
        console.log(`Winner is ${winner.name} with speed ${winner.speed}`);
    }
}
