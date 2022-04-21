// Testes Assíncronos com Callbacks - Exemplo 02

const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b + 1;
    callback(result);
  }, 500);
};

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});