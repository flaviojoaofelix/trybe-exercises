class PessoaEstudante {
    constructor(matricula, nome) {
        this._matricula = matricula;
        this._nome = nome;
        this._notasProva = [];
        this._notasTrabalho = [];
    }
    set matricula(numeroDaMatricula) {
        this._matricula = numeroDaMatricula;
    }
    get matricula() {
        return this._matricula;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    get nome() {
        return this._nome;
    }
    set notasProva(notas) {
        if (notas.length > 4) {
            throw new Error('O sistema permite no máximo 4 notas de prova');
        }
        this._notasProva = notas;
    }
    get notasProva() {
        return this._notasProva;
    }
    set notasTrabalho(notas) {
        if (notas.length > 4) {
            throw new Error('O sistema permite apenas 2 notas de trabalhos');
        }
        this._notasTrabalho = notas;
    }
    get notasTrabalho() {
        return this._notasTrabalho;
    }
    somaNotas() {
        const todasAsNotas = [...this.notasProva, ...this.notasTrabalho];
        return todasAsNotas.reduce((notaAnterior, notaAtual) => {
            const somaDasNotas = notaAtual + notaAnterior;
            return somaDasNotas;
        }, 0);
    }
    mediaNotas() {
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
