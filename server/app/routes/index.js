function setupRoutes(app) {
  app.get('/', function * () {
    yield this.render('index');
  });
}

module.exports = setupRoutes;
