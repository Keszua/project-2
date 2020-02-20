const request = require('supertest');

const { app } = require('./app');

//console.log(app);

it('ads 2 and 2', () => {
    expect(2+2).toEqual(4);
});

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

it('works', (done) => {
    const response = await request(app).get('/')

    // request(app).get('/').expect((res) => {
    //     console.log(res);
    // }).end((error, res) => {
    //     if(error) {
    //         return done(error);
    //     }
    //     done();
    // });
})
