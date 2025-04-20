import { Router } from "express";
import getController from "./controllers/get.js";
import PostConrtroller from "./controllers/post.js";
import deleteController from "./controllers/delete.js";
import updateController from "./controllers/update.js";


const router = Router();


router.get('/',  getController)
router.post('/',  PostConrtroller)
router.delete('/:id',  deleteController)
router.put('/:id',  updateController)



export default router;
