import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import jsonwebtoken from "jsonwebtoken";

const userRoute = Router()
const jwt = jsonwebtoken
const { user } = new PrismaClient()

export { userRoute }