import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const petRoute = Router()
const { pet } = new PrismaClient()

export { petRoute }