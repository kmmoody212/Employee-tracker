import { QueryResult } from "pg";
import { pool, connectToDb } from "./db/connection.js";
import inquirer from "inquirer";

await connectToDb();
