const { addProduct, getAllProduct, deleteProduct, updateProduct } = require('../controller/Product.controller')

const router = require('express').Router()


router.post("/product/addProduct",addProduct)
router.get("/product/getAllProduct",getAllProduct)
router.post("/product/deleteProduct/:id",deleteProduct)
router.post("/product/updateProduct/:id",updateProduct)

module.exports = router