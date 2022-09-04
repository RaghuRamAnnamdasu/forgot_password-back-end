import express from "express";
import {Db, MongoClient} from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./routers/user.js";
import nodemailer from "nodemailer";


const app = express();

dotenv.config(); 
app.use(cors({
  origin : "*",
  credentials : true,
  methods : "GET, POST, PUT"
}));

app.use(express.json());

const PORT = process.env.PORT || 5000;
const Mongo_URL = process.env.Mongo_URL;

async function createConnection(){
    const client = new MongoClient(Mongo_URL);
    await client.connect();
    console.log("MongoDB is Connected");
    return client;
}

export const client = await createConnection();

app.get("/", async function(request,response){
    response.send("Hi, Welcome to Forgot Password App...!!!")

})



app.use("/user",userRouter);





app.listen(PORT,()=>console.log(`App has Started in ${PORT}`));
