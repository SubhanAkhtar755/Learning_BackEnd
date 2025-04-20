import jwt from 'jsonwebtoken';
import "dotenv/config";



const tokenVerification = (req,res,next) => {
    try{
        if(req.headers?.authorization){
            const AuthorizationToken = req.headers.authorization.split(" ")[1]
            var decoded = jwt.verify(AuthorizationToken, process.env.JWT_SECRET_KEY);
            if(decoded){
                next()
            }
        else{
            res.status(403).send({status:403,message:"token unauthorized"})
        }
           }
           else{
            res.status(403).send({status:403,message:"token not provided"})
           }
     }
     catch(err){
        res.status(403).send({status:403,err})
    
     }
}
 

export default tokenVerification