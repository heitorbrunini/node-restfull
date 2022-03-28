
module.exports = (app) =>  {
    
    app.get('/',(req, res) => {

        res.statusConde=200;
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1>Hello World</h1>')
    
    });
};