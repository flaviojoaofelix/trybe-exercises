class Data {
  private _dia: number;
  private _mes: number;
  private _ano: number;

  constructor(dia: number, mes: number, ano: number) {
    this._dia = dia;
    this._mes = mes;
    this._ano = ano;
  }

  set dia(novoDia: number) {
    this._dia = novoDia;
  }

  get dia(): number {
    return this._dia;
  }

  set mes(novoMes: number) {
    this._mes = novoMes;
  }

  get mes(): number {
    return this._mes;
  }

  set ano(novoAno: number) {
    this._ano = novoAno;
  }

  get ano(): number {
    return this._ano;
  }
}

// Testando - Questão 05

const data = new Data(11, 6, 1984);
console.log(data);
data.ano = 1985;
console.log(`${data.dia}/${data.mes}/${data.ano}`);
