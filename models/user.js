import { Schema, model, models } from "mongoose";


const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required']
    },
    username: {
        type: String,
        required: [true, 'username is required'],
        match: [
            /^(?=.{8,150}$)(?![_.])(?!.*[_.]{2})[а-яА-Яa-zA-Z0-9._]+(?<![_.])$/,
            'Username invalid, it should contain 8-20 alphanumeric letters and be unique!'
          ]
    },
    image:{
        type:String
    }
})

const User = models.User || model("User", UserSchema);
export default User;