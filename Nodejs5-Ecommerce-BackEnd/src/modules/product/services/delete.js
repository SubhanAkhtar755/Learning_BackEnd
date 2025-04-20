import { deleteData } from "../db/index.js";

const DeleteService = async (id) => {
    // Logic for delete service will go here
    // For example, you might want to call a delete function from the database layer
   return await deleteData(id);
 
}

export default DeleteService;