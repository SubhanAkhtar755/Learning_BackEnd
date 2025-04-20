import { INTERNAL_SERVER_ERROR_MESSAGE, POST_DATA_MESSAGE } from "../../../constants/index.js";
import uploadService from "../services/upload.js";


const uploadController = async (req, res) => {
    try {
        const file =await uploadService(req.file);
        console.log('req.body', req.body);
        res.status(200).send({ status: 200, message: 'file upload', url:file.url });

    } catch (error) {
        res.status(500).send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE, error });
    }
}

export default uploadController;