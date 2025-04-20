import express from 'express';
import PostUser from './post.js';
import GetUser from './get.js';
import GetDelete from './delete.js';
import GetUpdate from './update.js';
import loginUser from './login.js';
import tokenVerification from '../../config/tokenVerification.js'
const router = express.Router();


// routing handling for users only b-----------------------------------------------------

router.post('/', PostUser)
router.post('/login', loginUser)
router.get('/',tokenVerification, GetUser)
router.delete('/:id', GetDelete)
router.put('/:id', GetUpdate)





export default router;