import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.js";
import { petRouter } from "./routes/pet.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use("/users", userRouter);
app.use("/pets", petRouter);

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
