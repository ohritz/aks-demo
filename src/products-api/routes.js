const { getProductsByCategory, getCategories } = require("./route-handlers");

exports.routes = [
  getProductsByCategory,
  getCategories,
  {
    method: "*",
    path: "/{any*}",
    handler: function (request, h) {
      return h.response("404 Error! Page Not Found!").code(404);
    },
  },
];
