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
            message: `User created successfully`,
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
                description: error.issues[0].message
            }
        })
    }
}

export const userControllers = {
    createUser,
}