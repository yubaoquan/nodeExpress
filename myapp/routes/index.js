/**
 * 首页路由
 * 其他页的路由也引入这里， 统一导出
 */

var express = require('express');
var widget = require('./widget');

module.exports = function(app) {
    widget(app);
    /* GET home page. */
    app.get('/', function(req, res, next) {
        res.render('index', { title: 'Express222' });
    });
}
