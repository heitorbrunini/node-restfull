let NeDB = require ('nedb');

let db = new NeDB(
    {
        filename:  'users.db',
        autoload: true
    }
)

module.exports = (app) =>  {
    app.get('/users',
        (req, res) => {
            res.statusConde = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(
                {
                    users: [
                        {
                            name: 'test1',
                            email: 'test1@gmail.com',
                            password:'123',
                            id: 1
                        },
                        {
                            name: 'test2',
                            email: 'test2@gmail.com',
                            password:'123',
                            id: 2
                        }
                    ]
                }
            );
        }
    );
    app.post('/users',  (req, res) => {
            /*params: object to save, (function if errors, register of DB)  */
            db.insert(req.body, (err,user) => {
                if (err){
                    console.log(`error: ${err}`);
                    res.status(400).json({
                        error:err
                    })
                } else {
                    res.status(200).json(user);
                }
            });
        }    
    )
};