var express = require('express');
const router = express.Router();
const CategoryModel = require('../models/CategoryModel');

router.get('/', async (req, res) =>{
    let categoryList = await CategoryModel.find({});
    console.log(categoryList);
    res.render('admin/category/index', {categoryList});
})





module.exports = router;