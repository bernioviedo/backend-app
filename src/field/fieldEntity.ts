import { ObjectId } from 'mongodb';
import crypto from 'node:crypto'

export class Field {
    constructor(
        public type: string,
        public status: boolean,
        public grill: boolean,
        public price: number,
        public imageUrl: string,
        public id = crypto.randomUUID(),
        public _id?: ObjectId
    ) {}
}