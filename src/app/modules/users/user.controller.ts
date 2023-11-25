/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
const updateAUser = async (req: Request, res: Response) => {
    try {
        const updatedUser = req.body;
        const { userId } = req.params
        const data = { updatedUser, userId }
        const result = await userServices.updateAUserFromDB(data)
        res.status(200).json({
            success: true,
            message: `User updated successfully!`,
            data: result
        })
    } catch (error: any) {
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

const addOrder = async (req: Request, res: Response) => {
    try {
        const order = req.body;
        const { userId } = req.params
        const data = { order, userId }
        const result = await userServices.addOrderToDB(data)
        if (result) {
            res.status(200).json({
                success: true,
                message: `Order updated successfully!`,
                data: null
            })
        }

    } catch (error: any) {
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

const getAUserOrders = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params
        const result = await userServices.getAUserOrdersDB(Number(userId))
        res.status(200).json({
            success: true,
            message: `User fetched successfully!`,
            data: result
        })
    }
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

export const userControllers = {
    createUser, getUsers, getAUser, deleteAUser, updateAUser, addOrder, getAUserOrders
}