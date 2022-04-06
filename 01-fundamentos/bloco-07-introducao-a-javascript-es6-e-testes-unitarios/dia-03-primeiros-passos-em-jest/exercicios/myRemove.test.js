const myRemove = require('./myRemove.js');

describe(`Teste da Função MyRemove(arr, item)`, () => {
  it(`Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado`, () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).not.toContain(3);
  });

  it(`Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]`, () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).not.toEqual(expect.arrayContaining(arr));
  });

  it(`Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado`, () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 5)).toEqual(arr);
  });
});