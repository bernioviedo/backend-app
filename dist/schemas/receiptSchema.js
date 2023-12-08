import { z } from 'zod';
const receiptSchema = z.object({
    amount: z.number({
        required_error: "Amount is required",
        invalid_type_error: "Amount must be a number"
    }).positive({
        message: "Amount must be a positive number"
    }),
    type: z.string({
        required_error: "Type is required",
        invalid_type_error: "Type must be a string"
    }).includes('A' || 'B', { message: "Type must be A or B" })
        .max(1, { message: "Typee must be a letter" }),
    registeredName: z.string({
        required_error: "Registered name is required",
        invalid_type_error: "Registered name must be a string"
    }),
    paymentMethod: z.string({
        required_error: "Payment method is required",
        invalid_type_error: "Payment method must be a string"
    })
});
export function validateReceipt(input) {
    return receiptSchema.safeParse(input);
}
export function validatePartialReceipt(input) {
    return receiptSchema.partial().safeParse(input);
}
//# sourceMappingURL=receiptSchema.js.map