const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
    machinePartName: {
        type: String,
        required: true,
    },
    invoiceNumber: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
    sellerName:{
        type:String,
        required:true,
    },
    invoiceDate:{
        type:Date,
        required:true,
        default:Date.now
    },
    purchaseDate:{
        type:Date,
        required:true,
        default:Date.now
    },
    invoiceAmount:{
       type:Number,
       required:true,
       min:1,
    },
    shipmentDate:{
        type:Date,
        required:true,
        default:Date.now
    }

})

const PURCHASE = mongoose.model('PURCHASE', purchaseSchema);

module.exports = PURCHASE;