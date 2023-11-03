import crypto from 'node:crypto'

export class Field {
    constructor(
        public type: string,
        public status: boolean,
        public dimentions: string,
        public id = crypto.randomUUID()
    ) {}
}