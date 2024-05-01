const express = require('express');
const router = express.Router();

const bomController = require('../controllers/bom.controllers');

router.post('/bom', bomController.createBOM);
router.get('/bom/:id', bomController.getBOM);
router.get('/getbom', bomController.getAllBOMs);
router.put('/bom/:id', bomController.updateBOM);
router.delete('/bom/:id', bomController.deleteBOM);

module.exports = router;
