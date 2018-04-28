// cart-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const cart = new Schema({

    user: { type: Schema.Types.ObjectId, ref:'user' },
    items: [{
      product: { type: Schema.Types.ObjectId, ref: 'product'},
      quantity: { type: Number } 
    }],

    total: { type: Number }

  }, {
    timestamps: true
  });

  return mongooseClient.model('cart', cart);
};
