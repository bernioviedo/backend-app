import crypto from 'node:crypto'

export class Receipt {
    constructor(
        public amount: number,
        public type: string,
        public registeredName: string,
        public paymentMethod: string,
        public receiptId = crypto.randomUUID()
    ) {}
}