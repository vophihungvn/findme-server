global.env = process.env.NODE_ENV || 'development';
global._ = require('lodash');
global.express = require('express');
global.config = require('../config/' + env + '.config');
