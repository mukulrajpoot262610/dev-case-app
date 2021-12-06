import mongoose from 'mongoose'

const ProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    email: { type: String },
    username: { type: String, unique: true },
    name: { type: String },
    status: {
        type: String,
        enum: ['Just Joined', 'Chilling', 'Open to Work', 'Looking for Project Partener', 'Busy', 'Ghost'],
        default: 'Just Joined'
    },
    avatar: { type: String },
    location: { type: String },
    headline: { type: String },
    followers: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
            name: { type: String },
            avatar: { type: String },
            headline: { type: String },
            username: { type: String, unique: true },
        }
    ],
    following: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
            name: { type: String },
            avatar: { type: String },
            headline: { type: String },
            username: { type: String, unique: true },
        }
    ],
    workedWith: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
            name: { type: String },
            avatar: { type: String },
            headline: { type: String },
            username: { type: String, unique: true },
        }
    ],
    website: { type: String },
},
    { timestamps: true }
)

export default mongoose.models.Profile || mongoose.model('Profile', ProfileSchema)