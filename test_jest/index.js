
const { app } = require('./app');

const port = process.env.PORT || 3000; //pobieranie numeru portu ze zmiennej środowiskowej

app.listen(port, () => {  //nasłuchujemy na porcie 3000
 console.log(`Listening on port ${port}`);
});

