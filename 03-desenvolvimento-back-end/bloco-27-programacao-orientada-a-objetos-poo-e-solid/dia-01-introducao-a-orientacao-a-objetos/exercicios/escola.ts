class pessoaEstudante {
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
}