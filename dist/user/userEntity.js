import crypto from 'node:crypto';
export class User {
    constructor(name, mail, phone, totalReserves, id = crypto.randomUUID()) {
        this.name = name;
        this.mail = mail;
        this.phone = phone;
        this.totalReserves = totalReserves;
        this.id = id;
    }
}
//# sourceMappingURL=userEntity.js.map