import User from '../models/UserModel'

// @route  GET api/firebase/user
// @desc   Auth User via firebase and get Profile
// @access PUBLIC
export const regsiterUser = async (req, res) => {
    res.status(200).json(req.currentUser)
}

// @route  PUT api/profile
// @desc   Update Profile
// @access PRIVATE
export const UpdateProfile = async (req, res) => {
    if (true) {
        try {
            const profile = await User.findById(req.currentUser.id)
            profile.username = req.body.username;
            const hef = await profile.save();
            res.status(200).json(hef)
        } catch (err) {
            res.send({ err: "Server Error" })
        }
    } else {
        res.status(401).json({ errors: [{ msg: 'You are not Allowed' }] })
    }
}