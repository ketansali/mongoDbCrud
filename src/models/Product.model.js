const getDb = require("../db/conn").getDb;
const mongodb = require("mongodb");
class Product {
  constructor(title, desc, price, qty,id) {
    this.title = title;
    (this.desc = desc), (this.price = price), (this.qty = qty),this._id = id ? new mongodb.ObjectId(id) : null;
  }

  save() {
    const db = getDb();
        let dbOp;
        if (this._id) {
          // Update the product
          dbOp = db
            .collection('product')
            .updateOne({ _id: this._id }, { $set: this });
        } else {
          dbOp = db.collection('product').insertOne(this);
        }
        return dbOp
          .then(result => {
            return result
          })
          .catch(err => {
            console.log(err);
          });
    // const result = db.collection("product").insertOne(this);
    // return result;
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("product")
      .find()
      .toArray()
      .then((products) => {
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static deleteById(proid) {
    const db = getDb();
    return db.collection("product")
      .deleteOne({ _id: new mongodb.ObjectId(proid) })
      .then((result) => {
        return result;
      });
  }
}

module.exports = Product;
