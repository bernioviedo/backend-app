import crypto from 'node:crypto'
import { ObjectId } from 'mongodb'

export class Employee{
    constructor(
        public name: string,
        public cuil: string,
        public age: number,
        public ancient: number,
        //public employeId = crypto.randomUUID(),
        public _id? : ObjectId
    ) {}
}