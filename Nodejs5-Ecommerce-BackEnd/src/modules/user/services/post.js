import { PostData } from "../db/index.js";

const PostService = async (data) => {

    return await PostData(data);;
}

export default PostService;