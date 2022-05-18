// const display = document.querySelector('#display');
// const buttons = document.querySelector('button');

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;


themeToggleBtn.onclick = () => {
  calculator.classList.toggle('dark');
  themeToggleBtn.classList.toggle('active');
  isDark = !isDark;
}

/* Sistema calculadora */

function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.clickBtn();
    },

    clickBtn() {
      document.addEventListener('click', event => {
        const el = event.target;

        console.log(el.classList.contains('btn-number'))
        if (el.classList.contains('btn-number')) {
          this.btnParaDisplay(el.innerText);
        }

        console.log(el.classList)
        if (el.classList.contains('btnClear')) {
          this.clearDisplay();
        }
      });
    },

    clearDisplay() {
      this.display.innerHTML = '';
    },

    btnParaDisplay(valor) {
      this.display.innerText += valor;
    },

  };
}

const calculadora = criaCalculadora();
calculadora.inicia();

