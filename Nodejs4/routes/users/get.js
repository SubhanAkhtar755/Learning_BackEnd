import User from '../../models/user/index.js'

const GetUser = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).send({ status: 200, body: user })
    }
    catch(error){
        res.status(500).send({ status: 500 ,error})
    }
}
export default GetUser;