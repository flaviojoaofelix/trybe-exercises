"use strict";
exports.__esModule = true;
var TV = /** @class */ (function () {
    function TV(brand, size, resolution, connections) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    TV.prototype.turnOn = function () {
        console.log("\n    Brand: " + this.brand + "\n    Size: " + this.size + "\n    Resolution: " + this.resolution + "\n    Connections: " + this.connections + "\n    ");
    };
    return TV;
}());
exports["default"] = TV;
var tv01 = new TV('Samsung', 55, '4k', ['HDMI', 'USB', 'Ethernet', 'Wifi']);
tv01.turnOn();
