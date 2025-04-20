import User from '../../models/user/index.js'

const GetUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndUpdate(id , req.body)
        res.send({ status: 200, update:"update" });
    }
    catch(error){
        res.status(500).send({ status: 500 ,error})
    }
}
export default GetUpdate;