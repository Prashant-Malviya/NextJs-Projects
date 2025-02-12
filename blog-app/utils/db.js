import mongoose from "mongoose";

mongoose
  .connect(process.env.DB)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

export default mongoose;
