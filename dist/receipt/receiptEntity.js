import crypto from 'node:crypto';
export class Receipt {
    constructor(amount, type, registeredName, paymentMethod, receiptId = crypto.randomUUID(), _id) {
        this.amount = amount;
        this.type = type;
        this.registeredName = registeredName;
        this.paymentMethod = paymentMethod;
        this.receiptId = receiptId;
        this._id = _id;
    }
}
//# sourceMappingURL=receiptEntity.js.map