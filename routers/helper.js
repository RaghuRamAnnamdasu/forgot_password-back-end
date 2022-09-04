import { client } from "../index.js";
import {ObjectId} from "mongodb";

export async function getUserByName(email) {
    return await client.db("forgotPassword").collection("users").findOne({email : email});
  }

export async function createUSer(data) {
return await client.db("forgotPassword").collection("users").insertOne(data);
}


