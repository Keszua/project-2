const todos = [
    {id: 1, name: 'Dinner', done: false },
    {id: 2, name: 'Dinner', done: false },
];


exports.list = (req, res) => {
    //res.send('List');
    res.send(todos);
};

exports.create = (req, res) => {
    res.send('Create');
};

exports.change = (req, res) => {
    res.send(`Change: ${req.params.id}`);
};

exports.delete = (req, res) => {
    res.send(`Delete: ${req.params.id}`);
};

exports.toogle = (req, res) => {
    res.send(`Toggle: ${req.params.id}`);
};