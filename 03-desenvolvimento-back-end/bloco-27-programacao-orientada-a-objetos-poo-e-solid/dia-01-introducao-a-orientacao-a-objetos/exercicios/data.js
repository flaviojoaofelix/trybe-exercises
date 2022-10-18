class Data {
    constructor(dia, mes, ano) {
        this.validaData(dia, mes, ano);
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
    validaData(dia, mes, ano) {
        const data = `${ano}-${mes}-${dia}`;
        if (new Date(data).getDate() !== dia) {
            this.dia = 1;
            this.mes = 1;
            this.ano = 1900;
        }
        else {
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
        }
        this._dataCompleta = `${this._ano}-${this._mes}-${this._dia}`;
    }
    mesPorExtenso() {
        const mesPorExtenso = {
            1: 'Janeiro',
            2: 'Fevereiro',
            3: 'Março',
            4: 'Abril',
            5: 'Maio',
            6: 'Junho',
            7: 'Julho',
            8: 'Agosto',
            9: 'Setembro',
            10: 'Outubro',
            11: 'Novembro',
            12: 'Dezembro',
        };
        return mesPorExtenso[this._mes];
    }
    anoBissexto() {
        return (this._ano % 4 == 0 && this._ano % 100 !== 0);
    }
    compararDatas(data) {
        const dataParaComparar = `${data.ano}-${data.mes}-${data.dia}`;
        if (new Date(this._dataCompleta) > new Date(dataParaComparar))
            return 1;
        if (new Date(this._dataCompleta) < new Date(dataParaComparar))
            return -1;
        return 0;
    }
}
// Testando - Questão 05
const data1 = new Data(11, 6, 1984);
console.log(data1);
data1.ano = 1985;
console.log(`${data1.dia}/${data1.mes}/${data1.ano}`);
// Testando - Questão 06
console.log(data1.mesPorExtenso());
console.log(`Ano bissexto: ${data1.anoBissexto()}`);
const data2 = new Data(11, 6, 1984);
console.log(data1.compararDatas(data2));
