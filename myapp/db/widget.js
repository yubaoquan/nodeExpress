var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/demo');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var WidgetScheme = new Schema({
    id: ObjectId,
    name: String
});
var Widget = mongoose.model('Widget', WidgetScheme);


module.exports.addWidget = function(name, cb) {
    var instance = new Widget();
    instance.name = name;
    instance.save(function(err) {
        if (err) {
            cb(false);
            throw err
        }
        console.info(`save ${name} succeed!`);
        cb(true);
    })
}
module.exports.getWidget = function(name, cb) {
    var condition = {};
    name && (condition = {name: name});
    Widget.find(condition, function(err, widget) {
        if (err) {
            throw err;
        }
        console.info(widget);
        cb(widget || []);
    });
}
module.exports.getAllWidgets = function(cb) {
    Widget.find({}, function (err, result) {
        if (err) {
            throw err
        }
        cb(result);
    });
}
