import express from 'express';
import router from './routes/index.js'
import mongoose from './db/index.js';
const app = express();

app.use(express.json());
//  check the server for root end point start or not ----------------------------------------

app.get('/',(req,res)=>{
    res.send(new Date().toString())
    
})


// mongodb connect or not check for moongoose -------------------------------------------------

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });
  
  mongoose.connection.on("open", () => {
    console.log("MongoDB connection successful");
  });



// manage routing to send the next page 

app.use('/api',router)

// listen the server ------------------------------------------------------------------------

app.listen('3000',()=>{
    console.log('server start on port 3000');
    
})