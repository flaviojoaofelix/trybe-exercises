class Cliente {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  set nome(novoNome: string) {
    this._nome = novoNome;
  }

  get nome(): string {
    return this._nome;
  }
}

class ItemPedido {
  private _item: string;
  private _preco: number;

  constructor(item: string, preco: number) {
    this._item = item;
    this._preco = preco;
  }

  set item(item: string) {
    this._item = item;
  }

  get item(): string {
    return this._item;
  }

  set preco(valor: number) {
    this._preco = valor;
  }

  get preco(): number {
    return this._preco;
  }
}

class Pedido {
  private _cliente: Cliente;
  private _items: ItemPedido[];
  private _formaDePagamento: string;
  private _desconto: number;

  constructor(cliente: Cliente, items: ItemPedido[], formaDePagamento: string, desconto: number) {
    this._cliente = cliente;
    this._items = items;
    this._formaDePagamento = formaDePagamento;
    this._desconto = desconto;
  }

  set cliente(novoCliente: Cliente) {
    this._cliente = novoCliente;
  }

  get cliente(): Cliente {
    return this._cliente;
  }

  set items(novosItems: ItemPedido[]) {
    this._items = novosItems;
  }

  get items(): ItemPedido[] {
    return this._items;
  }

  set formaDePagamento(novaFormaDePagamento: string) {
    this._formaDePagamento = novaFormaDePagamento;
  }

  get formaDePagamento(): string {
    return this._formaDePagamento;
  }

  set desconto(novoValorDesconto: number) {
    this._desconto = novoValorDesconto;
  }

  get desconto(): number {
    return this._desconto;
  }
}

// Testando

const cliente = new Cliente('Flávio');

const item01 = new ItemPedido('Risoles de Queijo', 6.00);
const item02 = new ItemPedido('Café Expresso', 4.00);
const item03 = new ItemPedido('Copo da Felicidade', 20.00)

const pedido = new Pedido(cliente, [item01, item02, item03], 'Cartão de Crédito', 0.30)

console.log(pedido);