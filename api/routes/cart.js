const CryptoJS = require("crypto-js");
const Cart = require("../models/Cart");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken} = require("./verifytoken");
const router = require("express").Router();

//Create Cart
router.post("/" , verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);
  
    try {
      const savedCart = await newCart.save();
      res.status(201).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Update Cart
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.json(updatedCart)
    }catch(err){
        res.status(500).json(err)
    }
    
})

// Delete Cart
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json('Cart is successfully deleted!!')
    }catch(err){
        res.status(500).json(err)
    }
})

// Get Cart
router.get('/find/:UserID', verifyTokenAndAuthorization, async (req, res) => {
    try{
        const categories = await Cart.find({userId: req.params.userId})
        res.status(200).json(categories)
    }catch(err){
        res.status(500).json(err)
    }
})

// Get All Cart
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    
    try{
        const cart = await Cart.find()
        res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;