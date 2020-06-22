const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    },
    lastName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 8
    }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;