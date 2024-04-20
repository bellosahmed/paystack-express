const express = require('express');
const router = express.Router();
const initializePayment = require('../controllers/controllers');
const useWebHook = require('../controllers/webhook')


router.post('/acceptpayment', initializePayment.acceptPayment);
router.post('/webhook', useWebHook)
router.get('/verifypayment/:reference', initializePayment.verifyPayment);
router.post('/charge', initializePayment.chargeCard);

module.exports = router