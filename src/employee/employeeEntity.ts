import crypto from 'node:crypto'

export class Employee{
    constructor(
        public name: string,
        public cuil: string,
        public age: number,
        public ancient: number,
        public employeId = crypto.randomUUID()
    ) {}
}