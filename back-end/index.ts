import express, { Express, Request, Response } from "express";
import dotenv from "dotenv"

// express app
const app: Express = express();
dotenv.config();

// define server port
const port = process.env.PORT;

// create default route
app.get("/", (req: Request, res: Response) => {
    res.send("Express + Typescript")
})


app.listen(port);