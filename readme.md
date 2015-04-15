# NodeJS email templates editor [![Build Status](https://travis-ci.org/liviuignat/nodejs_email_templates_editor.svg?branch=master)](https://travis-ci.org/liviuignat/nodejs_email_templates_editor)

https://emailcloud.herokuapp.com/

UI Email template editor with persistance in MongoDB which exposes an API to be able to send the emails further.

First run:
```
npm install //install dependencies
gulp serve //run dev
```

Other tasks:
```
gulp serve:prod //run prod
gulp test-client //run client tests
gulp test-client:auto //watch client tests
gulp test-server //run server tests

git remote add heroku [heroku_url]
git push heroku master:master
```
