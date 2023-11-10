import { db } from "../shared/db/conn.js";
import { ObjectId } from "mongodb";
const users = db.collection('users');
export class UserRepository {
    async findAll() {
        return await users.find().toArray();
    }
    async findOne(i) {
        const _id = new ObjectId(i.id);
        return (await users.findOne({ _id })) || undefined;
    }
    async add(i) {
        i._id = (await users.insertOne(i)).insertedId;
        return i;
    }
    async update(i) {
        const _id = new ObjectId(i.id);
        return (await users.findOneAndUpdate({ _id }, { $set: i }, { returnDocument: "after" })) || undefined;
    }
    async delete(i) {
        const _id = new ObjectId(i.id);
        return (await users.findOneAndDelete({ _id })) || undefined;
    }
}
//# sourceMappingURL=userRepository.js.map