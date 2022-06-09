import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const userRouter = Router()
const { user } = new PrismaClient()

userRouter.get("/", async(request, response) => {
    try {
        const get_users = await user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
            }
        })
        response.json(get_users)
    } catch (err){
        console.error(err.message)
    }
})

userRouter.post("/register", async (request, response) => {
    const { name, email, password } = request.body
    try {
        const user_exists = await user.findUnique({
            select: {
                id: true
            }, 
            where: {
                email
            }
        })
        if ( user_exists ){
            response.sendStatus(400)
        } else {
            const new_user = await user.create({
                data: {
                    name,
                    email,
                    password
                }
            })
            response.json(new_user)
        }
    } catch (err) {
        console.error(err.message)
    }
})

userRouter.post("/login", async (request, response) => {
    const { email, password } = request.body
    try {
        const user_exists = await user.findUnique({
            select: {
                email: true,
                password: true
            }, 
            where: {
                email
            }
        })
        if (!user_exists) {
            response.sendStatus(400)
        }
        else if (user_exists.email == email && user_exists.password == password) {
            response.sendStatus(200)
        }
        else {
            response.sendStatus(404)
        }
    } catch (err) {
        console.error(err.message)
    }
})

export { userRouter }