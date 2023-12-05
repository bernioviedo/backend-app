import { EmployeeRepository } from "./employeeRepository.js";
import { validateEmployee } from "../schemas/employeeSchema.js";
const employeeRepo = new EmployeeRepository();
function sanitizeEmployeeInput(req, res, next) {
    req.body.sanitizedInput = {
        name: req.body.name,
        cuil: req.body.cuil,
        age: req.body.age,
        ancient: req.body.ancient
    };
    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if (req.body.sanitizedInput[key] === undefined) {
            delete req.body.sanitizedInput[key];
        }
    });
    next();
}
async function findAll(req, res) {
    res.json({ data: await employeeRepo.findAll() });
}
async function findOne(req, res) {
    const id = req.params.id;
    const employee = await employeeRepo.findOne({ id });
    if (!employee) {
        return res.status(404).send({ message: 'Employee not found' });
    }
    res.json({ data: employee });
}
async function add(req, res) {
    const result = validateEmployee(req.body);
    if (!result.success) {
        return res.status(422).json({ error: JSON.parse(result.error.message) });
    }
    const newEmployee = await employeeRepo.add({ ...result.data });
    return res.status(201).json({ data: newEmployee });
}
async function update(req, res) {
    req.body.sanitizedInput.employeId = req.params.id;
    const employee = await employeeRepo.update(req.body.sanitizedInput);
    if (!employee) {
        return res.status(404).send({ message: 'Employee not found' });
    }
    return res.status(200).send({ message: 'Employee succefully updated', data: employee });
}
async function remove(req, res) {
    const id = req.params.id;
    const employee = await employeeRepo.delete({ id });
    if (!employee) {
        return res.status(404).send({ message: 'Employee not found' });
    }
    return res.status(200).send({ message: 'Employee succefully deleted' });
}
export { sanitizeEmployeeInput, findAll, findOne, add, update, remove };
//# sourceMappingURL=employeeController.js.map