const Test = require('../Models/Test');

exports.testFunction = (req, res, next) => {
    Test.create({title: "yo minna"}).then(resp => res.json(resp));
}