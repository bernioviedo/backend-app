import { Router } from "express";
import { sanitizeReceiptInput, findAll, findOne, add, update, remove } from "./receiptController.js";
export const receiptRouter = Router();
receiptRouter.get('/', findAll);
receiptRouter.post('/', sanitizeReceiptInput, add);
receiptRouter.get('/:id', findOne);
receiptRouter.put('/:id', sanitizeReceiptInput, update);
receiptRouter.patch('/:id', sanitizeReceiptInput, update);
receiptRouter.delete('/:id', remove);
//# sourceMappingURL=receiptsRoutes.js.map