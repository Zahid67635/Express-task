/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserModel } from "./user.model";
import { TUser } from "./user.interface";

const createUserIntoDB = async (user: TUser) => {
    const result = await UserModel.create(user);
    return result;
}
const getUserFromDB = async () => {
    const result = await UserModel.find().select({ username: 1, fullName: 1, age: 1, email: 1, address: 1 });
    return result;
}
const getAUserFromDB = async (userId: number) => {
    if (await UserModel.isUserExists(userId)) {
        const result = await UserModel.findOne({ userId }).select({ userId: 1, username: 1, fullName: 1, age: 1, email: 1, address: 1, isActive: 1, hobbies: 1, orders: 1 });
        return result;
    }
    throw new Error('User Not exists')

}

const deleteAUserFromDB = async (userId: number) => {
    if (await UserModel.isUserExists(userId)) {
        const result = await UserModel.deleteOne({ userId })
        return result
    }
    throw new Error('User Not exists')
}

const updateAUserFromDB = async (data: any) => {
    if (await UserModel.isUserExists(data.userId)) {
        const filter = { userId: data.userId }
        const result = await UserModel.updateOne(filter, { ...data.updatedUser })
        if (result) {
            return data.updatedUser
        }
    }
    throw new Error('User Not exists')
}

const addOrderToDB = async (data: any) => {
    const userIdConverted = Number(data.userId)
    if (await UserModel.isUserExists(userIdConverted)) {
        const filter = { userId: Number(userIdConverted) }
        const result = await UserModel.updateOne(filter, { $push: { orders: data.order } })
        return result
    }
    throw new Error('User Not exists')
}
const getAUserOrdersDB = async (id: number) => {
    if (await UserModel.isUserExists(id)) {
        const result = await UserModel.findOne({ userId: id }).select({ orders: 1 })
        return result
    }
    throw new Error('User Not exists')
}

export const userServices = {
    createUserIntoDB,
    getUserFromDB, getAUserFromDB, deleteAUserFromDB, updateAUserFromDB, addOrderToDB,
    getAUserOrdersDB
}