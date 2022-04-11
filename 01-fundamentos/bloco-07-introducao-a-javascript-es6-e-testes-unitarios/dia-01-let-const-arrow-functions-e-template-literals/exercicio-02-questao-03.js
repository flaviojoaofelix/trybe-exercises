let count = 0;

const clickCount = () => {
  count += 1;

  document.getElementById("result").innerText = `${count} Cliques`;
};

const resetCount = () => {
  count = 0;

  document.getElementById("result").innerText = `0 Cliques`;
};

window.onload = () => {
  const buttonCount = document.getElementById("click");
  buttonCount.addEventListener("click", clickCount);

  const buttonReset = document.getElementById("reset");
  buttonReset.addEventListener("click", resetCount);
};
