import express, { urlencoded } from 'express';
import router from "./routes/index.js";
import mongoose from "./db/index.js";
const app = express();
//  app.use(cors());
app.use(express.json());

mongoose.connection.on("error", (err) => {
   console.error("MongoDB connection error:", err);
 });
 
 mongoose.connection.on("open", () => {
   console.log("MongoDB connection successful");
 });



app.get('/', (req, res) => {
   res.send(new Date().toString())
}); 
app.use("/api", router)

app.listen(3000, () => {
   console.log('Server is running on port 3000');
})