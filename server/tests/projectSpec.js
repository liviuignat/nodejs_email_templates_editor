var init = require('./init');
var expect = require('chai').expect;

describe('when server starts', function() {
  var supertest, firstProject, secondProject;

  before(function * () {
    supertest = yield init.getRequest();
    yield init.cleanDb();
  });

  beforeEach(function() {
    firstProject = {
      name: 'second project',
      description: 'firstProject'
    };
    secondProject = {
      name: 'second project',
      description: 'secondProject'
    };
  });

  describe('when willing to add two projects', function() {
    var addFirstProjectRequest;

    beforeEach(function() {
      addFirstProjectRequest = supertest
        .post('/api/v1/project')
        .send(firstProject);
    });

    it('should return 200 status code', function * () {
      yield addFirstProjectRequest.expect(201).end();
    });

    it('should have "Location" header set', function * () {
      var response = yield addFirstProjectRequest.end();
      expect(response.header['location']).not.to.be.undefined;
    });

    describe('when the two projects are added', function() {
      beforeEach(function * () {
        var response = yield addFirstProjectRequest.end();
        firstProject.id = response.header['location'];
      });
      beforeEach(function * () {
        var response = supertest.post('/api/v1/project').send(secondProject).end();
        secondProject.id = response.header['location'];
      });

      describe('when the first project is updated', function() {

      });
    });
  });
});
