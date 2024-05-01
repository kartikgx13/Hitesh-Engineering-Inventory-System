const PURCHASE = require('../models/purchase.model')

exports.createPURCHASE = async (req,res) => {
    try {
        const {machinePartName, invoiceNumber,userEmail,quantity,sellerName,invoiceDate,purchaseDate,invoiceAmount,shipmentDate} = req.body
        const newPURCHASE = await PURCHASE.create({
            machinePartName,
            invoiceNumber,
            userEmail,
            quantity,
            sellerName,
            invoiceDate,
            purchaseDate,
            invoiceAmount,
            shipmentDate
        })
        res.status(201).json(newPURCHASE);
    } catch (error) {
        console.error('Error', error)
        res.status(500).json({error: 'Internal Server Error', error})
    }
}

exports.getAllPurchases = async (req, res) => {
    try {
        const purchases = await PURCHASE.find();
        res.status(200).json(purchases);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.updatePurchase = async (req, res) => {
    try {
        const { id } = req.params; // Extract purchase ID from URL
        const {machinePartName, invoiceNumber,userEmail,quantity,sellerName,invoiceDate,purchaseDate,invoiceAmount,shipmentDate} = req.body

        // Find the purchase record by ID and update its fields
        const updatedPurchase = await PURCHASE.findByIdAndUpdate(
            id,
            {
            machinePartName,
            invoiceNumber,
            userEmail,
            quantity,
            sellerName,
            invoiceDate,
            purchaseDate,
            invoiceAmount,
            shipmentDate
            },
            { new: true } // Return the updated record
        );

        if (!updatedPurchase) {
            return res.status(404).json({ error: 'Purchase record not found' });
        }

        res.status(200).json(updatedPurchase);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deletePurchase = async (req, res) => {
    try {
        const { id } = req.params; // Extract purchase ID from URL

        // Find and delete the purchase record by ID
        const deletedPurchase = await PURCHASE.findByIdAndDelete(id);

        if (!deletedPurchase) {
            return res.status(404).json({ error: 'Purchase record not found' });
        }

        res.status(200).json({ message: 'Purchase record deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getPurchaseById = async (req, res) => {
    try {
        const { id } = req.params; // Extract purchase ID from URL
        const purchase = await PURCHASE.findById(id);

        if (!purchase) {
            return res.status(404).json({ error: 'Purchase record not found' });
        }

        res.status(200).json(purchase);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


