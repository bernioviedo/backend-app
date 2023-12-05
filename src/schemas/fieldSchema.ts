import z from 'zod' 

const fieldSchema = z.object({
    type: z.string({
        required_error:""
    })
})