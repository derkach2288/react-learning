// 3 способ: экспорт непосредственно перед объявления=ем переменной
export const sum = (a, b) => a + b;



const minus = (a, b) => a - b;
const division = (a, b) => {
  if (b != 0) {
    return a / b;
  }
}

const multiplication = (a, b) => a * b;

// 1 способ - экспорт как переменные, через фигурные скобки, забирается как import {sum} ftom './helpers'
export { minus, division };
  
  
// 2 способ: экспорт, как default, когда импортируем - нам не обязательно указывать точное имя
  // import multi from './helpers'
export default multiplication;