import { UserModel } from "./user.model";
import { TUser } from "./user.interface";

const createUserIntoDB = async (user: TUser) => {
    const result = await UserModel.create(user);
    return result;
}
const getUserFromDB = async () => {
    const result = await UserModel.find();
    return result;
}
const getAUserFromDB = async (userId: number) => {
    const result = await UserModel.findOne({ userId });
    return result;
}

export const userServices = {
    createUserIntoDB,
    getUserFromDB, getAUserFromDB
}