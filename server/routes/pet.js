import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const petRouter = Router()
const { pet } = new PrismaClient()

petRouter.get("/dogs", async (request, response) => {
    const category = "Dog"
    const status = "ForAdoption"
    try {
        const get_dogs = await pet.findMany({
            select: {
                id: true,
                name: true,
                category: true,
                image: true,
                breed: true,
                status: true,
                descripton: true
            }, 
            where: {
                category,
                status
            }
        })
        response.json(get_dogs)
    } catch (err) {
        console.error(err.message)
    }
})

petRouter.get("/cats", async (request, response) => {
    const category = "Cat"
    const status = "ForAdoption"
    try {
        const get_cats = await pet.findMany({
            select: {
                id: true,
                name: true,
                category: true,
                image: true,
                breed: true,
                status: true,
                descripton: true
            },
            where: {
                category,
                status
            }
        })
        response.json(get_cats)
    } catch (err) {
        console.error(err.message)
    }
})

petRouter.get("/:id", async(request, response) => {
    const { id } = request.params
    try {
        const get_pet = await pet.findUnique({
            select: {
                id: true,
                name: true,
                category: true,
                image: true,
                breed: true,
                status: true,
                descripton: true
            },
            where: {
                id: parseInt(id)
            }
        })
        response.json(get_pet)
    } catch (err) {
        console.error(err.message)
    }
})

petRouter.post("/register", async(request, response) => {
    const { name, category, image, breed, descripton } = request.body
    try {
        const register_pet = await pet.create({
            data: {
                name,
                category,
                image,
                breed,
                descripton
            }
        })
        response.json(register_pet)
    } catch (err) {
        console.error(err.message)
    }
})

petRouter.put("/adopt/:id", async(request, response) => {
    const { id } = request.params
    const update_status = "Adopted"
    try {
        const adopt_pet = await pet.update({
            where: {
                id: parseInt(id)
            },
            data: {
                status: update_status
            }
        })
        response.json(adopt_pet)
    } catch (err) {
        console.error(err.message)
    }
})

export { petRouter }