import User from '../../models/user/index.js'
import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from 'jsonwebtoken';


const PostUser = async (req, res) => {
    try {
        const password = bcrypt.hashSync(req.body.password, 10);
        const user = await User.create({...req.body ,password});
            var token = jwt.sign({email:user.email}, process.env.JWT_SECRET_KEY);
        
        res.send({ status: 200, body: user , token});
    } catch (err) {
        res.status(500).send({ status:500 })
    }

}
export default PostUser;