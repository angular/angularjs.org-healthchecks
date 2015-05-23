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
    request({followRedirect: false, url: 'https://errors.angularjs.org'}, function (err, res, body) {
      expect(res.headers.location).toContain('docs.angularjs.org/error');
      expect(res.statusCode).toBe(301);
      done();
    });
  }, 10000);

  it('should be online', function (done) {
    request('http://docs.angularjs.org', function (err, res, body) {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('AngularJS is what HTML would have been');
      done();
    });
  }, 10000);
});

describe('dashboard.angularjs.org', function () {
  it('should be online', function (done) {
    request('http://dashboard.angularjs.org', function (err, res, body) {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('ng-app');
      done();
    });
  }, 10000);
});

describe('builtwith.angularjs.org', function () {
  it('should be online', function (done) {
    request('http://builtwith.angularjs.org', function (err, res, body) {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('ng-controller');
      done();
    });
  }, 10000);
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

describe('material.angularjs.org', function () {
  it('should be online', function (done) {
    request('https://material.angularjs.org', function (err, res, body) {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('ng-app');
      done();
    });
  });

  it('should build docs.js', function (done) {
    request('https://material.angularjs.org/latest/docs.js', function (err, res, body) {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('angular.module');
      done();
    });
  });
});
