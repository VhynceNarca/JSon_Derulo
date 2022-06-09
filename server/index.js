import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.js";
import { petRouter } from "./routes/pet.js";

const app = express();

app.use(express.json());
app.use("/users", userRouter);
app.use("/pets", petRouter);
app.use(
  cors({
    origin: "localhost",
  })
);

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
