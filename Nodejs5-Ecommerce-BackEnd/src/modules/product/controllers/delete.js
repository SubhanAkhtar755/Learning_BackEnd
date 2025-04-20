import { DELETE_DATA_MESSAGE, INTERNAL_SERVER_ERROR_MESSAGE } from "../constants/index.js";
import DeleteService from "../services/delete.js";

const deleteController = async (req, res) => {
    try {
        const { id } = req.params; // Assuming you're passing the user ID in the URL params

        // Call the service to delete user data
        // You might want to pass the ID to the service if needed
        await DeleteService(id);
        res.status(200).json({ message: DELETE_DATA_MESSAGE });
    } catch (error) {
        res.status(500).json({ error: INTERNAL_SERVER_ERROR_MESSAGE });
    }
}

export default deleteController;