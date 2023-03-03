import mongoose from "mongoose";
import "dotenv/config";
import logger from "./logger.js";
export async function connect(){
    const dbUri = process.env.DB_URI

    try {
        logger.info("Connecting to Mongo ... ")
        mongoose.set("strictQuery", true)
        await mongoose.connect(dbUri)
        logger.info("Connected to Mongo")
    }

    catch(error){
        logger.error(error.message)
        process.exit(1)
    }
}


// export default connect