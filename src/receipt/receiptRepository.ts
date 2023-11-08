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
    findAll(): Receipt[] | undefined {
        return receipts
    }
    findOne(i: { id: string; }): Receipt | undefined {
        return receipts.find((receipt) => receipt.receiptId === i.id)
    }
    add(i: Receipt): Receipt | undefined {
        receipts.push(i)
        return i
    }
    update(i: Receipt): Receipt | undefined {
        const receiptIdx = receipts.findIndex((receipt) => receipt.receiptId === i.receiptId)

        if (receiptIdx !== -1){
            receipts[receiptIdx] = { ...receipts[receiptIdx], ...i}
        }
        return receipts[receiptIdx]
    }
    delete(i: { id: string; }): Receipt | undefined {
        const receiptIdx = receipts.findIndex((receipt) => receipt.receiptId === i.id)

        if (receiptIdx !== -1){
            const deletedReceipts = receipts[receiptIdx]
            receipts.splice(receiptIdx, 1)
            return deletedReceipts
        }
    }
}