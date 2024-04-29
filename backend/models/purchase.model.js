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
})

const PURCHASE = mongoose.model('PURCHASE', purchaseSchema);

module.exports = PURCHASE;