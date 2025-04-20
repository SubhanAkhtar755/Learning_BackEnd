import { updateData } from "../db/index.js";

const updateService = async (id , data) => {
    return  await updateData(id, data);
}

export default updateService;