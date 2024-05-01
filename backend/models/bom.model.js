const mongoose = require('mongoose');

const bomSchema = new mongoose.Schema({
    machinePartName: {
        type: String,
        required: true,
    },
    invoiceNumber: {
        type: String,
        required: true,
    },
    parts: [{
        partName: String,
        quantity: {
            type: Number,
            required: true,
            min: 1,
        },
    }],
});

const BOM = mongoose.model('BOM', bomSchema);

module.exports = BOM;
