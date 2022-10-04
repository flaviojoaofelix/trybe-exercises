function convert(value: number, fromUnit: string, toUnit: string): number {
  const units = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(10, exponent);
}

console.log(convert(1, 'kl', 'l'));