var expect = require('chai').expect;
var request = require('supertest');
var app = require('../server');

describe('HelloWorld', function() {
  
  it('should return a friendly greeting!', function(done) {
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