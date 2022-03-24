const express = require('express');
let app = express();

app.get('/',(req, res) => {

    res.statusConde=200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello World</h1>')

});

app.get('/users',
    (req, res) => {
        res.statusConde=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(
            {
                users:[
                    {
                        name:'test1',
                        email:'test1@gmail.com',
                        id:1
                    },
                    {
                        name:'test2',
                        email:'test2@gmail.com',
                        id:2
                    }
                ]
            }              
        );
    }
);

app.listen(3000,'192.168.0.104', () => {console.log('servidor rodando');} )