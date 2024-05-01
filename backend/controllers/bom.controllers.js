const BOM = require('../models/bom.model');
const PURCHASE = require('../models/purchase.model');

exports.createBOM = async (req, res) => {
    try {
        const { machinePartName, invoiceNumber, parts } = req.body;
        const purchaseRecord = await PURCHASE.findOne({ machinePartName, invoiceNumber });
        if (!purchaseRecord) {
            return res.status(400).json({ error: 'Purchase record not found' });
        }
        const newBOM = await BOM.create({
            machinePartName,
            invoiceNumber,
            parts,
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
        const { machinePartName, invoiceNumber, parts } = req.body;

        const updatedBOM = await BOM.findByIdAndUpdate(
            id,
            { machinePartName, invoiceNumber, parts },
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

        const bom = await BOM.findById(id);

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
        const boms = await BOM.find();
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

