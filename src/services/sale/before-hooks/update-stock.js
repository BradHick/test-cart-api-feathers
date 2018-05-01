module.exports = () => (context) => {
  const app = context.app;
  const data = context.data;
  const products = app.service('base/product');
  const carts = app.service('base/cart');
  
  const updateStockPromisse = carts
    .get(data.cart)
    .then((result) => {
      result.items.map((item) => { 
        return products
          .get(item.product)
          .then((res) => {
            console.log(res);
            res.stock -= item.quantity;
            products.update(item.product, res);
          });
      });
    });
  
  return Promise
    .all(updateStockPromisse)
    .then((result) => {
      return context;
    }).catch((err) => console.log(err));




}