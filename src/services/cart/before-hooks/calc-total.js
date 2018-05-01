
module.exports = () => (context) =>{
  const app = context.app;
  const data = context.data;
  const products = app.service('base/product');
  
  data.total = 0;

  const calcPromisse = data.items.map((item) => {
    return products
      .get(item.product)
      .then((result) => {
        data.total += (result.price * item.quantity)        
      })
    
  });
  
  return Promise
    .all(calcPromisse)
    .then((result) => {
      return context;
    }).catch((err) => {
      console.log(err);
      return context;
    });
  

  
}