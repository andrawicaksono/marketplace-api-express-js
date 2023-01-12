const mongoose = require('mongoose');

const { Schema } = mongoose

const userSchema = new Schema({
    email: {
        type: String,
        unique: true
    },

    username: {
        type: String,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    full_name: {
        type: String,
        required: true
    },

    phone_number: {
        type: String
    },

    balance: {
        type: Number
    },

    type: {
        type: String,
        default: 'buyer',
        enum: {
            values: ['buyer', 'admin'],
            message: "{"
        }
    },

    created_at: {
        type: Date,
        default: Date.now
    },

    updated_at: {
        type: Date,
        default: Date.now
    },

    deleted_at: {
        type: Date,
        default: null
    }
});

module.exports.User = mongoose.model('user', userSchema);