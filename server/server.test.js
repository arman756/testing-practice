const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect('Hello world!')
        .end(done);
    });
  });
  describe('GET /about', () => {
    it('should retutn page not found', (done) => {
      request(app)
        .get('/about')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done);
    });
  });
  describe('GET /users', () => {
    it('Should contains me', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          //   expect(res.body[0]).toInclude({
          //     name: 'Arman', age: 21
          //   }) ----------------->>>>>>> with array index : [0]
          expect(res.body).toInclude({
            name: 'Arman', age: 21
          });
        })
        .end(done);
    });
  });
});
