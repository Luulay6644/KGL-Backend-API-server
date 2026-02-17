The prpject is Karibu-Groceries 

User Model 

models/User.js 

const mongoose = require("mongoose"); 

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },  
    email: {
        type: String,
        required: true,
        unique: true,  
    },
    role: {
        type: String,
        enum: ["Manager", "Sales Agent"], 
        required: true, 
    },  
});  

module.exports = mongoose.model("User", userSchema);