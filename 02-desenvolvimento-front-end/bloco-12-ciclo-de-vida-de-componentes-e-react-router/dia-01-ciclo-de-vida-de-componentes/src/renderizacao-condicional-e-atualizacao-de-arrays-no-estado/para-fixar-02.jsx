// PersonDetails.js
import React, { Component } from 'react';
import Loading from './para-fixar-02-loading';
import PersonCard from './para-fixar-02-personcard';

class PersonDetails extends Component {
  constructor() {
    super();

    // No construtor, criamos os nossos estados de `loading` e `person`,
    // que vai receber a requisição para a api.
    // Começamos com o `loading` como `true`, pois queremos que ele exiba a nossa 
    // mensagem de "carregando" enquanto não renderizamos a primeira tela.
    // E o `person` setamos como um array vazio,
    // pois ele irá receber a nossa API.

    this.state = {
      loading: true,
      person: [],
    };
  }

  // Como estudamos, o componentDidMount vai disparar ações após o componente
  // ser inserido no DOM, por isso dizemos que é
  // o ideal para realizar requisições e atribuímos ao nosso estado Person
  // o `data.results` que trás os nossos dados da API.
  // Além disso, atribuímos como `false` o `loading`, uma vez que quando a
  // página é renderizada, não teremos mais a mensagem de "carregando".

  componentDidMount() {
    const url = 'https://api.randomuser.me/';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Note que, nesse ponto o nosso data retorna um Objeto e, se acessarmos
        // o `data.results`, teremos nosso array de objetos com as informações
        // das pessoas que são geradas aleatoriamente pela requisição.
        // console.log(data);
        // console.log(data.results);
        this.setState({
          person: data.results,
          loading: false,
        });
      });
  }

  // O shouldComponentUpdate irá verificar se a pessoa renderizada pela API tem
  // mais de 50 anos e com isso, irá autorizar se o componente atualiza ou não.
  // Caso não atualize, uma mensagem de "carregando..." será exibida na tela.
  // Caso ocorra essa situação, dê um console.log no nextState e verifique a
  // idade da pessoa que é trazida pela API.
  shouldComponentUpdate(_nextProps, nextState) {
    // console.log(nextState);
    const AGE = 50;
    if (nextState.person[0].dob.age > AGE) {
      return false;
    }
    return true;
  }

  // Considerando que a API retorna um array de objetos,
  // a função abaixo foi criada para extrair extrair os dados que precisamos e
  // atribuir esses dados a suas respectivas keys.
  getUserElements(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }

  render() {
    const { person, loading } = this.state;
    // Condição criada para verificar se o estado de `loading` for `true`, irá
    // trazer o componente de Loading com a mensagem de "carregando..."
    if (loading) return <Loading />;
    return (
      // Para renderizar as informações que precisamos, foi feito um map que 
      // traz o componente de PersonCard, que contém as informações com nome,
      // email, idade e a foto. Passamos como props a função de getUserElements
      // que retornar um objeto com as informações da pessoa e como parâmetro da
      // função, passamos o currentPerson.
      <div>
        {person.map((currentPerson, index) => (
          <PersonCard
            key={index}
            person={this.getUserElements(currentPerson)}
          />))}
      </div>
    );
  }
}

export default PersonDetails;
