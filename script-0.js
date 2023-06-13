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
