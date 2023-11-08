import { Receipt } from "./receiptEntity.js"
import { Repository } from "../shared/repository.js"

const receipts = [
    new Receipt(
        6948.99,
        'A',
        'Tomas Campos',
        'Debito'
    )
]

export class ReceiptRepository implements Repository<Receipt>{
    async findAll(): Promise<Receipt[] | undefined> {
        return await receipts
    }
    async findOne(i: { id: string; }): Promise<Receipt | undefined> {
        return receipts.find((receipt) => receipt.receiptId === i.id)
    }
    async add(i: Receipt): Promise<Receipt | undefined> {
        await receipts.push(i)
        return i
    }
    async update(i: Receipt): Promise<Receipt | undefined> {
        const receiptIdx = await receipts.findIndex((receipt) => receipt.receiptId === i.receiptId)

        if (receiptIdx !== -1){
            receipts[receiptIdx] = { ...receipts[receiptIdx], ...i}
        }
        return receipts[receiptIdx]
    }
    async delete(i: { id: string; }): Promise<Receipt | undefined> {
        const receiptIdx = await receipts.findIndex((receipt) => receipt.receiptId === i.id)

        if (receiptIdx !== -1){
            const deletedReceipts = receipts[receiptIdx]
            receipts.splice(receiptIdx, 1)
            return deletedReceipts
        }
    }
}