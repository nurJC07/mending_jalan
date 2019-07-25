var express = require('express');
var router = express.Router();
const { productController } = require('../controllers');

router.get('/getproduct', productController.getproduct);
router.get('/getproductdetail/:productId', productController.getproductdetail);
router.get('/getarticle', productController.getarticle);
router.get('/articlerecent', productController.articlerecent);
router.get('/getarticledetail/:articleId', productController.getarticledetail)


module.exports = router;