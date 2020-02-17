const Project = require('../Models/Project');
const Errors = require('../errors/Errors');

exports.createProject = (req, res, next) => {
    Project.create(req.body)
    .then(resp => res.json(resp))
    .catch(err => {
        next(new Errors.BaseError({
            reason: err.message,
            code: 400
        }));
    });
};

exports.deleteProject = (req, res, next) => {
    Project.deleteOne(req.body)
    .then(resp => res.json(resp))
    .catch(err => {
        next(new Errors.NotFoundError({
            reason: 'There is no project under those values'
        }));
    });
};