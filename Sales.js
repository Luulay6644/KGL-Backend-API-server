The project is Karibu-Groceries 

Sales Model  

models/Sales.js 

const mongoose = require("mongoose");

const SalesSchema = new mongoose.Schema({
    saleType: {
        type: String, 
        enum: ["Cash", "Credit"], 
        required: true,
    }, 
    buyerName: {
        type: String,
        required: true,
        minlength: 2,
    }, 
    amount: {
        type: Number,
        required: true, 
        min: 10000,
    }, 
    salesAgentName: {
        type: String,
        required: true,
    }, 
    produceName: String,
    produceType: String,
    tonnage: Number,
    nin: String,
    location: String,
    dueDate: Date,
    dispatchDate: Date,
    date: Date,
    time: String,
});  

module.exports = mongoose.model("Sales", "salesShema");