import House from "./HouseWithBuilderDesignPattern";

// First approach
let builder = new House.Builder();
builder.setTopRoofColor("Red");
builder.setWindowNumber(4);
builder.setColor("White");
builder.setMainDoorNumber(1);
let teoHouse = builder.build();
console.log(teoHouse);

