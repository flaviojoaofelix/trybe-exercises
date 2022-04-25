// Exercício 02

const getCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}

const appendCoins = async () => {
  const coins = await getCoins();
  const list = document.getElementById('list');

  coins.forEach((coin) => {
    const li = document.createElement('li');
    const price = Number(coin.priceUsd);
    li.innerText = `${coin.name} (${coin.symbol}): ${price.toFixed(2)}`;

    list.appendChild(li);
  });
}

window.onload = () => appendCoins();
