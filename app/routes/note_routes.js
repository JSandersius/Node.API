module.exports = function (app, db) {
    app.post('/notes', (req, res) => {
        // You'll create your note here.
        res.send('Hello')
    });
};

//was missing curly bracket, that iw what was stopping proper routing