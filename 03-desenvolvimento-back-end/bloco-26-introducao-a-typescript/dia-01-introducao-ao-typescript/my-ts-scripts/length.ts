export function convert(value: number, fromUnit: string, toUnit: string): number {
  const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}
