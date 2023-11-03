import { Field } from "./fieldEntity.js"
import { Repository } from "../shared/repository.js"

const fields =[ 
    new Field ('Futbol 5',
    true,
    '10x15',
    'c2181edf-041b-0a61-3651-79d671fa3db7')
]

export class FieldRepository implements Repository<Field>{
    public findAll(): Field[] | undefined {
        return fields
    }
    public findOne(i: { id: string; }): Field | undefined {
        return fields.find((field) => field.id === i.id)
    }
    public add(i: Field): Field | undefined {
        fields.push(i)
        return i
    }
    public update(i: Field): Field | undefined {
        const fieldIdx = fields.findIndex((field) => field.id === i.id)

        if (fieldIdx !== -1){
            fields[fieldIdx] = { ...fields[fieldIdx], ...i}
        }

        return fields[fieldIdx]
    }
    public delete(i: { id: string; }): Field | undefined {
        const fieldIdx = fields.findIndex((field) => field.id === i.id)

        if (fieldIdx !== -1){
            const deletedFields = fields[fieldIdx]
            fields.splice(fieldIdx, 1)
            return deletedFields
        }
    }
}