import Animal from "./Animal";

export default class AnimalController {

    static findWinner(listAnimals: Animal[]): Animal {
        let winner = listAnimals[0];
        for (const animal of listAnimals) {
            console.log(animal.getName(), animal.getSpeed());
            if (animal.getSpeed() > winner.getSpeed()) {
                winner = animal;
            }
        }
        return winner
    }
}
