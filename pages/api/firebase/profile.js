import nc from 'next-connect'
import firebaseAuth from '../../../middlewares/firebaseAuth';
import connectDB from '../../../config/db';

import { GetProfile } from '../../../controllers/userController'
import { UpdateProfile } from '../../../controllers/profileController'

const handler = nc();

connectDB();

handler.use(firebaseAuth).get(GetProfile)
handler.use(firebaseAuth).put(UpdateProfile)

export default handler