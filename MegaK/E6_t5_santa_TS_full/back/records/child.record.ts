import { pool } from "../utils/db";
import { ValidationError } from "../utils/errors";
import {v4 as uuid} from 'uuid';
import { FieldPacket } from "mysql2";
import { ChildEntity } from "../types";

type ChildRecordResults = [ChildRecord[], FieldPacket[]];

export class ChildRecord implements ChildEntity {
    public id?: string;
    public name: string;
    public gift_id: string | null;

    constructor(obj: ChildEntity ) {
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

    static async listAll(): Promise<ChildRecord[]> {
        const [results] = await pool.execute("SELECT * FROM `children` ORDER BY `name` ASC") as ChildRecordResults;
        return results.map( (obj: any) => new ChildRecord(obj));
    }

    static async getOne(id: string): Promise<ChildRecord | null> {
        const [results] = await pool.execute("SELECT * FROM `children` WHERE `id` = :id", {
            id,
        }) as ChildRecordResults;
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
