const BOM = require('../models/bom.model');
const PURCHASE = require('../models/purchase.model');

exports.createBOM = async (req, res) => {
    try {
        const { machineName, invoiceNumber, parts } = req.body;
        const newParts = await Promise.all(parts.map(async (part) => {
            const purchaseRecord = await PURCHASE.findOne({ machinePartName: part.partName });
            if (!purchaseRecord) {
                throw new Error(`Purchase record not found for part: ${part.partName}`);
            }
            if (purchaseRecord.quantity < part.quantity) {
                throw new Error(`Not enough quantity for part: ${part.partName}`);
            }
            purchaseRecord.quantity -= part.quantity;
            await purchaseRecord.save();
            return {
                partName: purchaseRecord._id,
                quantity: part.quantity,
                invoiceAmount: purchaseRecord.invoiceAmount,
            };
        }));
        const newBOM = await BOM.create({ 
            machineName,
            invoiceNumber,
            parts: newParts,
        });
        res.status(201).json(newBOM);
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.updateBOM = async (req, res) => {
    try {
        const { id } = req.params;
        const { machineName, invoiceNumber, parts } = req.body;

        const updatedParts = await Promise.all(parts.map(async (part) => {
            const purchaseRecord = await PURCHASE.findOne({ machinePartName: part.partName });
            if (!purchaseRecord) {
                throw new Error(`Purchase record not found for part: ${part.partName}`);
            }
            if (purchaseRecord.quantity < part.quantity) {
                throw new Error(`Not enough quantity for part: ${part.partName}`);
            }
            purchaseRecord.quantity -= part.quantity;
            await purchaseRecord.save();
            return {
                partName: purchaseRecord._id,
                quantity: part.quantity,
                invoiceAmount: purchaseRecord.invoiceAmount,
            };
        }));

        const updatedBOM = await BOM.findByIdAndUpdate(
            id,
            { machineName, invoiceNumber, parts: updatedParts },
            { new: true }
        );

        if (!updatedBOM) {
            return res.status(404).json({ error: 'BOM record not found' });
        }

        res.status(200).json(updatedBOM);
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getBOM = async (req, res) => {
    try {
        const { id } = req.params;

        const bom = await BOM.findById(id).populate('parts.partName');

        if (!bom) {
            return res.status(404).json({ error: 'BOM record not found' });
        }

        res.status(200).json(bom);
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getAllBOMs = async (req, res) => {
    try {
        const boms = await BOM.find().populate('parts.partName');
        res.status(200).json(boms);
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deleteBOM = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedBOM = await BOM.findByIdAndDelete(id);

        if (!deletedBOM) {
            return res.status(404).json({ error: 'BOM record not found' });
        }

        res.status(200).json({ message: 'BOM record deleted successfully' });
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
