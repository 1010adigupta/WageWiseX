const mongoose = require("mongoose");
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    hrname: {
        type: String,
        required: [true, "Name is required"],
    },
    hrname: {
        type: String,
        required: [true, "Name is required"],
    },
    walletAddress: {
        type: String,
        required: [true, "Please provide walletAddress"],
        unique: [true, "walletAddress must be unique"],
        
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    designation: {
        type: String,
        required: true,
    },
    companyname: {
        type: String,
        required: true,
    },
    taskid: {
        type: String,
        required: true,
    },
    payremmaining: {
        type: String,
        required: true,
    },
    workstatus: {
        type: String,
        required: true,
    },
    paymentstatus: {
        type: String,
        required: true,
    },
});

UserSchema.pre('save', async function (next) {

    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
});

UserSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
}


module.exports = mongoose.model("userModel", UserSchema)