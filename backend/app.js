import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { DB_CONNECTION } from "./database/db_connection.js";

const APP = express();
config({ path: "./config/config.env" });

APP.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

APP.use(cookieParser());
APP.use(express.json());
APP.use(express.urlencoded({ extend: true }));
APP.use(fileUpload({ useTempFiles: true, tempFileDir: "/temp/" }));
DB_CONNECTION();

export default APP;
