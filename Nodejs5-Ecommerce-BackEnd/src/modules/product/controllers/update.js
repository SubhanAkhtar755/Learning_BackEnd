
import { INTERNAL_SERVER_ERROR_MESSAGE, UPDATE_DATA_MESSAGE } from "../constants/index.js";
import updateService from "../services/update.js";

const updateController = async (req, res) => {
    try {
        const {id} = req.params
        // Call the service to get user data
        const Data = await updateService(id, req.body);
        // Assuming userData is an object with user details
        res.status(200).send({ message: UPDATE_DATA_MESSAGE , data: Data });
    } catch (error) {
        res.status(500).send({ error: INTERNAL_SERVER_ERROR_MESSAGE });
    }
}

export default updateController;