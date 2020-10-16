require.config({
    paths: {
      "jquery": "jquery-1.11.3",
      "jquery-cookie": "jquery.cookie",
      "shouye": "shouye",
     " shoppingcart":"shoppingcart",
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
require(["shoppingcart"], function(shoppingcart){
    shoppingcart.download();
    shoppingcart.check();
    shoppingcart.checkcart();
  })