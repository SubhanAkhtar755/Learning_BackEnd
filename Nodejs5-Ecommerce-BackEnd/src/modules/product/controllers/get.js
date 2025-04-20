import { GET_DATA_MESSAGE, INTERNAL_SERVER_ERROR_MESSAGE } from "../constants/index.js";
import getService from "../services/get.js";

 
 const getController = async (req, res) => {
    try {

        // Call the service to get user data
        const Data = await getService();
        // Assuming userData is an object with user details
        res.status(200).json({ message: GET_DATA_MESSAGE , data: Data });
    } catch (error) {
        res.status(500).json({ error: INTERNAL_SERVER_ERROR_MESSAGE });
    }
}

export default getController;