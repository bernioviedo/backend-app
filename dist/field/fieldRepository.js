import { db } from "../shared/db/conn.js";
import { ObjectId } from "mongodb";
const fields = db.collection('fields');
export class FieldRepository {
    async findAll() {
        return await fields.find().toArray();
    }
    async findOne(i) {
        const _id = new ObjectId(i.id);
        return (await fields.findOne({ _id })) || undefined;
    }
    async add(i) {
        i._id = (await fields.insertOne(i)).insertedId;
        return i;
    }
    async update(i) {
        const _id = new ObjectId(i.id);
        return (await fields.findOneAndUpdate({ _id }, { $set: i }, { returnDocument: 'after' })) || undefined;
    }
    async delete(i) {
        const _id = new ObjectId(i.id);
        return (await fields.findOneAndDelete({ _id })) || undefined;
    }
}
//# sourceMappingURL=fieldRepository.js.map