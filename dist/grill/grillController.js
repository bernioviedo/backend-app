import { GrillRepository } from "./grillRepository.js";
import { Grill } from "./grillEntity.js";
const grillRepo = new GrillRepository();
function sanitizeGrillInput(req, res, next) {
    req.body.sanitizedInput = {
        status: req.body.status,
        size: req.body.size
    };
    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if (req.body.sanitizedInput[key] === undefined) {
            delete req.body.sanitizedInput[key];
        }
    });
    next();
}
function findAll(req, res) {
    res.json({ data: grillRepo.findAll() });
}
function findOne(req, res) {
    const id = req.params.id;
    const grill = grillRepo.findOne({ id });
    if (!grill) {
        return res.status(404).send({ message: 'Grill not found' });
    }
    res.json({ message: 'Grill found', data: grill });
}
function add(req, res) {
    const input = req.body.sanitizedInput;
    const grillInput = new Grill(input.status, input.size);
    const grill = grillRepo.add(grillInput);
    return res.status(201).json({ message: 'Grill succefuly created', data: grill });
}
function update(req, res) {
    req.body.sanitizedInput.grillId = req.params.id;
    const grill = grillRepo.update(req.body.sanitizedInput);
    if (!grill) {
        return res.status(404).send({ message: 'Grill not found' });
    }
    return res.status(200).json({ message: 'Grill succefuly updated', data: grill });
}
function remove(req, res) {
    const id = req.params.id;
    const grill = grillRepo.delete({ id });
    if (!grill) {
        return res.status(404).send({ message: 'Grill not found' });
    }
    return res.status(200).send({ message: 'Grill succefully deleted' });
}
export { sanitizeGrillInput, findAll, findOne, add, update, remove };
//# sourceMappingURL=grillController.js.map