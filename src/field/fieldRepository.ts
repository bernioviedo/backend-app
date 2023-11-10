import { Field } from "./fieldEntity.js"
import { Repository } from "../shared/repository.js"
import { db } from "../shared/db/conn.js"
import { ObjectId } from "mongodb"

const fields = db.collection<Field>('fields')

export class FieldRepository implements Repository<Field>{
    public async findAll(): Promise<Field[] | undefined> {
        return await fields.find().toArray()
    }
    public async findOne(i: { id: string; }): Promise<Field | undefined> {
        const _id = new ObjectId(i.id)
        return(await fields.findOne({ _id })) || undefined
    }
    public async add(i: Field): Promise<Field | undefined> {
        i._id = (await fields.insertOne(i)).insertedId
        return i
    }
    public async update(i: Field): Promise<Field | undefined> {
        const _id = new ObjectId(i.id)
        return (await fields.findOneAndUpdate({ _id }, { $set:i }, { returnDocument:'after' })) || undefined
    }
    public async delete(i: { id: string; }): Promise<Field | undefined> {
        const _id = new ObjectId(i.id)
        return(await fields.findOneAndDelete({ _id })) || undefined
    }
}