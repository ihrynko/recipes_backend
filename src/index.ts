import { Request, Response } from "express";
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { Context } from './types';
import router from "./routes";

import * as dotenv from 'dotenv';
dotenv.config()

const { PORT=80 , MONGO_URI } = process.env;
const app = express();

declare global {
  namespace Express {
    interface Request {
      context?: Context;
      
    }
  }
}


app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.use("*", (_req: Request, res: Response) => {
   res.status(404).json({
    message: 'Not found',
  });
});

async function main() {
  try {
    await mongoose.connect(MONGO_URI as string);
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log("Server is running on port ", PORT);
      console.log("Press CTRL + C to stop");
    });
  } catch (error) {
    console.error(error);
  }
}

main();
