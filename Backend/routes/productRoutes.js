const express = require('express');
const router = express.Router();

const {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/productController');

// GET all products
router.get('/', getProducts);

// POST a new product
router.post('/', createProduct);

// DELETE a product
router.delete('/:id', deleteProduct);

// PUT update a product
router.put('/:id', updateProduct);

module.exports = router;
