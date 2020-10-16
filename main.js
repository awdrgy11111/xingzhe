require.config({
    paths: {
      "jquery": "jquery-1.11.3",
      "jquery-cookie": "jquery.cookie",
      "shouye": "shouye"
    },
    shim: {
      "jquery-cookie": ['jquery'],
    }
  })
  
require(["shouye"], function(shouye){
  shouye.download();
  shouye.banner();
  shouye.slideshow();
  shouye.shopping();
})
