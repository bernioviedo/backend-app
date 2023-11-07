import { Request, Response, NextFunction } from "express"
import { GrillRepository } from "./grillRepository.js"
import { Grill } from "./grillEntity.js"

const grillRepo = new GrillRepository()

function sanitizeGrillInput (req:Request, res:Response, next:NextFunction){
    req.body.sanitizedInput = {
        status: req.body.status,
        size: req.body.size
    }

    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if (req.body.sanitizedInput[key] === undefined) {
        delete req.body.sanitizedInput[key]
        }
    })
    next()
}

function findAll (req: Request, res:Response){
    res.json( { data: grillRepo.findAll() })
}

function findOne(req:Request, res:Response){
    const id = req.params.id

    const grill = grillRepo.findOne({ id })

    if (!grill){
        return res.status(404).send({ message: 'Grill not found' })
    }

    res.json({ message: 'Grill found', data: grill})
}

function add (req:Request, res:Response){
    const input = req.body.sanitizedInput

    const grillInput = new Grill(
        input.status,
        input.size
    )
    const grill = grillRepo.add(grillInput)
    return res.status(201).json({ message: 'Grill succefuly created', data:grill})
}

function update(req:Request, res:Response){
    req.body.sanitizedInput.grillId = req.params.id
    const grill = grillRepo.update(req.body.sanitizedInput)

    if (!grill){
        return res.status(404).send({ message: 'Grill not found' })
    }
    return res.status(200).json({ message:'Grill succefuly updated', data:grill })
}

function remove(req:Request, res:Response){
    const id = req.params.id

    const grill = grillRepo.delete({ id })

    if (!grill){
        return res.status(404).send({ message: 'Grill not found' })
    }
    return res.status(200).send({ message: 'Grill succefully deleted'})
}

export { sanitizeGrillInput, findAll, findOne, add, update, remove }