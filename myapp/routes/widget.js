/**
 * 组件页面的路由，
 * 和组件相关的增删改查接口
 */
var WidgetModel = require('../db/widget');

module.exports = function(app) {
    app.get('/widgets', function(req, res, next) {
        WidgetModel.getAllWidgets((result) => {
            res.render('widgetList', {
                title: '组件列表',
                widgets: result
            });
        });
    });
    app.post('/widget', function(req, res) {
        var name = req.body.name;
        WidgetModel.getWidget(name, (result) => {
            result.length && res.json({
                success: false,
                desc: `控件${name}已存在`
            });
            !result.length && WidgetModel.addWidget(name, function(result) {
                res.json({
                    success: result
                });
            });
        });
    });
    app.get('/widget', function(req, res) {
        WidgetModel.getWidget(req.query.name, (result) => {
            res.json({
                success: result && result.length,
                result: result,
                desc: !!result ? 'found' : 'not found'
            });
        });
    });
    app.get('/widgetList', function(req, res) {
        WidgetModel.getAllWidgets((result) => {
            res.json({
                success: true,
                result: result
            });
        });
    });
};
