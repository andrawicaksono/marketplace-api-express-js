const mongoose = require('mongoose');
const crypto = require('crypto')

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

    hash: {
        type: String
    },

    salt: {
        type: String
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
            message: "{VALUE} is not supported"
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

const keyLength = 512;
const iterations = 10000;
const digest = "sha512";
const encoding = "hex";

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, iterations, keyLength, digest)
        .toString(encoding);
};

userSchema.methods.validatePassword = function (password) {
    const hash = crypto
        .pbkdf2Sync(password, this.salt, iterations, keyLength, digest)
        .toString(encoding);
    return this.hash === hash;
};

module.exports.User = mongoose.model('user', userSchema);