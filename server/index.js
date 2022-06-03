import express from "express";
import cors from "cors";
import { userRoute } from "./prisma/userroutes";
import { petRoute } from "./prisma/petroutes";

const app = express();

app.use(express.json())
app.use("api/users", userRoute)
app.use("api/pets", petRoute)
app.use(cors({
    origin: "localhost"
}))

app.listen(8000, ()=>{
    console.log("Listening on port 8000")
}) 