const test = require('tape');
const router = require('./router');
const supertest = require('supertest');

test('Initialise', (t) => {
  let num = 2;
  t.equal(num, 2, 'Should return 2');
  t.end();
})

test('Home route', (t) => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err)
      t.equal(res.text, 'Hello', 'response should contain \'Hello\'');
      t.end();
    });
});

test('GET Elephants route returns a status code of 404', (t) => {
  supertest(router)
  .get('/elephants')
  .expect(404)
  .end((err, res) => {
    t.error(err);
    t.equal(res.text, 'unknown uri', 'Should return "unknown uri"')
    t.end();
  });
});
