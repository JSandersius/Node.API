cont noteRoutes = require('./notes_routes');

module.exports = function (app, db) {
    noteRoutes(app, db);
    //Other groups can go here, in the future
};