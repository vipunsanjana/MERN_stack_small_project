const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validate = require("mongoose-validator");

// Define a phone number validator
const phoneValidator = [
    validate({
        validator: "matches",
        arguments: /^[0-9]{10}$/, // You can customize the regex as needed
        message: "Invalid phone number format, it should be 10 digits long.",
    }),
];

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true,
        validate: phoneValidator, // Apply the phone number validator
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
});

userSchema.statics.findByCredentials = async (email,password) => {
    console.log("last");
    const user = await EmployeeModel.findOne({email});

    if(!user){
        
        throw new Error();
    }

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch){

        throw new Error();
    }

    return user;

}

userSchema.pre("save",async function(next){
    const user = this;

    if(user.isModified("password")){
        user.password = await bcrypt.hash(user.password,8);
    }
    next(); 
})



const User = mongoose.model("User", userSchema);
module.exports = User;