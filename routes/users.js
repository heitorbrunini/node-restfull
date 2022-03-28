let NeDB = require('nedb');

let db = new NeDB(
    {
        filename: 'users.db',
        autoload: true
    }
)

module.exports = (app) => {
    app.get('/users',
        (req, res) => {

            db.find({}).sort({ name: 1 }).exec((err, users) => {
                if (err) {
                    console.log(`error: ${err}`);
                    res.status(400).json({
                        error: err
                    })
                } else {
                    res.statusConde = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(
                        {
                            users: users
                        }
                    );
                }
            });

        }
    );
    app.post('/users', (req, res) => {
        /*params: object to save, (function if errors, register of DB)  */
        db.insert(req.body, (err, user) => {
            if (err) {
                console.log(`error: ${err}`);
                res.status(400).json({
                    error: err
                })
            } else {
                res.status(200).json(user);
            }
        });
    }
    )
};