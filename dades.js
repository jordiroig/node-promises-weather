var http = require('http');

let resolved = 0;

const doIt = function(city){
    return new Promise(function(resolve, reject){
        const callback = function(response){
            let str = '';

            response.on('data', function(chunk){
                str += chunk;
            });

            response.on('end', function(){
                let json = JSON.parse(str);

                resolve({
                    name: json.name,
                    temp: json.main.temp
                });
            });

            response.on('error', function(error){
                reject(error);
            });
        };

        var options = {
            host: 'api.openweathermap.org',
            path: '/data/2.5/weather?APPID=56113ea64fd73fb989bcfdd636c050f0&q=' + city
        };

        http.request(options, callback).end();
    });
};

module.exports = doIt;
