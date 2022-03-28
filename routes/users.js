let NeDB = require('nedb');

let db = new NeDB(
    {
        filename: 'users.db',
        autoload: true
    }
)

module.exports = (app) => {
    let route = app.route('/users');
    route.get(
        (req, res) => {

            db.find({}).sort({ name: 1 }).exec((err, users) => {
                if (err) {
                    app.utils.error.send(err, req, res);
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
    route.post((req, res) => {
        /*params: object to save, (function if errors, register of DB)  */
        db.insert(req.body, (err, user) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }
        });
    }
    )
};