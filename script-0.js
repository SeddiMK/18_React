let userName = 'Aleg';
// let userName = 'Oleg'; //entifier 'userName' has already been declared
userName = 'Oleg';
// ===================================================
const userLastName = 'Tyfany';
// userLastName = 'Robodog'; //signment to constant variable.
// const userLastName = 'Robodog'; //entifier 'userLastName' has already been declared
// ===================================================
// Ключи кирилицей нельзя
const univer = {
  'высшая математика': 4,
  тригонометрия: 5,
  информатика: 5,
};
univer['физика'] = 5;
univer.химия = 5;
console.log(univer);

const univerResult = [3, 4, 5];
// univerResult = [4, 4, 5]; //signment to constant variable.
univerResult[0] = 4;
console.log(univerResult);

// ===================================================
// Import-in Export-out
import otmazka6 from './otmazka.js'; // в начале файла
import otmaza from './otmazka.js'; // в начале файла
import otm from './otmazka.js'; // в начале файла
console.log(otmazka6('((какойто текст))'));
console.log(otmaza('((бyаjhвфнбрф))'));
console.log(otm('((-------))'));
// ======
import { checkLS, showMessage } from './cookies.js';
if (!checkLS()) {
  console.log(showMessage("Problem it's 'kaysW' "));
}
// ===================================================
document.querySelector('.out-1').style.cssText = 'border: 1px solid green';

document
  .querySelector('.out-1')
  .addEventListener('click', () => console.log('show click'));

const arr1 = (b, c) => b * c;
console.log(arr1(3, 1));

function fnName() {}
fnName();
// ===================================================
// spread- расширение, распространение; rest- остаток
const normalWork = ['инженер', 'токарь', 'секретарь'];
const work = [...normalWork, 'блогер', 'DewOpc']; // ...spred
console.log(work);

const worker = {
  name: 'Max',
  job: 'it',
};
const macDuk = {
  ...worker, // ...spred
  position: 'cleaner',
};
console.log(macDuk);

// rest
const numFunc = (...args) => {
  return args;
};
console.log(numFunc(1, 2, 3, 54, 6, 7, 8));

// destruction деструктаризация
const arrDesr = [2, 4, 5, 67, 8, 9, 0];
console.log(arrDesr);
const [d1, , , d2] = arrDesr;
console.log(d1, d2);

const { name, position } = macDuk;
console.log(name, position);

// map- перебор элементов и применение каждому элементу действие или какую либо функцию- создает новый массив размером с исходный массив; filter -
// map
const arr3 = [3, 4, 5, 7, 8, 9, 9];
// const arr3 = [];
// arr3[0] = 8;
// arr3[4] = 88;//[24, пусто × 3, 264]
let arrMap = arr3.map((el, index) => {
  // console.log(index);
  // return 3; //[3, 3, 3, 3, 3, 3, 3]
  // return index; //[0, 1, 2, 3, 4, 5, 6]
  return el * index; //[0, 4, 10, 21, 32, 45, 54]
});
console.log(arrMap);
// filter
let arrFilt = arr3.filter((el) => {
  if (el > 7) {
    return true;
  }
});
console.log(arr3);
console.log(arrFilt);
