class TV {
    constructor(brand, size, resolution, connections) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }
    turnOn() {
        console.log(`
    Brand: ${this._brand}
    Size: ${this._size}
    Resolution: ${this._resolution}
    Connections: ${this._connections}
    `);
    }
    set connectedTo(connection) {
        if (this._connections.indexOf(connection) !== -1) {
            this._connectedTo = connection;
            return;
        }
        console.log(`
    Sorry, connection unavailable!
    `);
        return;
    }
    get connectedTo() {
        if (this._connectedTo === undefined) {
            return `
      There is currently no connection
      `;
        }
        return `
    Connected to: ${this._connectedTo}
    `;
    }
}
const tv01 = new TV('Samsung', 55, '4k', ['HDMI', 'USB', 'Ethernet', 'Wifi']);
tv01.turnOn();
tv01.connectedTo = 'HDMI';
console.log(tv01.connectedTo);
console.log(`Trying to connect to VGA...`);
tv01.connectedTo = 'VGA';
