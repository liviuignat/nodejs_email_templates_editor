var init = require('./init');
var expect = require('chai').expect;

describe('when server starts', function() {
  var supertest, firstProject, secondProject;

  before(function * () {
    supertest = yield init.getRequest();
  });
  beforeEach(function * () {
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
        var response = yield supertest.post('/api/v1/project').send(secondProject).end();
        secondProject.id = response.header['location'];
      });

      describe('when getting all projects', function() {
        var allProjectsRequest;
        beforeEach(function() {
          allProjectsRequest = supertest.get('/api/v1/project');
        });

        it('should return 200 status code', function * () {
          yield allProjectsRequest.expect(200).end();
        });

        it('should have 2 objects in the response', function * () {
          var response = yield allProjectsRequest.end();
          expect(response.body.length).to.equal(2);
        });

        describe('when updating first project', function() {
          var updateFirstProjectRequest;
          var updatedName = 'updated name first obj';
          beforeEach(function() {
            firstProject.name = updatedName;
            updateFirstProjectRequest = supertest.put('/api/v1/project/' + firstProject.id).send(firstProject);
          });

          it('should return 200 status code', function * () {
            yield updateFirstProjectRequest.expect(200).end();
          });

          describe('when getting first project', function() {
            var getFirstProjectRequest;
            beforeEach(function * () {
              yield updateFirstProjectRequest.end();
              getFirstProjectRequest = supertest.get('/api/v1/project/' + firstProject.id);
            });

            it('should return 200 status code', function * () {
              yield getFirstProjectRequest.expect(200).end();
            });

            it('should return updated first object', function * () {
              var getFirstProjectResponse = yield getFirstProjectRequest.end();
              expect(getFirstProjectResponse.body).not.to.be.undefined;
              expect(getFirstProjectResponse.body.name).to.equal(updatedName);
            });
          });
        });

        describe('when delete first project', function() {
          var deleteFirstProjectRequest;
          beforeEach(function() {
            deleteFirstProjectRequest = supertest.del('/api/v1/project/' + firstProject.id);
          });

          it('should return 200 status code', function * () {
            yield deleteFirstProjectRequest.expect(200).end();
          });

          describe('when getting all projects', function() {
            var allProjectsRequest;
            beforeEach(function * () {
              yield deleteFirstProjectRequest.end();
              allProjectsRequest = supertest.get('/api/v1/project');
            });

            it('should have 1 object1 in the response', function * () {
              var response = yield allProjectsRequest.end();
              expect(response.body.length).to.equal(1);
            });
          });
        });
      });
    });
  });
});
