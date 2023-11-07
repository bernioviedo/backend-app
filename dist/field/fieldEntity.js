import crypto from 'node:crypto';
export class Field {
    constructor(type, status, dimentions, id = crypto.randomUUID()) {
        this.type = type;
        this.status = status;
        this.dimentions = dimentions;
        this.id = id;
    }
}
//# sourceMappingURL=fieldEntity.js.map