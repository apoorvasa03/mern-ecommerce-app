const CryptoJS = require("crypto-js");
const Product = require("../models/Product");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifytoken");
const router = require("express").Router();

//Add Product
router.post("/", async (req, res) => {
    const newProduct = new Product(req.body);
  
    try {
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Update Product
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
    
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.json(updatedProduct)
    }catch(err){
        res.status(500).json(err)
    }
    
})

// Delete Product
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json('product is successfully deleted!!')
    }catch(err){
        res.status(500).json(err)
    }
})

// Get Product
router.get('/find/:id', async (req, res) => {
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    }catch(err){
        res.status(500).json(err)
    }
})

// Get All Product
router.get('/', async (req, res) => {
        let qNew = req.query.new
        let qCategory = req.query.category
        let product;
     try{
         if(qNew){
            product = await Product.find().sort({createAt: -1}).limit(5) 
         }else if(qCategory){
            product = await Product.find({categories: {$in: [qCategory]}})
         }else{
            product = await Product.find()
         }
        res.status(200).json(product)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;