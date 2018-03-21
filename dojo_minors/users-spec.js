import {
  Users
} from './users';

// Tableau avec une personne mineure
const t1 = [{
  name: 'Alex',
  age: 17
}, {
  name: 'John',
  age: 24
}, {
  name: 'Bernard',
  age: 26
}];

// Tableau avec deux personnes mineures
const t2 = [{
  name: 'Alex',
  age: 12
}, {
  name: 'John',
  age: 17
}, {
  name: 'Bernard',
  age: 24
}];

describe('Users', () => {
  describe('Test findMinors', () => {
    it('should return 1', () => {
      const users = new Users();
      expect(users.findMinors(t1)).toEqual(1);
    });

    it('should return 2', () => {
      const users = new Users();
      expect(users.findMinors(t2)).toEqual(2);
    });
  });

  describe('Test findMinors_filter', () => {
    it('should return 1', () => {
      const users = new Users();
      expect(users.findMinors_filter(t1)).toEqual(1);
    });

    it('should return 2', () => {
      const users = new Users();
      expect(users.findMinors_filter(t2)).toEqual(2);
    });
  });
});
