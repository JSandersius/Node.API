module.exports = function (app, db) {
    app.post('/notes', (req, res) => {
        console.log(req.body)
        res.send('Hello')
    });
};

//was missing curly bracket, that iw what was stopping proper routing