import z from 'zod' 

const fieldSchema = z.object({
    type: z.string({
        required_error:"Type is required",
        invalid_type_error:"Type must be a string"
    }),
    status: z.boolean({
        required_error:"Status is required",
        invalid_type_error:"Status must be a boolean"
    }),
    grill: z.boolean({
        required_error:"Grill is required",
        invalid_type_error:"Grill must be a boolean"
    }),
    price: z.number({
        required_error:"Price is required",
        invalid_type_error:"Price must be a number"
    }).int({
        message:"Price must be a integer"
    }).positive({message:"Price must be a positive number"}),
    imageUrl: z.string({
        required_error:"ImageUrl is required",
        invalid_type_error:"ImageUrl must be a string"
    }).url({
        message:"Must be a valid url"
    })
})

function validateField(object: any){
    return fieldSchema.safeParse(object)
}

function validatePartialField(object: any){
    return fieldSchema.safeParse(object)
}