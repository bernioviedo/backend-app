import { db } from "../shared/db/conn.js";
import { ObjectId } from "mongodb";
const receipts = db.collection('Receipts');
export class ReceiptRepository {
    async findAll() {
        return await receipts.find().toArray();
    }
    async findOne(i) {
        const _id = new ObjectId(i.id);
        return (await receipts.findOne({ _id })) || undefined;
    }
    async add(i) {
        i._id = (await receipts.insertOne(i)).insertedId;
        return i;
    }
    async update(i) {
        const _id = new ObjectId(i.receiptId);
        return (await receipts.findOneAndUpdate({ _id }, { $set: i }, { returnDocument: 'after' })) || undefined;
    }
    async delete(i) {
        const _id = new ObjectId(i.id);
        return (await receipts.findOneAndDelete({ _id })) || undefined;
    }
}
//# sourceMappingURL=receiptRepository.js.map