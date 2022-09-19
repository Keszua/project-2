const { pool } = require("../utils/db");
const { ValidationError } = require("../utils/errors");
const{v4: uuid} = require('uuid');

class ChildRecord {
    constructor(obj) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 25) {
            throw new ValidationError('Imię musi mieć od 3 do 55 znaków.');
        }

        this.id = obj.id;
        this.name = obj.name;
        this.gift_id = obj.gift_id;
    }

    async insert() {
        if (!this.id) {
            this.id = uuid();
        }

        await pool.execute("INSERT INTO `children` (`id`, `name`) VALUES(:id, :name)", {
            id: this.id,
            name: this.name,
        });

        return this.id;
    }

    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `children` ORDER BY `name` ASC");
        return results.map( obj => new ChildRecord(obj));
    }

    static async getOne(id) {
        const [results] = await pool.execute("SELECT * FROM `children` WHERE `id` = :id", {
            id,
        });
        return results.length === 0 ? null : new ChildRecord(results[0]);
    }

    async update() {
        await pool.execute("UPDATE `children` SET `name` = :name, `gift_id` = :gift_id WHERE `id` = :id", {
            id: this.id,
            name: this.name,
            gift_id: this.gift_id,
        });
    }
}

module.exports = {
    ChildRecord,
}