const { encode, decode } = require('./encodeDecode.js');

describe(`Teste das Funções encode e decode`, () => {
  it(`Teste se encode e decode são funções`, () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it(`Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;`, () => {
    expect(encode(`a, e, i, o, u`)).toEqual(`1, 2, 3, 4, 5`);
  });

  it(`Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;`, () => {
    expect(decode(`1, 2, 3, 4, 5`)).toEqual(`a, e, i, o, u`);
  });

  it(`Teste se as demais letras/números não são convertidos para cada caso;`, () => {
    expect(encode(`teste`)).toEqual(`t2st2`);
    expect(encode(`eu tenho 88 anos`)).toEqual(`25 t2nh4 88 1n4s`);
    expect(decode(`t2st2`)).toEqual(`teste`);
    expect(decode(`25 t2nh4 88 1n4s`)).toEqual(`eu tenho 88 anos`);
  });

  it(`Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.`, () => {
    expect(encode('teste').length).toEqual(5);
    expect(decode('t2st2').length).toEqual(5);
  });
});