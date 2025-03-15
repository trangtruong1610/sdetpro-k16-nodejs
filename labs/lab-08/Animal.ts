export default class Animal {
    protected speed: number;
    protected name: string;
    protected maxSpeed: number;
    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.speed = this.calculateSpeed()
    }

    calculateSpeed(){
        return Math.floor(Math.random() * 100) + 1;
    }

    getName(){
        return this.name;
    }

    getMaxSpeed(){
        return this.maxSpeed;
    }

    getSpeed(){
        return this.speed;
    }

    setSpeed(speed: number){
        this.speed = speed;
    }
}