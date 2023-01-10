import { Router } from "express";
import { ChildRecord } from "../records/child.record";
import { GiftRecord } from "../records/gift.record";
import { CreateChildReq, ListChildrenRes, SetGiftForChildReq } from "../types";
import { ValidationError } from "../utils/errors";

export const childRouter = Router();

childRouter
    .get('/', async (req, res) => {
        const childrenList = await ChildRecord.listAll();
        const giftsList = await GiftRecord.listAll();

        res.json({
            childrenList,
            giftsList,
        } as ListChildrenRes);
    })

    .post('/', async (req, res) => {
        const newChild = new ChildRecord(req.body as CreateChildReq);
        await newChild.insert();

        res.json(newChild);
    })

    .patch('/gift/:childId', async (req, res) => {
        const {body}: {
            body: SetGiftForChildReq;
        } = req;

        const child = await ChildRecord.getOne(req.params.childId);

        if (child === null ) {
            throw new ValidationError('Nie znaleziono dziecka z podanym ID');
        };

        const gift = body.giftId === '' ? null : await GiftRecord.getOne(body.giftId);

        if (gift) {
            if (gift.count <= await gift.countGivenGifts()) {
                throw new ValidationError('Tego prezentu jest za mało');
            };
        }

        //child.gift_id = gift === null ? null : gift.id;  
        child.gift_id = gift?.id ?? null;
        
        await child.update();

        res.json(child);
    })
;

// module.exports = {
//     childRouter,
// }