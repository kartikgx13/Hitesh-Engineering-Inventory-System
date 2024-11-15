const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
    machinePartName: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
    purchase: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PURCHASE',
    },
    date: {
        type: Date,
        default: Date.now,
    },
    buyerName: {
        type: String,
        required: true,
    },
    invoiceNumber: {
        type: String,
        required: true,
    },
    invoiceDate: {
        type: Date,
        required: true,
    },
    invoiceAmount: {
        type: Number,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    shipmentDate: {
        type: Date,
        required: true,
    },
});

const SALES = mongoose.model('SALES',salesSchema);

module.exports = SALES;