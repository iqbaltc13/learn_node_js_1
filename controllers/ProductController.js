// Import model Product
const Product = require("../models/Product.js");
const hbs = require('hbs');

//use bodyParser middleware
const bodyParser = require('body-parser');

// Get semua product
exports.getProducts = async (req, res) => {
    try {
        const results = await Product.findAll();
        //res.send(product);
        res.render('product_view',{
            results: results
        });
    } catch (err) {
        console.log(err);
    }
}

// Get product berdasarkan id
exports.getProductById = async (req, res) => {
    let id = req.params.id ? req.params.id : req.body.id;
    try {
        const product = await Product.findAll({
            where: {
                id: id
            }
        });
        res.send(product[0]);
    } catch (err) {
        console.log(err);
    }
}

// Create product baru
exports.createProduct = async (req, res) => {
    try {
        await Product.create(req.body);
        res.redirect('/');
        // res.json({
        //     "message": "Product Created"
        // });
    } catch (err) {
        console.log(err);
    }
}

// Update product berdasarkan id
exports.updateProduct = async (req, res) => {
    let id = req.params.id ? req.params.id : req.body.id;
    try {
        await Product.update(req.body, {
            where: {
                id: id
            }
        });
        res.redirect('/');
        // res.json({
        //     "message": "Product Updated"
        // });
    } catch (err) {
        console.log(err);
    }
}


// Delete product berdasarkan id
exports.deleteProduct = async (req, res) => {
    let id = req.params.id ? req.params.id : req.body.id;
    try {
        await Product.destroy({
            where: {
                id: id
            }
        });
        res.redirect('/');
        // res.json({
        //     "message": "Product Deleted"
        // });
    } catch (err) {
        console.log(err);
    }
}

//module.exports = {getProducts, getProductById , createProduct, updateProduct, deleteProduct};