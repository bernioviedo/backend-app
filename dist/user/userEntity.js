import crypto from 'node:crypto';
export class User {
    constructor(name, lastName, email, totalReserves, id = crypto.randomUUID(), _id) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.totalReserves = totalReserves;
        this.id = id;
        this._id = _id;
    }
}
//# sourceMappingURL=userEntity.js.map