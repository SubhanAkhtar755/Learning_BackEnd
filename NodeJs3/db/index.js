import mongoose from "mongoose";
import "dotenv/config";
const url2 = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@subhanclustor-shard-00-00.h4gy7.mongodb.net:27017,subhanclustor-shard-00-01.h4gy7.mongodb.net:27017,subhanclustor-shard-00-02.h4gy7.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-h0h8p9-shard-0&authSource=admin&retryWrites=true&w=majority&appName=SubhanClustor`
const url = "mongodb+srv://SubhanAkhtar:muhammadsubhan192128@subhanclustor.h4gy7.mongodb.net/?retryWrites=true&w=majority&appName=SubhanClustor";
mongoose.connect(url2);
export default mongoose;