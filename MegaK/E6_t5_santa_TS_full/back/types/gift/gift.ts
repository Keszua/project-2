import {GiftEntity} from "./gift.entity";

export type CreateGiftReq = Omit<GiftEntity, 'id'>;  // Weź typ GiftEntity i usuń z niego klucz 'id'

export interface GetSingleGiftRes {
    gift: GiftEntity;
    givenCount: number;
};