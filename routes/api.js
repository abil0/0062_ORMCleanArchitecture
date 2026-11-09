const express = require('express');
const router = express.Router();
const komikController = require('../controller/komikcontroller');

router.get('/komik', komikController.getAllKomik);
router.get('/komik/:id', komikController.getKomikById);
router.post('/komik', komikController.createKomik);
router.put('/komik/:id', komikController.updateKomik);

module.exports = router;