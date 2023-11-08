import { Receipt } from "./receiptEntity.js";
const receipts = [
    new Receipt(6948.99, 'A', 'Tomas Campos', 'Debito')
];
export class ReceiptRepository {
    async findAll() {
        return await receipts;
    }
    async findOne(i) {
        return receipts.find((receipt) => receipt.receiptId === i.id);
    }
    async add(i) {
        await receipts.push(i);
        return i;
    }
    async update(i) {
        const receiptIdx = await receipts.findIndex((receipt) => receipt.receiptId === i.receiptId);
        if (receiptIdx !== -1) {
            receipts[receiptIdx] = { ...receipts[receiptIdx], ...i };
        }
        return receipts[receiptIdx];
    }
    async delete(i) {
        const receiptIdx = await receipts.findIndex((receipt) => receipt.receiptId === i.id);
        if (receiptIdx !== -1) {
            const deletedReceipts = receipts[receiptIdx];
            receipts.splice(receiptIdx, 1);
            return deletedReceipts;
        }
    }
}
//# sourceMappingURL=receiptRepository.js.map