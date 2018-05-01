module.exports = () => (context) => {
  const app = context.app;
  const carts = app.service('base/cart');
  const products = ap.service('base/cart'); 

  carts
    .get(data.cart)
    .then((cart) => {
      cart.items.map((item) => { 
        products
          .patch(item.product, {stock: (stock + item.quantity)})
      }); 
      }
    );

  return context;
}