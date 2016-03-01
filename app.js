var fs = require('fs');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({ port: process.env.PORT || 9000 });

server.route({
    method: 'POST',
    path: '/api/{user}/{password}',
    config: {
        handler: (request, reply) => {
		    console.log(request.params);
        },
        jsonp: 'callback'
    }
});

server.start(() => { console.log("STARTED"); });
