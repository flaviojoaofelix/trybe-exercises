export default class TV {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  public turnOn(): void {
    console.log(`
    Brand: ${this.brand}
    Size: ${this.size}
    Resolution: ${this.resolution}
    Connections: ${this.connections}
    `);
  }
}

const tv01 = new TV('Samsung', 55, '4k', ['HDMI', 'USB', 'Ethernet', 'Wifi']);
tv01.turnOn();