import nc from 'next-connect'
import firebaseAuth from '../../../middlewares/firebaseAuth';
import connectDB from '../../../config/db';

import { UpdateProfile } from '../../../controllers/userController'

const handler = nc();

connectDB();

handler.use(firebaseAuth).put(UpdateProfile)

export default handler