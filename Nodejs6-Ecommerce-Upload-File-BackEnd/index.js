import express from 'express';
import helmet from 'helmet';
import routes from './src/routes/index.js';
import mongoose from './src/db/index.js';
import chalk from 'chalk';
const app = express();


//  middleware for data parsing ----------------------------------------
app.use(express.json());



// use for browser history security ----------------------------------------
app.use(helmet());



//  check the server for root end point start or not ----------------------------------------
app.get('/',(req,res)=>{
    res.send(new Date().toString())
    
})


// mongodb connect or not check for moongoose -------------------------------------------------

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });
  
  mongoose.connection.on("open", () => {
    console.log(chalk.magentaBright.bgWhite("----------MongoDB connection successful----------"));
  });



// manage routing to send the next page 

app.use('/api', routes)


// listen the server ------------------------------------------------------------------------

app.listen('3000',()=>{
    console.log('server start on port 3000');
    
})