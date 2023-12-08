import { FieldRepository } from "./fieldRepository.js";
import { validateField } from "../schemas/fieldSchema.js";
import { ObjectId } from "mongodb";
const fieldRepo = new FieldRepository();
function sanitizeFieldInput(req, res, next) {
    req.body.sanitizedInput = {
        type: req.body.type,
        status: req.body.status,
        grill: req.body.grill,
        price: req.body.price,
        imageUrl: req.body.imageUrl
    };
    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if (req.body.sanitizedInput[key] === undefined) {
            delete req.body.sanitizedInput[key];
        }
    });
    next();
}
async function findAll(req, res) {
    res.json({ data: await fieldRepo.findAll() });
}
async function findOne(req, res) {
    const id = req.params.id;
    const field = await fieldRepo.findOne({ id });
    if (!field) {
        return res.status(404).send({ message: 'Field not found' });
    }
    res.json({ message: 'Field found', data: field });
}
async function add(req, res) {
    const result = validateField(req.body);
    if (!result.success) {
        return res.status(422).json({ error: JSON.parse(result.error.message) });
    }
    const newField = await fieldRepo.add({
        ...result.data,
        id: crypto.randomUUID(),
        _id: new ObjectId
    });
    return res.status(200).json({ message: 'Field succefuly created', data: newField });
}
async function update(req, res) {
    req.body.sanitizedInput.id = req.params.id;
    const field = await fieldRepo.update(req.body.sanitizedInput);
    if (!field) {
        return res.status(404).send({ message: 'Field not found' });
    }
    return res.status(200).json({ message: 'Field succefuly updated', data: field });
}
async function remove(req, res) {
    const id = req.params.id;
    const field = await fieldRepo.delete({ id });
    if (!field) {
        return res.status(404).send({ message: 'Field not found' });
    }
    return res.status(200).send({ message: 'Field succefully deleted' });
}
export { findAll, findOne, add, update, remove, sanitizeFieldInput };
//# sourceMappingURL=fieldController.js.map