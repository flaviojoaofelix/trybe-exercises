const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const message = `Olá ${order.order.delivery.deliveryPerson}, `
  + `entrega para: ${order.name}, Telefone: ${order.phoneNumber}, `
  + `${order.address.street}, Nº: ${order.address.number} - AP: ${order.address.apartment}.`

  return message;
}

console.log(customerInfo(order));

const getPizza = (order) => {
  const pizzaOrder = Object.keys(order.order.pizza);
  let pizzas = ``;

  for (let i = 0; i < pizzaOrder.length; i += 1) {
    if (i === pizzaOrder.length - 1) {
      pizzas += `${pizzaOrder[i]}`
    } else {
      pizzas += `${pizzaOrder[i]}, `
    }
  }

  return pizzas;
};

const getDrink = (order) => {
  const drinkOrder = Object.keys(order.order.drinks);
  let drinks = ``;

  for (let i = 0; i < drinkOrder.length; i += 1) {
    if (i === drinkOrder.length - 1) {
      drinks += `${drinkOrder[i]}`
    } else {
      drinks += `${drinkOrder[i]}, `
    }
  }

  return drinks;
};

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const pizzas = getPizza(order);
  const drinks = getDrink(order);

  const message = `Olá ${order.name}, `
  + `o total do seu pedido de ${pizzas} e`
  + ` ${drinks} é R${order.payment.total}.`;

  return message;
}

console.log(orderModifier(order));