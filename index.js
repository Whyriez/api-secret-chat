import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server Running"));
