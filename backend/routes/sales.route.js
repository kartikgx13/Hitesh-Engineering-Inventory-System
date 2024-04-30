const express = require('express');
const router = express.Router();
const salesController = require('../controllers/sales.controller');

router.post('/sales', salesController.createSale);

module.exports = router;
