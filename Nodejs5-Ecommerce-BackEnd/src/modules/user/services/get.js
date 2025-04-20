import { getData } from "../db/index.js";

const getService = async () => {
    return await getData();
}

export default getService;