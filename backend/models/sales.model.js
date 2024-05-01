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
});

const SALES = mongoose.model('SALES',salesSchema);

module.exports = SALES;


// const mongoose = require('mongoose');

// const salesSchema = new mongoose.Schema({
//     machinePartName: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'PURCHASE',
//         required: true,
//     },
//     quantity: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'PURCHASE',
//         required: true,
//         min: 1,
//     },
//     date: {
//         type: Date,
//         default: Date.now,
//     },
// });

// const SALES = mongoose.model('SALES', salesSchema);

// module.exports = SALES;
