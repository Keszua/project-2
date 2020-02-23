const todo = require('./todo');

describe('list', () => {
    it('works', () => {
        const req = {};
        const res = {
            send: jest.fn(),
        };
        todo.list(req, res);


        expect(res.send).toHaveBeenCalledTimes(1);  // sprawdza, czy metoda wogóle została wykonana jednokrotnie (cyfra oznacza liczbę wykonań)
        expect(res.send).toHaveBeenCalledWith('List') //w jaki sposób została wykonana

    })
});

describe('create', () => {

});

describe('change', () => {

});

describe('delete', () => {

});

describe('toogle', () => {

});
