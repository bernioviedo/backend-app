import { Field } from "./fieldEntity.js";
import { FieldRepository } from "./fieldRepository.js";
const fieldRepo = new FieldRepository();
function sanitizeFieldInput(req, res, next) {
    req.body.sanitizedInput = {
        type: req.body.type,
        status: req.body.status,
        dimentions: req.body.dimentions
    };
    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if (req.body.sanitizedInput[key] === undefined) {
            delete req.body.sanitizedInput[key];
        }
    });
    next();
}
function findAll(req, res) {
    res.json({ data: fieldRepo.findAll() });
}
function findOne(req, res) {
    const id = req.params.id;
    const field = fieldRepo.findOne({ id });
    if (!field) {
        return res.status(404).send({ message: 'Field not found' });
    }
    res.json({ message: 'Field found', data: field });
}
function add(req, res) {
    const input = req.body.sanitizedInput;
    const fieldInput = new Field(input.type, input.status, input.dimentions);
    const field = fieldRepo.add(fieldInput);
    return res.status(201).json({ message: 'Field succefuly created', data: field });
}
function update(req, res) {
    req.body.sanitizedInput.id = req.params.id;
    const field = fieldRepo.update(req.body.sanitizedInput);
    if (!field) {
        return res.status(404).send({ message: 'Field not found' });
    }
    return res.status(200).json({ message: 'Field succefuly updated', data: field });
}
function remove(req, res) {
    const id = req.params.id;
    const field = fieldRepo.delete({ id });
    if (!field) {
        return res.status(404).send({ message: 'Field not found' });
    }
    return res.status(200).send({ message: 'Field succefully deleted' });
}
export { findAll, findOne, add, update, remove, sanitizeFieldInput };
//# sourceMappingURL=fieldController.js.map