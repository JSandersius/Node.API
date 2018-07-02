module.exports = function (app, db) {
    app.post('./notes', (req, res) => {
        //you'll create post note here
        res.send('Hello')
    });
};