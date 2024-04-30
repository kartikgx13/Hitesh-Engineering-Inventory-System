const SALES = require('../models/sales.model');
const PURCHASE = require('../models/purchase.model');

exports.createSale = async (req, res) => {
    try {
        const { machinePartName, quantity } = req.body;
        const purchaseRecord = await PURCHASE.findOne({ machinePartName });
        if (!purchaseRecord || purchaseRecord.quantity < quantity) {
            return res.status(400).json({ error: 'Not enough parts in stock' });
        }
        const newSale = await SALES.create({
            machinePartName,
            quantity,
        });

        purchaseRecord.quantity -= quantity;
        await purchaseRecord.save();

        res.status(201).json(newSale);
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
