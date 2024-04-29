const express = require('express')
const router = express.Router();
const purchaseController = require('../controllers/purchase.controllers')

router.get('/getpurchases', purchaseController.getAllPurchases);

router.post('/purchases', purchaseController.createPURCHASE);

router.put('/purchases/:id', purchaseController.updatePurchase);

router.delete('/purchases/:id', purchaseController.deletePurchase);

module.exports = router;