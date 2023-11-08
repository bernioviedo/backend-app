import { Receipt } from "./receiptEntity.js";
const receipts = [
    new Receipt(6948.99, 'A', 'Tomas Campos', 'Debito')
];
export class ReceiptRepository {
    findAll() {
        return receipts;
    }
    findOne(i) {
        return receipts.find((receipt) => receipt.receiptId === i.id);
    }
    add(i) {
        receipts.push(i);
        return i;
    }
    update(i) {
        const receiptIdx = receipts.findIndex((receipt) => receipt.receiptId === i.receiptId);
        if (receiptIdx !== -1) {
            receipts[receiptIdx] = { ...receipts[receiptIdx], ...i };
        }
        return receipts[receiptIdx];
    }
    delete(i) {
        const receiptIdx = receipts.findIndex((receipt) => receipt.receiptId === i.id);
        if (receiptIdx !== -1) {
            const deletedReceipts = receipts[receiptIdx];
            receipts.splice(receiptIdx, 1);
            return deletedReceipts;
        }
    }
}
//# sourceMappingURL=receiptRepository.js.map