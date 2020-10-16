require.config({
    paths: {
      "jquery": "jquery-1.11.3",
      "jquery-cookie": "jquery.cookie",
      "shouye": "shouye",
     " product":"product",
     "productlist":"productlist"
    },
    shim: {
      "jquery-cookie": ['jquery'],
    }
  })
  
require(["shouye"], function(shouye){
  shouye.download();

})
  
require(["productlist"], function(productlist){

  productlist.banner1();
})
require(["product"], function(product){
     product.download();
     product.jia();
     product.shopping();
  })