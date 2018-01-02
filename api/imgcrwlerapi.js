var page = require('webpage').create(),
    server = require('webserver').create();

var service = server.listen('127.0.0.1:5001', function (request, response) {
    console.log('Request received at ' + new Date());
    var requrl = request.url.substr(14);
    
    page.open(requrl, function (status) {
        if (status !== 'success') {
            console.log('Unable to post!');
        } else {
            response.statusCode = 200;
            response.headers = {
                'Cache': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded;application/json;charset=utf-8',
                'Access-Control-Allow-Origin': 'x-requested-with'
            };
            
            var urls = page.evaluate(function(){
                var image_urls = new Array;
                var images = document.getElementsByTagName("img");                
                for( var q = 0; q < images.length; q++){
                    image_urls.push({
                        "index":q,
                        "url":images[q].src,
                        "notes":"This Image indexed at "+q
                    });
                }
                return image_urls;
            });
            result = JSON.stringify(urls);
            response.write(result);
            response.close();
        }
    });
});