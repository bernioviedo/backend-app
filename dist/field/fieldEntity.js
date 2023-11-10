import crypto from 'node:crypto';
export class Field {
    constructor(type, status, grill, price, imageUrl, id = crypto.randomUUID(), _id) {
        this.type = type;
        this.status = status;
        this.grill = grill;
        this.price = price;
        this.imageUrl = imageUrl;
        this.id = id;
        this._id = _id;
    }
}
//# sourceMappingURL=fieldEntity.js.map