import express from "express";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import cors from "cors";
import TestRouter from "./routes/test.routes.mjs";

const app = express();
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(cors());

// routers
const routers = [TestRouter];
routers.forEach((router) => app.use("/", router));

// Backend defaults to port 3004
const PORT = process.env.PORT || 3004;
app.listen(PORT);
