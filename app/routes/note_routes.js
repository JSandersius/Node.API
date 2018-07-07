module.exports = function (app, db) {
    const collection =
        app.post('/notes', (req, res) => {
            const note = { text: req.body.body, title: req.body.title };
            db.collection('notes').insert(note, (err, result) => {
                if (err) {
                    res.send({ "error": "an error has occured" });
                } else {
                    res.send(result.ops[0]);
                }
            });
        });
};

//was missing curly bracket, that I what was stopping proper routing