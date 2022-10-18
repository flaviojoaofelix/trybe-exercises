class PessoaEstudante {
  private _matricula: number;
  private _nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor(matricula: number, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProva = [];
    this._notasTrabalho = [];
  }

  set matricula(numeroDaMatricula: number) {
    this._matricula = numeroDaMatricula;
  }

  get matricula(): number {
    return this._matricula;
  }

  set nome(novoNome: string) {
    this._nome = novoNome;
  }

  get nome(): string {
    return this._nome;
  }

  set notasProva(notas: number[]) {
    if (notas.length > 4) {
      throw new Error('O sistema permite no máximo 4 notas de prova');
    }
    this._notasProva = notas;
  }

  get notasProva(): number[] {
    return this._notasProva;
  }

  set notasTrabalho(notas: number[]) {
    if (notas.length > 4) {
      throw new Error('O sistema permite apenas 2 notas de trabalhos');
    }
    this._notasTrabalho = notas;
  }

  get notasTrabalho(): number[] {
    return this._notasTrabalho;
  }

  public somaNotas(): number {
    const todasAsNotas = [...this.notasProva, ...this.notasTrabalho]
    
    return todasAsNotas.reduce((notaAnterior, notaAtual) => {
      const somaDasNotas = notaAtual + notaAnterior;
      return somaDasNotas;
    }, 0);
  }

  public mediaNotas(): number {
    const somaDasNotas = this.somaNotas();
    const divisor = this.notasProva.length + this.notasTrabalho.length;

    return Math.round(somaDasNotas / divisor);
  }
}

// Exercício 02 - Testando
const PessoaEstudante01 = new PessoaEstudante(9999999, 'José Dirceu');
PessoaEstudante01.notasProva = [9, 7, 10, 8];
PessoaEstudante01.notasTrabalho = [8, 7];

console.log(PessoaEstudante01);
console.log(`Soma das Notas: ${PessoaEstudante01.somaNotas()}`);
console.log(`Média das Notas: ${PessoaEstudante01.mediaNotas()}`);