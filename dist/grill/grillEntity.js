import crypto from 'node:crypto';
export class Grill {
    constructor(status, size, grillId = crypto.randomUUID()) {
        this.status = status;
        this.size = size;
        this.grillId = grillId;
    }
}
//# sourceMappingURL=grillEntity.js.map