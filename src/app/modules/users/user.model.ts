import { Schema, model } from "mongoose";
import { TAddress, TFullName, TOrder, TUser } from "./user.interface";
import bcrypt from 'bcrypt';
import config from "../../config";

const userNameSchema = new Schema<TFullName>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
});
const AddressSchema = new Schema<TAddress>({
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    }
})
const OrderSchema = new Schema<TOrder>({
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
})
const UserSchema = new Schema<TUser>({
    userId: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    fullName: userNameSchema,
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
        default: false
    },
    hobbies: {
        type: [String],
        required: true
    },
    address: AddressSchema,
    orders: [OrderSchema]
})


UserSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this; // doc
    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds),
    );
    next();
});

UserSchema.post('save', function (doc, next) {
    doc.password = ''
    next();
});

export const UserModel = model<TUser>('User', UserSchema);
