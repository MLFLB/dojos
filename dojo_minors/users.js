/*
Exemple de tableau parcourus pour l'exercice

[{
  name: 'Alex',
  age: 17
}, {
  name: 'John',
  age: 24
}, {
  name: 'Toto',
  age: 15
}]
*/

export class Users {

  findMinors(_array) {
    let nbMinors = 0;
    for (var i = 0; i < _array.length; i++) {
      if (_array[i].age < 18) {
        nbMinors++;
      }
    }
    return nbMinors;
  }

  findMinors_filter(_array) {
    return _array.filter(function(user) {
      return user.age < 18;
    }).length;
  }
};
