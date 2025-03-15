export default class Robot {
    static id = 0

    constructor() {
        Robot.id++;
    }

    getId() {
        return Robot.id;
    }
}

// const lulu = new Robot();
// const meomeo = new Robot();
