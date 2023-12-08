import crypto from 'node:crypto'
import { ObjectId } from 'mongodb'

export class User{
    constructor(
        public name: string,
        public lastName: string,
        public mail: string,
        public totalReserves: number,
        public id = crypto.randomUUID(),
        public _id?: ObjectId
    ) {}
}