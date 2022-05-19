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

function createCalculator() {
  return {
    display: document.querySelector('.display'),

    startProgram() {
      this.clickBtn();
    },

    /*     pressEnter() {
          this.display.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
              this.makeCount();
            }
          });
        }, */

    clickBtn() {
      document.addEventListener('click', event => {
        const el = event.target;

        if (el.classList.contains('btn')) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains('btnClear')) {
          this.clearDisplay();
        }

        if (el.classList.contains('backspace')) {
          this.backspaceDisplay();
        }

        if (el.classList.contains('btn-equal')) {
          this.makeCount();
        }
      });
    },

    backspaceDisplay() {
      /*  this.display.innerText = this.display.innerText.slice(0, -1); */
      let string = this.display.innerText.toString();
      this.display.innerText = string.substr(0, string.length - 2);
    },

    clearDisplay() {
      this.display.innerHTML = '';
    },

    btnParaDisplay(valor) {
      this.display.innerText += valor;
    },

    makeCount() {
      let count = this.display.innerText.replace("=", "");

      try {
        count = eval(count);

        if (!count) {
          this.display.innerText = '';
          alert('Conta Inválida');
          return;
        }

        this.display.innerText = count.replace("=", "");

      } catch (error) {
        alert('Conta Inválida');
        this.display.innerText = count.replace("=", "");
        return;
      }
    }

  };
}

const calculadora = createCalculator();
calculadora.startProgram();

