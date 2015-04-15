var init = require('./init');
var expect = require('chai').expect;

describe('when server starts', function() {
  var supertest, firstTemplate, secondTemplate;

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
    firstTemplate = {
      name: 'second Template',
      description: 'firstTemplate',
      templateHtml: '',
      sampleJson: ''
    };
    secondTemplate = {
      name: 'second Template',
      description: 'secondTemplate',
      templateHtml: '',
      sampleJson: ''
    };
  });

  describe('when willing to add a project and two templates', function() {
    var baseUrl;
    beforeEach(function * () {
      var response = yield supertest.post('/api/v1/project').send(firstProject).end();
      firstProject.id = response.header['location'];

      firstTemplate.projectId = firstProject.id;
      secondTemplate.projectId = firstProject.id;

      baseUrl = '/api/v1/project/' + firstProject.id + '/template/';
      addFirstTemplateRequest = supertest.post(baseUrl).send(firstTemplate);
    });

    it('should return 200 status code', function * () {
      yield addFirstTemplateRequest.expect(201).end();
    });

    it('should have "Location" header set', function * () {
      var response = yield addFirstTemplateRequest.end();
      expect(response.header['location']).not.to.be.undefined;
    });

    describe('when the two templates are added', function() {
      beforeEach(function * () {
        var response = yield addFirstTemplateRequest.end();
        firstTemplate.id = response.header['location'];
      });
      beforeEach(function * () {
        var response = yield supertest.post(baseUrl).send(secondTemplate).end();
        secondTemplate.id = response.header['location'];
      });

      describe('when getting all templates', function() {
        var allTemplatesRequest;
        beforeEach(function() {
          allTemplatesRequest = supertest.get(baseUrl);
        });

        it('should return 200 status code', function * () {
          yield allTemplatesRequest.expect(200).end();
        });

        it('should have 2 objects in the response', function * () {
          var response = yield allTemplatesRequest.end();
          expect(response.body.length).to.equal(2);
        });

        describe('when updating first template', function() {
          var updateFirstTemplateRequest;
          var updatedTemplateHtml = '<p>test</p>';
          beforeEach(function() {
            firstTemplate.templateHtml = updatedTemplateHtml;
            updateFirstTemplateRequest = supertest.put(baseUrl + firstTemplate.id).send(firstTemplate);
          });

          it('should return 200 status code', function * () {
            yield updateFirstTemplateRequest.expect(200).end();
          });

          describe('when getting first template', function() {
            var getFirstTemplateRequest;
            beforeEach(function * () {
              yield updateFirstTemplateRequest.end();
              getFirstTemplateRequest = supertest.get(baseUrl + firstTemplate.id);
            });

            it('should return 200 status code', function * () {
              yield getFirstTemplateRequest.expect(200).end();
            });

            it('should return updated first object', function * () {
              var getFirstTemplateResponse = yield getFirstTemplateRequest.end();
              expect(getFirstTemplateResponse.body).not.to.be.undefined;
              expect(getFirstTemplateResponse.body.templateHtml).to.equal(updatedTemplateHtml);
            });
          });
        });

        describe('when delete first template', function() {
          var deleteFirstTemplateRequest;
          beforeEach(function() {
            deleteFirstTemplateRequest = supertest.del(baseUrl + firstTemplate.id);
          });

          it('should return 200 status code', function * () {
            yield deleteFirstTemplateRequest.expect(200).end();
          });

          describe('when getting all templates', function() {
            var allTemplatesRequest;
            beforeEach(function * () {
              yield deleteFirstTemplateRequest.end();
              allTemplatesRequest = supertest.get('/api/v1/project');
            });

            it('should have 1 object1 in the response', function * () {
              var response = yield allTemplatesRequest.end();
              expect(response.body.length).to.equal(1);
            });
          });
        });
      });
    });
  });
});
