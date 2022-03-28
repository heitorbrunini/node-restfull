
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
                            id: 1
                        },
                        {
                            name: 'test2',
                            email: 'test2@gmail.com',
                            id: 2
                        }
                    ]
                }
            );
        }
    );
};