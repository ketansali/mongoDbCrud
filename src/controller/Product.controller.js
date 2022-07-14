const Product = require("../models/Product.model");

exports.addProduct = (req, res) => {
  const { title, desc, price, qty } = req.body;

  const product = new Product(title, desc, price, qty);
  product
    .save()
    .then((result) => {
      return res.status(201).json(result);
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
};
exports.getAllProduct = (req, res) => {
  Product.fetchAll()
    .then((products) => {
      return res.status(200).json(products);
    })
    .catch((err) => console.log(err));
};
exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Product.deleteById(id)
    .then(() => {
      return res.status(200).json("Product Deleted");
    })
    .catch((err) => console.log(err));
};

exports.updateProduct = (req, res) => {
    const { title, desc, price, qty } = req.body;
    const id = req.params.id
    const product = new Product(title, desc, price, qty,id);
    product
      .save()
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  };


