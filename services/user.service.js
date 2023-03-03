import UserModel from "../models/user.model.js";

export async function createUser(input){
    try{
        const user = await UserModel.create(input)
        return user.toJSON();
    }
    catch (error){
        throw new Error(error)
    }
};
export async function validatePasswords({email, password}){
    const user = await UserModel.findOne({email})
    if(!user){
        return false;
    }


    const isValid = await user.comparePasswords(password);

    if(!isValid){
        return false;
    }

    return user.toJSON()
}