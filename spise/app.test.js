const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
  //   it('Should call the spy correctly', () => {
  // const spy = expect.createSpy()
  // // spy()
  // // expect(spy).toHaveBeenCalled()
  // spy('Andrew', 25)
  // expect(spy).toHaveBeenCalledWith('Andrew', 25)
  //   })
  const db = {
    saveUser: expect.createSpy() // saveUser here is a spy method. can be accessable with db.saveUser
  };

  app.__set__('db', db); // changing the actual app.db with the face one, we just created.

  it('Should call saveUser with user object', () => {
    const email = 'andrew@example.com';
    const password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email,password});
  });
});
