import crypto from 'node:crypto';
export class User {
    constructor(name, lastName, mail, 
    //public phone: string,
    totalReserves, id = crypto.randomUUID(), _id) {
        this.name = name;
        this.lastName = lastName;
        this.mail = mail;
        this.totalReserves = totalReserves;
        this.id = id;
        this._id = _id;
    }
}
//# sourceMappingURL=userEntity.js.map