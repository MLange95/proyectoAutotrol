const { Router } = require('express');
const router = new Router();
const {
    getContact,
    reporteFalla
} = require('./../controllers/contact.controller');


router.get('/', getContact);
router.post('/', reporteFalla);

module.exports = router;