const { Router } = require('express');
const router = new Router();
const {
    getUser,
    reporteFalla
} = require('./../controllers/user.controller');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Mímico Estación Pueyrredón' });
  });
router.get('/user', getUser);
router.post('/', reporteFalla);

module.exports = router;