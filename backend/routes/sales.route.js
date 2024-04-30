const express = require('express');
const router = express.Router();
const salesController = require('../controllers/sales.controllers.js');

router.post('/sales', salesController.createSale);
router.get('/getsales', salesController.getAllSales);
router.put('/sales/:id', salesController.updateSale);
router.delete('/sales/:id', salesController.deleteSale);

module.exports = router;
