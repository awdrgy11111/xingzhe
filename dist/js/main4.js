require.config({
    paths: {
      "jquery": "jquery-1.11.3",
      "jquery-cookie": "jquery.cookie",
      "shouye": "shouye",
     "productlist":"productlist",
     "register":"register"

    },
    shim: {
      "jquery-cookie": ['jquery'],
    }
  })
  
require(["shouye"], function(shouye){
  shouye.download();
  shouye.shopping();
})
require(["productlist"], function(productlist){

  productlist.banner1();
})
require(["register"], function(register){
  register.registerSend();
  })
