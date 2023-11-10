import { Receipt } from "./receiptEntity.js"
import { Repository } from "../shared/repository.js"
import { db } from "../shared/db/conn.js"
import { ObjectId } from "mongodb"

const receipts = db.collection<Receipt>('Receipts') 

export class ReceiptRepository implements Repository<Receipt>{
    async findAll(): Promise<Receipt[] | undefined> {
        return await receipts.find().toArray()
    }
    public async findOne(i: { id: string }): Promise<Receipt | undefined> {
        const _id = new ObjectId(i.id)
        return (await receipts.findOne({ _id })) || undefined
    }
    async add(i: Receipt): Promise<Receipt | undefined> {
        i._id = (await receipts.insertOne(i)).insertedId
        return i
    }
    async update(i: Receipt): Promise<Receipt | undefined> {
        const _id = new ObjectId(i.receiptId)
        return (await receipts.findOneAndUpdate({ _id }, { $set: i}, { returnDocument:'after'})) || undefined
    }
    async delete(i: { id: string; }): Promise<Receipt | undefined> {
        const _id = new ObjectId(i.id)
        return (await receipts.findOneAndDelete({ _id })) || undefined
    }
}