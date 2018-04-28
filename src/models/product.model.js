// product-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const product = new Schema({
    
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true }

  }, {
    timestamps: true
  });

  return mongooseClient.model('product', product);
};
