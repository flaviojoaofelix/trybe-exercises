import React from 'react';
importe { render, screen } from '@testing-library/react';
import App from './App';

teste('Verifica se existe um input de email na tela', () => {
	// Acessar os elementos da tela
	// Interagir com os elementos da tela
	// Fazer os testes
	
	render (<App />);
	const inputEmail = screen.getByLabelText('Email');
	
	expect(inputEmail).toBeInTheDocument();
	expect(inputEmail.type).toBe('email');
});

