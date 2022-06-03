import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Usar a documentação do React Test Library
// https://testing-library.com/docs/
// https://testing-library.com/docs/queries/about/
// https://github.com/testing-library/user-event
// https://github.com/testing-library/dom-testing-library/blob/master/src/event-map.js
// E do JEST
// https://jestjs.io/pt-BR/docs/expect

// Quando utilizamos o create-react-app para criar um projeto, a biblioteca user-event já vem instalada por padrão.
// Mas caso você precisa instalar ela manualmente, basta rodar o comando:

// npm install --save-dev @testing-library/user-event

// Acessar os elementos da tela
// Interagir com os elementos da tela (se necessário)
// Fazer os testes

describe('Tela de inserção de email', () => {
  it('Verifica se existe um input de email na tela', () => {
    // Acessar os elementos da tela
    render (<App />);
    const inputEmail = screen.getByLabelText('Email');

    // Fazer os testes
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });

  it('Verifica se existe dois botão', () => {
    // acessar os elementos da tela
    render(<App />);
    // const button = screen.getByRole('button'); // (funciona apenas com um botão na tela)
    const buttons = screen.getAllByRole('button'); 
    
    // fazer os testes
    expect(buttons).toHaveLength(2);
    // expect(button).toBeInTheDocument(); // (No caso de um botão)
  });

  it('Verifica se existe o botão de enviar', () => {
    // acessar os elementos da tela
    render(<App />);
    const button = screen.getByTestId('id-send'); 
    
    // fazer os testes
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Enviar');
  });

  it('Verifica que, ao digitar o email e clicar em Enviar, o email é renderizado', () => {
    // Acessar os elementos da tela
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    const button = screen.getByTestId('id-send');
    const userEmail = screen.getByTestId('id-email-user');

    // Interagir com os elementos (se for necessário)
    userEvent.type(inputEmail, 'teste@teste.com');
    userEvent.click(button);

    // Fazer os testes
    expect(inputEmail).toHaveValue('');
    expect(userEmail).toHaveTextContent('Valor: teste@teste.com');
  });
});
