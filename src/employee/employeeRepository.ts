import { Repository } from "../shared/repository.js"
import { Employee } from "./employeeEntity.js"
import { db } from "../shared/db/conn.js"
import { ObjectId } from "mongodb"

const employees = db.collection<Employee>('employees')

export class EmployeeRepository implements Repository<Employee>{
    public async findAll(): Promise<Employee[] | undefined> {
        return await employees.find().toArray()
    }
    public async findOne(i: { id: string; }): Promise<Employee | undefined> {
        const _id = new ObjectId(i.id)
        return (await employees.findOne({ _id })) || undefined
    }
    public async add(i: Employee): Promise<Employee | undefined> {
        (await employees.insertOne(i)).insertedId
        return i
    }
    public async update(i: Employee): Promise<Employee | undefined> {
        const _id = new ObjectId(i.employeId)
        return(await employees.findOneAndUpdate({ _id}, { $set: i }, { returnDocument:'after'})) || undefined
    }
    public async delete(i: { id: string; }): Promise<Employee | undefined> {
        const _id = new ObjectId(i.id)
        return (await employees.findOneAndDelete({ _id })) || undefined
    }
}