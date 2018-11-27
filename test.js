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

// elephants
test('Elephants route returns a 404', (t) => {
  supertest(router)
    .get('/elephants')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
        t.error(err);
        t.equal(res.text, 'unknown uri', 'response should contain "unknown uri"');
        console.log(typeof res.text); // returns result type
        t.end();
    });
})

// blog post without potato
test('Blog route - POST without potato password', (t) => {
  supertest(router)
    .post('/blog')
    .expect(403)
    .end((err, res) => {
        t.error(err);
        t.equal(res.text, 'Forbidden', 'response should be Forbidden');
        t.end();
    });
})

// failing test
test('Blog route - POST fails, wrong password, but expect parameter entered below', (t) => {
  supertest(router)
    .post('/blog')
    .expect(200)
    .end((err, res) => {
        t.error(err);
        t.equal(res.text, 'pass', '200 code');
        t.end();
    });
})