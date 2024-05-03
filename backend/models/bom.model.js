const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bomSchema = new mongoose.Schema({
    machineName: {  
        type: String,
        required: true,
    },
    invoiceNumber: {
        type: String,
        required: true,
    },
    parts: [{
        partName: { type: Schema.Types.ObjectId, ref: 'PURCHASE' },  // reference to PURCHASE model
        quantity: { type: Number, required: true, min: 1 },
        invoiceAmount: { type: Number, required: true, min: 0 },
    }],
});

const BOM = mongoose.model('BOM', bomSchema);

module.exports = BOM;