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
    const result = await UserModel.findOne({ userId }).select({ userId: 1, username: 1, fullName: 1, age: 1, email: 1, address: 1, isActive: 1, hobbies: 1 });
    return result;
}

const deleteAUserFromDB = async (userId: number) => {
    const result = await UserModel.deleteOne({ userId })
    return result
}
export const userServices = {
    createUserIntoDB,
    getUserFromDB, getAUserFromDB, deleteAUserFromDB
}