// Import express
const express = require('express');
// Import Controller Product
const ProductController = require("../controllers/ProductController.js");

// import { 
//     getProducts,
//     getProductById,
//     createProduct,
//     updateProduct,
//     deleteProduct
//  } from "../controllers/ProductController.js";

 // Init express router
const router = express.Router();

// Route get semua product
router.get('/', ProductController.getProducts);
// Route get product by id
router.get('/select/:id', ProductController.getProductById);
// Route create product baru
router.post('/save', ProductController.createProduct);
// Route update product by id
router.put('/update/:id', ProductController.updateProduct);
router.post('/update/:id', ProductController.updateProduct);
// Route delete product by id
router.delete('/delete/:id', ProductController.deleteProduct);
router.post('/delete/:id', ProductController.deleteProduct);

// export router
module.exports = router;