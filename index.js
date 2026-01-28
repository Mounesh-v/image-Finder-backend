import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDb from "./Config/db.js";
import router from "./Routes/UserRoutes.js";
import LikeRouter from "./Routes/likeRoutes.js";
const app = express();
dotenv.config();
ConnectDb();
app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);

app.use(express.json({ limit: "15mb" }));
app.use(express.urlencoded({ extended: true, limit: "15mb" }));

app.use("/api/users", router);
app.use("/api/image", LikeRouter);

const port = 5000;

app.listen(port, (req, res) => {
  console.log(`Server is running on http://localhost:${port}`);
});
