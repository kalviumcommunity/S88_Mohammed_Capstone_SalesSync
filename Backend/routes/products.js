const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

router.post('/', createProduct);          // Create a new product
router.get('/', getProducts);            // Get all products
router.put('/:id', updateProduct);       // Update a product by ID
router.delete('/:id', deleteProduct);    // Delete a product by ID

module.exports = router;
