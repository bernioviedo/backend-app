import crypto from 'node:crypto';
export class Receipt {
    constructor(amount, type, registeredName, paymentMethod, receiptId = crypto.randomUUID()) {
        this.amount = amount;
        this.type = type;
        this.registeredName = registeredName;
        this.paymentMethod = paymentMethod;
        this.receiptId = receiptId;
    }
}
//# sourceMappingURL=receiptEntity.js.map