import mongoose from "mongoose";
import { ENV } from "../constants/index.js";
const url = `mongodb://${ENV.DB_USER}:${ENV.DB_PASSWORD}@subhanclustor-shard-00-00.h4gy7.mongodb.net:27017,subhanclustor-shard-00-01.h4gy7.mongodb.net:27017,subhanclustor-shard-00-02.h4gy7.mongodb.net:27017/${ENV.DB_NAME}?ssl=true&replicaSet=atlas-h0h8p9-shard-0&authSource=admin&retryWrites=true&w=majority&appName=SubhanClustor`;
mongoose.connect(url);
export default mongoose;