import crypto from 'node:crypto';
export class User {
    constructor(name, mail, phone, totalReserves, id = crypto.randomUUID(), _id) {
        this.name = name;
        this.mail = mail;
        this.phone = phone;
        this.totalReserves = totalReserves;
        this.id = id;
        this._id = _id;
    }
}
//# sourceMappingURL=userEntity.js.map