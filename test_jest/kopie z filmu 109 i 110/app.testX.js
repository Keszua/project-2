
const request = require('supertest');

const { app } = require('./app');

//console.log(app);

it('ads 2 and 2', () => {
    expect(2+2).toEqual(4);
});

//Etap I
// it('works', (done) => {
//     //const response = request(app).get('/')
//     //console.log(response);
//     request(app).get('/').expect((res) => {
//         console.log(res);
//     }).end((error, res) => {
//         if(error) {
//             return done(error);
//         }
//         done();
//     });
// })

//Etap II -to samo co etap 1
// it('works', async () => {
//     const response = await request(app).get('/')
//     console.log(response);
// })

//Etap III -to samo co etap 1
it('works', async () => {
    const response = await request(app).get('/')
    //console.log(response);
    //expect(response).toMatchSnapshot(); // tworzy katalog z plikiem .snap  ponowne wywołanie, trzeba zrobić z flagą '-u' aby usunąc i nadpisać
    
    expect(response.status).toEqual(200); 
    expect(response.text).toEqual('Hello world 2!'); 
})

//poniżej materiał z filmiku 110 (Node.js, Express i MongoDB)
it('handle pages that are not found', async () => {
    const response = await request(app).get('/whatever');
    expect(response.status).toEqual(404);
    expect(response.text).toEqual('Not found');
})

it('handle pages with errors', async () => {
    const response = await request(app).get('/error');
    expect(response.status).toEqual(500);
    expect(response.text).toEqual('Error!');
})

