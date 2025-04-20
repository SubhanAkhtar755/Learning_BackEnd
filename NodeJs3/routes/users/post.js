import User from '../../models/user/index.js'
const postUser = (req,res)=>{
    const user = new User(req.body);
    user.save();
res.send({status:200 , body:req.body});

}
export default postUser;