import { z } from "zod";

const FullNameValidationSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
});

const AddressValidationSchema = z.object({
    street: z.string().min(1),
    city: z.string().min(1),
    country: z.string().min(1),
});

const OrderValidationSchema = z.object({
    productName: z.string().min(1),
    price: z.number().positive(),
    quantity: z.number().nonnegative(),
});

const UserValidationSchema = z.object({
    userId: z.number().positive(),
    username: z.string().min(1),
    password: z.string().min(6, { message: 'Password Should be minimum 6 characters' }),
    fullName: FullNameValidationSchema,
    age: z.number().positive(),
    email: z.string().min(1).email(),
    isActive: z.boolean(),
    hobbies: z.array(z.string().min(1)),
    address: AddressValidationSchema,
    orders: z.optional(z.array(OrderValidationSchema)),
});

export default UserValidationSchema