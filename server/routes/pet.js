import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const petRouter = Router()
const { pet } = new PrismaClient()

petRouter.get("/dogs/:skip_value", async (request, response) => {
    const category = "Dog"
    const status = "ForAdoption"
    const take_value = 5
    const { skip_value } = request.params
    try {
        const get_dogs = await pet.findMany({
            skip: parseInt(skip_value),
            take: take_value,
            select: {
                id: true,
                name: true,
                category: true,
                image: true,
                breed: true,
                status: true,
                description: true
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

petRouter.get("/dogcount", async (request, response) => {
    const category = "Dog"
    const status = "ForAdoption"
    try {
        const dog_count = await pet.count({
            where: {
                category,
                status
            }
        })
        response.json(dog_count)
    } catch (err) {
        console.error(err.message)
    }
})

petRouter.get("/cats/:skip_value", async (request, response) => {
    const category = "Cat"
    const status = "ForAdoption"
    const take_value = 5
    const { skip_value } = request.params
    try {
        const get_cats = await pet.findMany({
            skip: parseInt(skip_value),
            take: take_value,
            select: {
                id: true,
                name: true,
                category: true,
                image: true,
                breed: true,
                status: true,
                description: true
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

petRouter.get("/catcount", async (request, response) => {
    const category = "Cat"
    const status = "ForAdoption"
    try {
        const cat_count = await pet.count({
            where: {
                category,
                status
            }
        })
        response.json(cat_count)
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
                description: true
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
    const { name, category, image, breed, description } = request.body
    try {
        const register_pet = await pet.create({
            data: {
                name,
                category,
                image,
                breed,
                description
            }
        })
        response.json(register_pet)
    } catch (err) {
        console.error(err.message)
    }
})

petRouter.put("/edit/:id", async(request, response) => {
    const { id } = request.params
    const { name, image, breed, description } = request.body
    try {
        const update_pet = await pet.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name,
                image,
                breed, 
                description
            }
        })
        response.json(update_pet)
    } catch (err) {
        console.error(err.message)
    }
})

petRouter.delete("/delete/:id", async(request, response) => {
    const { id } = request.params
    try {
        const delete_pet = await pet.delete({
            where: {
                id: parseInt(id)
            }
        })
        response.json(delete_pet)
    } catch (err) {
        console.error(err.message)
    }
})

export { petRouter }