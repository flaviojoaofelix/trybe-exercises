// Exercício 07

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

// Teste
it('Verifica se a string é formatada para Letras Maísculas', (done) => {
  uppercase('Apenas Um Teste', (str) => {
    try {
      expect(str).toBe('APENAS UM TESTE');
      done();
    } catch (error) {
      done(error);
    }
  });
});