import { Field } from "./fieldEntity.js";
const fields = [
    new Field('Futbol 5', true, '10x15', 'c2181edf-041b-0a61-3651-79d671fa3db7')
];
export class FieldRepository {
    findAll() {
        return fields;
    }
    findOne(i) {
        return fields.find((field) => field.id === i.id);
    }
    add(i) {
        fields.push(i);
        return i;
    }
    update(i) {
        const fieldIdx = fields.findIndex((field) => field.id === i.id);
        if (fieldIdx !== -1) {
            fields[fieldIdx] = { ...fields[fieldIdx], ...i };
        }
        return fields[fieldIdx];
    }
    delete(i) {
        const fieldIdx = fields.findIndex((field) => field.id === i.id);
        if (fieldIdx !== -1) {
            const deletedFields = fields[fieldIdx];
            fields.splice(fieldIdx, 1);
            return deletedFields;
        }
    }
}
//# sourceMappingURL=fieldRepository.js.map