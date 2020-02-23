const request = require('supertest');

const { app } = require('./app');

it('works', async () => {
    const response = await request(app).get('/')
    expect(response.status).toEqual(200); 
    //expect(response.text).toEqual('List'); 
})

//poniżej materiał z filmiku 111 (Node.js, Express i MongoDB)
it('handle pages that are not found', async () => {
    const response = await request(app).get('/whatever');
    expect(response.status).toEqual(404);
    expect(response.text).toEqual('Not found');
})

// it('handle pages with errors', async () => {
//     const response = await request(app).get('/error');
//     expect(response.status).toEqual(500);
//     expect(response.text).toEqual('Error!');
// })

