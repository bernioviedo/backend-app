import crypto from 'node:crypto'

export class Grill{
    constructor(
        public status: boolean,
        public size: string,
        public grillId = crypto.randomUUID()
    ) {}
}