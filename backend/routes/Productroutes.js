const express = require("express");
const getproductcontroller = require("../controllers/products/getproductcontroller");
const { get } = require("./Productroutes");
const router = express.Router();

router.get("/", getproductcontroller);
module.exports = router;
router.get("/category/:category",getproductcontroller);
router.get("/subcategory/:subcategory",getproductcontroller);
router.get('/id/:id',getproductcontroller);
router.get("/name/:name",getproductcontroller);
router.get("/random",getproductcontroller);
router.get("/low-high",getproductcontroller);
router.get("/high-low",getproductcontroller);


