const expect = require('expect');

const utils = require('./utils');

describe('utils', () => {
  describe('#add', () => {

    it('Should add 2 two numbers!', () => {
      const res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
    // if (res !== 44) {
    //   throw new Error(`expected 44, but got ${res}`)
    // }
    });

    it('should async add  two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });
  describe('#square', () => {
    it('should square a number', () => {
      const res = utils.square(2);
      expect(res).toBe(4).toBeA('number');
    // if (res !== 4) {
    //   throw new Error(`expected 4,but got${res}`)
    // }
    });

    it('should async square a number', (done) => {
      utils.asyncSquare(5, (times) => {
        expect(times).toBe(25).toBeA('number');
        done();
      });
    });
  });
  describe('#other', () => {

    it('Should expect some value', () => {
      expect(12).toNotBe(11);
    });

    // should verify first and last names are set
    it('Should set first&last names', () => {
      const user = {
        age: 20,
        location: 'shiraz'
      };
      const player = utils.setName(user, 'Arman Feili');
      expect(player).toInclude({
        firstName: 'Arman',
        lastName: 'Feili'
      });

      expect(user).toEqual(player);
    });
  });
});
