/* eslint-disable no-unused-vars */
import { Request, Response } from "express"
import { userServices } from "./user.service"
import UserValidationSchema from "./user.validation"

const createUser = async (req: Request, res: Response) => {
    try {
        const user = req.body
        const zodData = UserValidationSchema.parse(user)
        const result = await userServices.createUserIntoDB(zodData)
        res.status(200).json({
            success: true,
            message: `User created successfully!`,
            data: result
        })
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: {
                code: 500,
                description: error.message
            }
        })
    }
}
const getUsers = async (req: Request, res: Response) => {
    try {
        const result = await userServices.getUserFromDB()
        res.status(200).json({
            success: true,
            message: `User fetched successfully!`,
            data: result
        })
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.issues[0].message,
            error: {
                code: 500,
                description: error
            }
        })
    }
}
const getAUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params
        const result = await userServices.getAUserFromDB(Number(userId))
        if (result == null) {
            throw new Error(`user doesn't exists`)
        }
        res.status(200).json({
            success: true,
            message: `User fetched successfully!`,
            data: result
        })
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (error: any) {
        res.status(500).json({
            success: false,
            message: `user doesn't exists`,
            error: {
                code: 500,
                description: `user doesn't exists`
            }
        })
    }
}

const deleteAUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const result = await userServices.deleteAUserFromDB(Number(userId))
        res.status(200).json({
            success: true,
            message: `User deleted successfully!`,
            data: null
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `user doesn't exists`,
            error: {
                code: 500,
                description: `user doesn't exists`
            }
        })
    }
}


export const userControllers = {
    createUser, getUsers, getAUser, deleteAUser
}