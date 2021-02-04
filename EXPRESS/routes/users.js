function usersRoutes(app) {

    app.get('/logout', (req, res) => {
        console.log('Wylogowano');
        res.clearCookie('visitor_name');
        res.send('Wylogowano');
    });

    app.get('/hi/:name', (req, res) => {
        res.cookie('visitor_name', req.params.name, { maxAge: 5 * 60 * 1000 });
        res.send(`<h2>Witaj ${req.params.name} </h2>`);
    });

    app.get('/coo', (req, res) => {
        const { visitor_name } = req.cookies;
        if (visitor_name) {
            res.send(`<h2>Cistko: ${req.cookies.visitor_name} </h2>`);
        } else {
            res.send('Czy my się znamy?');
        }
        console.log(req.cookies);
    });

}

module.exports = usersRoutes;