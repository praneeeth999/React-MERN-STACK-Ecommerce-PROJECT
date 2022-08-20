const Product = require("../models/Product");
const {
    verifyToken,
    verifyTokenAuthorization,
    verifyTokenAndAdmin
} = require("./verifyToken");

const router = require("express").Router();

// CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body)

    try {
        const savedProduct = await newproduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err)
    }
});



// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err)
    };
});

// DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted...")
    } catch (err) {
        res.status(500).json(err)
    }
})
// GEt Product
router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product);
        res.status(200).json("User has been deleted...")
    } catch (err) {
        res.status(500).json(err)
    }
})
// GEt All Users
router.get("/", async (req, res) => {
    const qNew = req.query.new
    const qCategory = req.query.category
    try {
        let products;
        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5)
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qcategory],
                },
            });
        } else {
            products = await Product.find();
        }
        res.status(200).json(users);
        res.status(200).json("User has been deleted...");
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router