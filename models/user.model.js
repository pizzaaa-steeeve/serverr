import mongoose from "mongoose";
import "dotenv/config";
import bcrypt from "bcrypt";

const userShema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type:String, required: true, unique: true},
    password: {type: String, required: true},
},
{
    timestamps: true
}
)
userShema.pre("save", async function(next){
    let user = this

    if(!user.isModified()){
        return next()
    }

    const salt = await bcrypt.genSalt(process.env.SALT_WORK_FACTOR)
    const hash = await bcrypt.hash(user.password, salt)
    user.password = hash
    next()
})
userShema.methods.comparePasswords = async function(candidatePassword){
    const user = this
    return await     bcrypt.compare(candidatePassword, user.password)
}
const UserModel = mongoose.model("User", userShema)
export default UserModel