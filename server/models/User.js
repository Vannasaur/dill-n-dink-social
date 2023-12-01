const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [
                /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                "Please enter a valid email",
            ],
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
            validate: {
                validator: function (value) {
                    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                        value
                    );
                },
                message:
                    "Password must have at least one uppercase, one lowercase, one special character, and be at least 8 characters long",
            },
        },
        events: [
            {
                type: Schema.Types.ObjectId,
                ref: "event",
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "user",
            },
        ],
        groups: [
            {
                type: Schema.Types.ObjectId,
                ref: "group",
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// hash user password
userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// virtual property 'friendCount' that gets the amount of friends per user
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

// initialize User model
const User = model("user", userSchema);

module.exports = User;
