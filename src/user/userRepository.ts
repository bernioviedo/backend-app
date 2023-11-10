import { User } from "./userEntity.js"
import { Repository } from "../shared/repository.js"
import { db } from "../shared/db/conn.js"
import { ObjectId } from "mongodb"


const users = db.collection<User>('users')

export class UserRepository implements Repository<User>{
    async findAll(): Promise<User[] | undefined> {
        return await users.find().toArray()
    }
    async findOne(i: { id: string; }): Promise<User | undefined> {
        const _id = new ObjectId(i.id)
        return (await users.findOne({ _id })) || undefined
    }
    async add(i: User): Promise<User | undefined> {
        i._id = (await users.insertOne(i)).insertedId
        return i
    }
    async update(i: User): Promise<User | undefined> {
        const _id = new ObjectId(i.id)
        return (await users.findOneAndUpdate({ _id }, {$set: i }, { returnDocument: "after"})) || undefined
    }
    async delete(i: { id: string; }): Promise<User | undefined> {
        const _id = new ObjectId(i.id)
        return (await users.findOneAndDelete({ _id })) || undefined
    }
}