export default class Animal {
    protected speed: number;
    protected name: string;
    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.speed = Math.floor(Math.random() * maxSpeed);
    }

    getName(){
        return this.name;
    }

    getSpeed(){
        return this.speed;
    }

}