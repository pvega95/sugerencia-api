const {Router} = require('express');
const router = Router();

const documentCtrl = require('../controllers/document.controller')
router.get('/', documentCtrl.getDocument);
router.post('/create', documentCtrl.createDocument);
router.get('/:id',documentCtrl.getDocumentbyId);
router.put('/:id',documentCtrl.updateDocument);

module.exports = router;