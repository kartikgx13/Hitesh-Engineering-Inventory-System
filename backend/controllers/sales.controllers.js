const SALES = require('../models/sales.model');
const PURCHASE = require('../models/purchase.model');

exports.createSale = async (req, res) => {
    try {
        const { machinePartName, quantity, buyerName, invoiceNumber, invoiceDate, invoiceAmount, userEmail, shipmentDate } = req.body;
        const purchaseRecord = await PURCHASE.findOne({ machinePartName });
        if (!purchaseRecord && purchaseRecord.quantity < quantity) {
            return res.status(400).json({ error: 'Not enough parts in stock' });
        }
        const newSale = await SALES.create({
            machinePartName,
            quantity,
            buyerName,
            invoiceNumber,
            invoiceDate,
            invoiceAmount,
            userEmail,
            shipmentDate,
        });

        purchaseRecord.quantity -= quantity;
        await purchaseRecord.save();

        res.status(201).json(newSale);
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getAllSales = async (req, res) => {
    try {
        const sales = await SALES.find();
        res.status(200).json(sales);
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.updateSale = async (req, res) => {
    try {
        const { id } = req.params;
        const { machinePartName, quantity, buyerName, invoiceNumber, invoiceDate, invoiceAmount, userEmail, shipmentDate } = req.body;

        // Check if there is enough quantity in stock
        const purchaseRecord = await PURCHASE.findOne({ machinePartName });
        if (!purchaseRecord || purchaseRecord.quantity < quantity) {
            return res.status(400).json({ error: 'Not enough parts in stock' });
        }

        const updatedSale = await SALES.findByIdAndUpdate(
            id,
            { machinePartName, quantity, buyerName, invoiceNumber, invoiceDate, invoiceAmount, userEmail, shipmentDate },
            { new: true }
        );

        if (!updatedSale) {
            return res.status(404).json({ error: 'Sale record not found' });
        }

        res.status(200).json(updatedSale);
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deleteSale = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedSale = await SALES.findByIdAndDelete(id);

        if (!deletedSale) {
            return res.status(404).json({ error: 'Sale record not found' });
        }

        res.status(200).json({ message: 'Sale record deleted successfully' });
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
