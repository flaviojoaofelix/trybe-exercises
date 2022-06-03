import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Usar a documentação do React Test Library
// https://testing-library.com/docs/
// https://testing-library.com/docs/queries/about/
// E do JEST
// https://jestjs.io/pt-BR/docs/expect

test('Verifica se existe um input de email na tela', () => {
	// Acessar os elementos da tela
	// Interagir com os elementos da tela
	// Fazer os testes
	
	render (<App />);
	const inputEmail = screen.getByLabelText('Email');
	
	expect(inputEmail).toBeInTheDocument();
	expect(inputEmail.type).toBe('email');
});


test('Verifica se existe dois botão', () => {
	// acessar os elementos da tela
	render(<App />);
	// const button = screen.getByRole('button'); // (funciona apenas com um botão na tela)
	const buttons = screen.getAllByRole('button'); 
	
	// fazer os testes
	expect(buttons).toHaveLength(2);
	// expect(button).toBeInTheDocument(); // (No caso de um botão)
});

test('Verifica se existe o botão de enviar', () => {
	// acessar os elementos da tela
	render(<App />);
	const button = screen.getByTestId('id-send'); 
	
	// fazer os testes
	expect(button).toBeInTheDocument();
	expect(button).toHaveValue('Enviar');
});

