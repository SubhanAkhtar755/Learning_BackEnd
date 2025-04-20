import { Router } from "express";
import uploadController from "./controllers/upload.js";

import multer from "multer";
const router = Router();
const dir = 'src/modules/upload/uploads/'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('file', file);
        
      cb(null, dir)
    },
    filename: function (req, file, cb) {
      const uniqueID = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,  `${uniqueID}-${file.originalname}`)
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/',upload.single('file'), uploadController)

export default router;