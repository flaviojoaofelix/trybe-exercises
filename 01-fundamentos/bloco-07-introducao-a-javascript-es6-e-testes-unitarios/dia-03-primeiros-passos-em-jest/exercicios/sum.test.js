const sum = require("./sum.js");

describe('Verifica a Soma', () => {
  it('Se 4 + 5 Retorna 9', () => {
    expect(sum(4,5)).toBe(9);
  });

  it('Se 0 + 0 Retorna 0', () => {
    expect(sum(0,0)).toBe(0);
  });

  it(`Se 4 e "5" Retorna um Erro`, () => {
    expect(() => {
      sum(4,'5');
    }).toThrow();
  });

  it(`Se 4 e "5" Retorna a mensagem de erro "parameters must be numbers"`, () => {
    expect(() => {
      sum(4,'5');
    }).toThrow('parameters must be numbers');
  });
});