import Robot from "./Robot";

class DogRobot extends Robot {
    static {
        this.id = 100;
    }

    getId(): number {
        return DogRobot.id;
    }
}

const dog = new DogRobot();
console.log(dog.getId());