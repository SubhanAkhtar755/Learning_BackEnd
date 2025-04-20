import { INTERNAL_SERVER_ERROR_MESSAGE, POST_DATA_MESSAGE } from "../constants/index.js";
import PostService from "../services/post.js";


const PostConrtroller = async (req, res) => {
    try {

        // Call the service to get user data
        const Data = await PostService(req.body);
        res.status(200).send({ status: 200, message: POST_DATA_MESSAGE, data: Data });
    } catch (error) {
        res.status(500).send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE , error});
    }
}

export default PostConrtroller;