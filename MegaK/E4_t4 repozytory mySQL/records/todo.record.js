class TodoRecord {
    constructor(obj) {
        this.id = obj.id;
        this.title = obj.title;
        this._validate();
    }

    _validate() {
        if (this.title.trim() < 5) {
            throw new Error('Todo title should be at leatest 5 characters.');
        }

        if (this.title.trim() > 150) {
            throw new Error('Todo title should be at most  150 characters.');
        }
    }

}

module.exports = {
    TodoRecord,
}
