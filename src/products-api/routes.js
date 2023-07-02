const { getProductsByCategory } = require('./route-handlers');

exports.routes = [
    {
        method: 'GET',
        path: '/products',
        handler: getProductsByCategory
    },
    {
        method: '*',
        path: '/{any*}',
        handler: function (request, h) {
            return h.response('404 Error! Page Not Found!').code(404);
        }
    }
]
