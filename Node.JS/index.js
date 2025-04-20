import express from 'express';
// import joi from 'joi'           alag file ma la gy es ko ;
import { userSchema } from './schema/index.js'
//  import cors from 'cors';
const app = express();
//  app.use(cors());
app.use(express.json());
app.use('/',(req,res , next)=>{
   console.log('middle ware');
   next();
   
})
// aik array bnai or post ki request es ma push kr diiii----------------------
let users = [];
//  ya hmara root page means first page hotaa haa -----------------------
app.get('/', (req, res) => {
   res.send(new Date().toString())
})
// second page get ki request---------------------------------------------------
app.get('/user', (req, res) => {
   res.send(users)
})
// post ki request---------------------------------------------
app.post('/post', async (req, res) => {

   try {
      console.log(req.body);
      
      await userSchema.validateAsync(req.body)
      users.push({ ...req.body, id: Date.now().toString(36) });
      res.status(201).send({ status: 201, "status": "success" })
   }
   catch(err){
      res.status(400).send({ error:err.details || "went wrong" ,status: 400})
   }

})
// delete ki request---------------------------------------------
app.delete('/delete/:id', (req, res) => {
   const { id } = req.params;
   users = users.filter(obj => obj.id !== id)
   res.send({ "status": "success" })
})
// put ki request---------------------------------------------
app.put('/update/:id', (req, res) => {
   const { id } = req.params;
   const index = users.findIndex(obj => obj.id === id)
   users.splice(index, 1, { ...req.body, id })
   res.send({ "status": "success" })
})
app.listen(3000, () => {
   console.log('Server is running on port 3000');
})