const user = {
  firstname: 'Lizzy',
  lastname: 'Cantor',
}
const people = ['lucas', 'lizzy', 'cheska'];

const { 
  firstname, 
  lastname 
} = user;

const {
  usersOne,
  usersTwo,
  usersThree,
} = people;

console.log(firstname + ' ' + lastname);
console.log(...people);