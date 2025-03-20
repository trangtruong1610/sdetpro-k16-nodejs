"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Robot = /** @class */ (function () {
    function Robot() {
        Robot.id++;
    }
    Robot.prototype.getId = function () {
        return Robot.id;
    };
    Robot.id = 0;
    return Robot;
}());
exports.default = Robot;
var lulu = new Robot();
var meomeo = new Robot();
