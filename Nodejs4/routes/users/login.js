import User from '../../models/user/index.js'
import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from 'jsonwebtoken';

const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body
        const user = await User.findOne({ email });

        if (user) {
            const checkPassword = bcrypt.compareSync(password, user.password); // true
            if (checkPassword) {
                var token = jwt.sign({email:user.email}, process.env.JWT_SECRET_KEY);

                res.status(200).send({ status: 200, body: user, message: "login successfully",token })
            }
            else {
                res.status(401).send({ status: 401, message: "incorrect password" })
            }
        }
        else {
            res.status(404).send({ status: 404, message: "user not found" })
        }

    }
    catch (error) {
        res.status(500).send({ status: 500, error, message: "password must be enter not empty" })
    }
}
export default loginUser;