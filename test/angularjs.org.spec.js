var request = require('request');

describe('Angularjs.org', function () {
  it('should be online at www.angularjs.org', function (done) {
    request('http://www.angularjs.org', function (err, res, body) {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('Superheroic');
      done();
    });
  });

  it('should be online at http://angularjs.org', function (done) {
    request('http://angularjs.org', function (err, res, body) {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('Superheroic');
      done();
    });
  });
});


describe('docs.angularjs.org', function () {
  it('should be online', function (done) {
    request('http://docs.angularjs.org', function (err, res, body) {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('AngularJS is what HTML would have been');
      done();
    });
  });
});


describe('errors.angularjs.org', function () {
  it('should redirect', function (done) {
    request({followRedirect: false, url: 'http://errors.angularjs.org'}, function (err, res, body) {
      expect(res.headers.location).toContain('docs.angularjs.org/error');
      expect(res.statusCode).toBe(301);
      done();
    });
  });

  it('should be online', function (done) {
    request('http://docs.angularjs.org', function (err, res, body) {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('AngularJS is what HTML would have been');
      done();
    });
  });
});

describe('dashboard.angularjs.org', function () {
  it('should be online', function (done) {
    request('http://dashboard.angularjs.org', function (err, res, body) {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('ng-app');
      done();
    });
  });
});

describe('builtwith.angularjs.org', function () {
  it('should be online', function (done) {
    request('http://builtwith.angularjs.org', function (err, res, body) {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('ng-controller');
      done();
    });
  });
});

describe('code.angularjs.org', function () {
  it('should be online', function (done) {
    request('http://code.angularjs.org', function (err, res, body) {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('Index of /');
      done();
    });
  });
});