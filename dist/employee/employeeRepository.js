import { db } from "../shared/db/conn.js";
import { ObjectId } from "mongodb";
const employees = db.collection('employees');
export class EmployeeRepository {
    async findAll() {
        return await employees.find().toArray();
    }
    async findOne(i) {
        const _id = new ObjectId(i.id);
        return (await employees.findOne({ _id })) || undefined;
    }
    async add(i) {
        (await employees.insertOne(i)).insertedId;
        return i;
    }
    async update(i) {
        const _id = new ObjectId(i._id);
        return (await employees.findOneAndUpdate({ _id }, { $set: i }, { returnDocument: 'after' })) || undefined;
    }
    async delete(i) {
        const _id = new ObjectId(i.id);
        return (await employees.findOneAndDelete({ _id })) || undefined;
    }
}
//# sourceMappingURL=employeeRepository.js.map