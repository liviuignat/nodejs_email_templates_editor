var koa = require('koa');
var serve = require('koa-static');
var session = require('koa-session');
var bodyParser = require('koa-body-parser');
var methodOverride = require('koa-methodoverride')
var router = require('koa-router');
var render = require('koa-ejs');

var path = require('path');
var util = require('util');
var config = require('config');

var Server = (function() {
  function Server(options) {
    this.app = koa();
    this.rootFolder = path.join(options.dirname, 'server');
  }

  Server.prototype.start = function() {
    this.app.listen(config.server.port);
    console.log(util.format('Email server started on port %s as "%s" environment.'), config.server.port, process.env.NODE_ENV);
    return this;
  };

  Server.prototype.init = function() {
    this.app.keys = ['fnjklhjh89347932kejlqw'];
    this.app.use(bodyParser());
    this.app.use(methodOverride());
    this.app.use(session({
      path: '/',
      httpOnly: true,
      maxage: null,
      rewrite: true,
      signed: true
    }));

    render(this.app, {
      root: path.join(this.rootFolder, 'views'),
      layout: '_layout',
      viewExt: 'html',
      cache: !config.isDev,
      debug: config.isDev,
      locals: {},
      filters: {}
    });

    this.app.use(serve(this.rootFolder + '/public'));

    return this;

    return this;
  };

  Server.prototype.setupRoutes = function() {
    this.app.use(router(this.app));

    this.app.get('/', function * () {
      yield this.render('index');
    });

    return this;
  };

  return Server;
})();

module.exports.Server = Server;