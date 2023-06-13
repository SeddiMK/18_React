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
