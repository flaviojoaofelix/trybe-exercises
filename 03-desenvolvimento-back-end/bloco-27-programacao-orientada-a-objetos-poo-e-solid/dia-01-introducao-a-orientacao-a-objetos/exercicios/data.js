class Data {
    constructor(dia, mes, ano) {
        this._dia = dia;
        this._mes = mes;
        this._ano = ano;
    }
    set dia(novoDia) {
        this._dia = novoDia;
    }
    get dia() {
        return this._dia;
    }
    set mes(novoMes) {
        this._mes = novoMes;
    }
    get mes() {
        return this._mes;
    }
    set ano(novoAno) {
        this._ano = novoAno;
    }
    get ano() {
        return this._ano;
    }
}
// Testando - Questão 05
const data = new Data(11, 6, 1984);
console.log(data);
data.ano = 1985;
console.log(`${data.dia}/${data.mes}/${data.ano}`);
