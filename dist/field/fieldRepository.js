import { Field } from "./fieldEntity.js";
const fields = [
    new Field('Futbol 5', true, '10x15', 'c2181edf-041b-0a61-3651-79d671fa3db7')
];
export class FieldRepository {
    async findAll() {
        return await fields;
    }
    async findOne(i) {
        return await fields.find((field) => field.id === i.id);
    }
    async add(i) {
        await fields.push(i);
        return i;
    }
    async update(i) {
        const fieldIdx = await fields.findIndex((field) => field.id === i.id);
        if (fieldIdx !== -1) {
            fields[fieldIdx] = { ...fields[fieldIdx], ...i };
        }
        return fields[fieldIdx];
    }
    async delete(i) {
        const fieldIdx = await fields.findIndex((field) => field.id === i.id);
        if (fieldIdx !== -1) {
            const deletedFields = fields[fieldIdx];
            fields.splice(fieldIdx, 1);
            return deletedFields;
        }
    }
}
//# sourceMappingURL=fieldRepository.js.map