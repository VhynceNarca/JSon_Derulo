import express from "express";
import cors from "cors";
import { userRoute } from "./routes/userroutes.js";
import { petRoute } from "./routes/petroutes.js";

const app = express();

app.use(express.json());
app.use("api/users", userRoute);
app.use("api/pets", petRoute);
app.use(
  cors({
    origin: "localhost",
  })
);

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
