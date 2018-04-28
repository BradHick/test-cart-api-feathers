// sale-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const sale = new Schema({

    cart: { type: Schema.Types.ObjectId, ref:'cart' },
    paid: { type: Boolean }

  }, {
    timestamps: true
  });

  return mongooseClient.model('sale', sale);
};
