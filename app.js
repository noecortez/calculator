let display = document.getElementById('calc-display');
let result = '';
let operatorA = 0;
let operatorB = 0;
let operation = '';

function typeButton(button) {
   result += button;
   if (result.length < 9) {
      display.value = result;
   }
}

function add() {
   if (validate()) {
      operatorA += parseFloat(result);
      operation = '+';
      result = '';
      display.value = operatorA;
   }
}

function sub() {
   if (validate()) {
      operatorA = parseFloat(result);
      operation = '-';
      result = '';
      display.value = operatorA;
   }
}

function equal() {
   operatorB = parseFloat(result);
   result = '';
   resolve();
}

function resolve() {
   switch (operation) {
      case '+':
         result = operatorA + operatorB;
         break;
      case '-':
         result = operatorA - operatorB;
         break;

      default:
         break;
   }

   operatorA = 0;
   operatorB = 0;
   display.value = result;
}

function del() {
   if (validate()) {
      result = result.substring(0, result.length - 1);
      display.value = result;
   }
}

function clean() {
   display.value = '';
   result = '';
   operation = '';
   operatorA = 0;
   operatorB = 0;
}

function validate() {
   if (result.length > 0 || display.value != '') {
      return true;
   } else {
      display.focus();
      return false;
   }
}