"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise = __importStar(require("./exercises"));
console.log(Exercise.greeter('Flávio'));
console.log(Exercise.personAge('Flávio', 37));
console.log(`A soma do array é igual a ${Exercise.sumArray([12, 14, 16])}`);
console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`TriÂngulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);
console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);
console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura  30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);
console.log(`Área de um losango de diagonal maior 32 e menor 18: ${Exercise.lozenge(32, 18)}cm`);
console.log(`Área de um losango de diagonal maior 200 e menor 50: ${Exercise.lozenge(200, 50)}cm`);
console.log(`Área de um losango de diagonal maior 75 e menor 25: ${Exercise.lozenge(75, 25)}cm`);
console.log(`Área de um trapézio que tem base maior 100, base menor 70 e altura 50: ${Exercise.trapeze(100, 70, 50)}`);
console.log(`Área de um trapézio que tem base maior 75, base menor 50 e altura 35: ${Exercise.trapeze(75, 50, 35)}`);
console.log(`Área de um trapézio que tem base maior 150, base menor 120 e altura 80: ${Exercise.trapeze(150, 120, 80)}`);
console.log(`Área de um círculo de raio 25: ${Exercise.circle(25)}cm`);
console.log(`Área de um círculo de raio 100: ${Exercise.circle(100)}cm`);
console.log(`Área de um círculo de raio 25: ${Exercise.circle(12.5)}cm`);
