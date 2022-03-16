// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

let pai = document.getElementById('pai');
pai.removeChild(pai.firstElementChild);

let eOVE = pai.firstElementChild;
eOVE.removeChild(eOVE.lastElementChild);

pai.removeChild(pai.lastElementChild);
pai.removeChild(pai.lastElementChild);