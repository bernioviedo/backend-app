import { User } from "./userEntity.js";
import { UserRepository } from "./userRepository.js";
import { validateUser } from "../schemas/userSchema.js";
import crypto from 'node:crypto';
import { ObjectId } from "mongodb";
const userRepo = new UserRepository();
function sanitizeUserInput(req, res, next) {
    req.body.sanitizedInput = {
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        //phone: req.body.phone,
        totalReserves: req.body.totalReserves
    };
    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if (req.body.sanitizedInput[key] === undefined) {
            delete req.body.sanitizedInput[key];
        }
    });
    next();
}
async function findAll(req, res) {
    res.json({ message: 'USERS', data: await userRepo.findAll() });
}
async function findOne(req, res) {
    const id = req.params.id;
    const user = await userRepo.findOne({ id });
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User founded', data: user });
}
async function add(req, res) {
    const result = validateUser(req.body);
    if (!result.success) {
        return res.status(422).json({ error: JSON.parse(result.error.message) });
    }
    const newUser = userRepo.add({
        ...result.data,
        id: crypto.randomUUID(),
        _id: new ObjectId
    });
    return res.status(201).json({ message: 'User created', data: newUser });
    const input = req.body.sanitizedInput;
    const userInput = new User(input.name, input.lastName, input.email, 
    //input.phone,
    input.totalReserves);
    const user = await userRepo.add(userInput);
    res.status(201).json({ message: 'User added', data: user });
}
async function update(req, res) {
    req.body.sanitizedInput.id = req.params.id;
    const user = await userRepo.update(req.body.sanitizedInput);
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User modified', data: user });
}
async function remove(req, res) {
    const id = req.params.id;
    const user = await userRepo.delete({ id });
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted' });
}
export { sanitizeUserInput, findAll, findOne, add, update, remove };
//# sourceMappingURL=userController.js.map