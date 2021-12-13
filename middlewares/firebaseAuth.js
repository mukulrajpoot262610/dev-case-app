import admin from '../config/index'
import User from '../models/UserModel'

const firebaseAuth = async (req, res, next) => {
    try {
        const firebaseUser = await admin.auth().verifyIdToken(req.headers.token)
        if (!firebaseUser) {
            return res.status(400).json({ err: 'Invalid or Expired Token' })
        }
        const user = await User.findOne({ email: firebaseUser.email })

        if (user) {
            req.currentUser = user
            next()
        } else {
            let newUser = await new User({
                email: firebaseUser.email,
                name: firebaseUser.name,
            }).save();
            req.currentUser = newUser
            next()
        }

    } catch (err) {
        res.status(400).json({
            err: "MIDDLEWARE: " + err.message
        })
    }
}

module.exports = firebaseAuth