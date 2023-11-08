import crypto from 'node:crypto'

export class User{
    constructor(
        public name: string,
        public mail: string,
        public phone: string,
        public totalReserves: number,
        public id = crypto.randomUUID()
    ) {}
}