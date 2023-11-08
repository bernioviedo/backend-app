import { Field } from "./fieldEntity.js"
import { Repository } from "../shared/repository.js"

const fields =[ 
    new Field ('Futbol 5',
    true,
    '10x15',
    'c2181edf-041b-0a61-3651-79d671fa3db7')
]

export class FieldRepository implements Repository<Field>{
    public async findAll(): Promise<Field[] | undefined> {
        return await fields
    }
    public async findOne(i: { id: string; }): Promise<Field | undefined> {
        return await fields.find((field) => field.id === i.id)
    }
    public async add(i: Field): Promise<Field | undefined> {
        await fields.push(i)
        return i
    }
    public async update(i: Field): Promise<Field | undefined> {
        const fieldIdx = await fields.findIndex((field) => field.id === i.id)

        if (fieldIdx !== -1){
            fields[fieldIdx] = { ...fields[fieldIdx], ...i}
        }

        return fields[fieldIdx]
    }
    public async delete(i: { id: string; }): Promise<Field | undefined> {
        const fieldIdx = await fields.findIndex((field) => field.id === i.id)

        if (fieldIdx !== -1){
            const deletedFields = fields[fieldIdx]
            fields.splice(fieldIdx, 1)
            return deletedFields
        }
    }
}