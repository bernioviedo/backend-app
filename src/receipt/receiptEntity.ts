import crypto from 'node:crypto'
import { ObjectId } from 'mongodb'

export class Receipt {
    constructor(
        public amount: number,
        public type: string,
        public registeredName: string,
        public paymentMethod: string,
        public receiptId = crypto.randomUUID(),
        public _id?: ObjectId
    ) {}
}