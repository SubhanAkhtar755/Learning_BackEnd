import User from '../../models/user/index.js'

const GetDelete = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id)
        res.send({ status: 200, delete:"delete" });
    }
    catch (error) {
        res.status(500).send({ status: 500, error })
    }
}
export default GetDelete;