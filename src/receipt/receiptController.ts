import { ReceiptRepository } from "./receiptRepository.js"
import { Receipt } from "./receiptEntity.js"
import { Request, Response, NextFunction } from 'express'
import { validateReceipt, validatePartialReceipt } from "../schemas/receiptSchema.js"
import { ObjectId } from "mongodb"
import crypto from 'node:crypto'


const receiptRepo = new ReceiptRepository()

function sanitizeReceiptInput (req:Request, res:Response, next:NextFunction){
    req.body.sanitizedInput = {
        amount: req.body.amount,
        type: req.body.type,
        registeredName: req.body.registeredName,
        paymentMethod: req.body.paymentMethod
    }

    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if (req.body.sanitizedInput[key] === undefined) {
        delete req.body.sanitizedInput[key]
        }
    })
    next()
}

async function findAll(req:Request, res:Response){
    res.json({ data: await receiptRepo.findAll() })
}

async function findOne(req:Request, res:Response){
    const id = req.params.id
    
    const receipt = await receiptRepo.findOne({ id })

    if(!receipt){
        return res.status(404).send({ message:'Receipt not found' })
    }
    res.status(200).json({ message:'Receipt founded', data:receipt })
}

async function add(req:Request, res:Response){
    const result = validateReceipt(req.body)

    if(!result.success){
        return res.status(422).json({ error:JSON.parse(result.error.message)})
    }

    const newReceipt = receiptRepo.add({
        ...result.data,
        receiptId: crypto.randomUUID(),
        _id: new ObjectId
    })
    return res.status(200).json({ message:'Receipt created', data: newReceipt })
}

async function update(req:Request, res:Response){
    req.body.sanitizedInput.receiptId = req.params.id
    const receipt = await receiptRepo.update(req.body.sanitizedInput)

    if(!receipt){
        return res.status(404).send({ message:'Receipt not found' })
    }
    res.status(200).json({ message:'Receipt updated', data: receipt})
}

async function remove(req:Request, res:Response){
    const id = req.params.id

    const receipt = await receiptRepo.delete({ id })
    if(!receipt){
        return res.status(404).send({ message:'Receipt not found' })
    }
    res.status(200).json({ message:'Receipt deleted' })
}

export { sanitizeReceiptInput, findAll, findOne, add, update, remove}