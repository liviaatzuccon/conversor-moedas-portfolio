const valorEl = document.getElementById("valor");
const deEl = document.getElementById("de");
const paraEl = document.getElementById("para");
const resultadoEl = document.getElementById("resultado");

const btnConverter = document.getElementById("converter");
const btnLimpar = document.getElementById("limpar");

// TAXAS FIXAS (exemplo)
const USD_BRL = 5.00;  // 1 USD = 5,00 BRL
const EUR_BRL = 5.50;  // 1 EUR = 5,50 BRL

function paraBRL(valor, moeda) {
  if (moeda === "BRL") return valor;
  if (moeda === "USD") return valor * USD_BRL;
  if (moeda === "EUR") return valor * EUR_BRL;
}

function deBRL(valorBRL, moeda) {
  if (moeda === "BRL") return valorBRL;
  if (moeda === "USD") return valorBRL / USD_BRL;
  if (moeda === "EUR") return valorBRL / EUR_BRL;
}

function formatar(valor, moeda) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: moeda });
}

function converter() {
  const valor = Number(valorEl.value);
  const de = deEl.value;
  const para = paraEl.value;

  if (!valorEl.value || Number.isNaN(valor) || valor <= 0) {
    resultadoEl.textContent = "Digite um valor válido";
    return;
  }

  const emBRL = paraBRL(valor, de);
  const convertido = deBRL(emBRL, para);

  resultadoEl.textContent = formatar(convertido, para);
}

function limpar() {
  valorEl.value = "";
  deEl.value = "BRL";
  paraEl.value = "USD";
  resultadoEl.textContent = "—";
}

btnConverter.addEventListener("click", converter);
btnLimpar.addEventListener("click", limpar);

// Converter ao apertar Enter
valorEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") converter();
});
