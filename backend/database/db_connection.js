import mongoose from "mongoose";

/**
 *  Function for connection to Atlas Database
 *
 */
export const DB_CONNECTION = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connection to database:${err} `);
    });
};
