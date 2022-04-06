const searchEmployee = require('./bonus.js');

describe('Teste da Função searchEmployee', () => {
  it('Verifica se é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Retorna o Primeiro Nome', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });
  it('Retorna o Sobrenome', () => {
    expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds');
  });
  it('Retorna a Lista de Especialidades', () => {
    const specialitiesArr = ['Frontend', 'Redux', 'React', 'CSS'];
    expect(searchEmployee('5569-4', 'specialities')).toEqual(expect.arrayContaining(specialitiesArr));
  });
  it('Verifica Retorno de Erros', () => {
    expect(() => { searchEmployee('8888-8', 'firstName') }).toThrow();
    expect(() => { searchEmployee('9852-2-2', 'name') }).toThrow();
  });
  it(`Verifica Retorno de Erro - ID`, () => {
    expect(() => { searchEmployee('9999-9', 'specialities') }).toThrow(`ID não encontrado!`);
  });
  it(`Verifica Retorno de Erro - Detail`, () => {
    expect(() => { searchEmployee('1256-4', 'specialitie') }).toThrow(`Informação não encontrada!`);
  });
});