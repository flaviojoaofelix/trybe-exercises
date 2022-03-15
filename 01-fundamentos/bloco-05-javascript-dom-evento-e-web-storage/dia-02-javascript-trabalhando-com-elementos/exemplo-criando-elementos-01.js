// Crie um irmão para elementoOndeVoceEsta .
// Crie um filho para elementoOndeVoceEsta .
// Crie um filho para primeiroFilhoDoFilho .
// A partir desse filho criado, acesse terceiroFilho .

pai = document.getElementById('pai');
elemento = document.createElement('section');
elemento.setAttribute('id', 'irmaoElementoOndeVoceEsta');
pai.appendChild(elemento);

pai = document.getElementById('elementoOndeVoceEsta');
elemento = document.createElement('section');
elemento.setAttribute('id', 'filhoElementoOndeVoceEsta');
pai.appendChild(elemento);

pai = document.getElementById('primeiroFilhoDoFilho');
elemento = document.createElement('section');
elemento.setAttribute('id', 'primeiroFilhoDoFilhoDoFilho');
pai.appendChild(elemento);

console.log(document.getElementById('primeiroFilhoDoFilhoDoFilho').parentElement.parentElement.nextElementSibling);
