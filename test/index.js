var expect = require('chai').expect;
var request = require('supertest');
var app = require('../server');

describe('Retrieve Message', function() {
  
  it('should return most recent friendly greeting!', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body).to.have.property('message').and.equal('Hello World!');
        done();
      })
  });
  
});

describe('Add new message', function() {
  
  it('should be able to successfully retrieve new added greeting', function(done) {
    request(app)
      .post('/')
      .send({message:'new message'})
      .expect(201)
      .end(function (err, res) {
          if (err) return done(err);
          request(app)
            .get('/')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
              if (err) return done(err);
              expect(res.body).to.have.property('message').and.equal('new message');
              done();
            })
      })
  })
})