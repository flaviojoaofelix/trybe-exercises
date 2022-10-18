class Cliente {
    constructor(nome) {
        this._nome = nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    get nome() {
        return this._nome;
    }
}
class ItemPedido {
    constructor(item, preco) {
        this._item = item;
        this._preco = preco;
    }
    set item(item) {
        this._item = item;
    }
    get item() {
        return this._item;
    }
    set preco(valor) {
        this._preco = valor;
    }
    get preco() {
        return this._preco;
    }
}
class Pedido {
    constructor(cliente, items, formaDePagamento, desconto) {
        this._cliente = cliente;
        this._items = items;
        this._formaDePagamento = formaDePagamento;
        this._desconto = desconto;
    }
    set cliente(novoCliente) {
        this._cliente = novoCliente;
    }
    get cliente() {
        return this._cliente;
    }
    set items(novosItems) {
        this._items = novosItems;
    }
    get items() {
        return this._items;
    }
    set formaDePagamento(novaFormaDePagamento) {
        this._formaDePagamento = novaFormaDePagamento;
    }
    get formaDePagamento() {
        return this._formaDePagamento;
    }
    set desconto(novoValorDesconto) {
        this._desconto = novoValorDesconto;
    }
    get desconto() {
        return this._desconto;
    }
}
// Testando
const cliente = new Cliente('Flávio');
const item01 = new ItemPedido('Risoles de Queijo', 6.00);
const item02 = new ItemPedido('Café Expresso', 4.00);
const item03 = new ItemPedido('Copo da Felicidade', 20.00);
const pedido = new Pedido(cliente, [item01, item02, item03], 'Cartão de Crédito', 0.30);
console.log(pedido);
