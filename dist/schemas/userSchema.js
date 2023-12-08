import { z } from 'zod';
const userSchema = z.object({
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string"
    }),
    lastName: z.string({
        required_error: "Last name is required",
        invalid_type_error: "Last name  must be a string"
    }),
    mail: z.string({
        required_error: "Mail is required",
        invalid_type_error: "Mail must be a string"
    }).includes('@', { message: "At must be included" }).includes('.com', { message: ".com must be included" }),
    totalReserves: z.number().int().positive()
});
export function validateUser(input) {
    return userSchema.safeParse(input);
}
export function validatePartialUser(input) {
    return userSchema.partial().safeParse(input);
}
//# sourceMappingURL=userSchema.js.map