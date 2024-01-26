// Imports
const express = require('express');

// Intermediate middlewares (After that router identify paths and methods, before logic)
const intermediateMiddlewares = [];

// Router instancer
module.exports = () => {
  // Instance router
  const router = express.Router();
  // General paths definition
  function general(method, path, ...middlewares) {
    const routeHandlers = middlewares.slice(0, -1); // All but the last middleware
    const finalHandler = middlewares.slice(-1)[0]; // Last middleware
    router[method](
      path,
      ...intermediateMiddlewares,
      ...routeHandlers,
      finalHandler
    );
  }

  return {
    router,
    get: (...params) => general('get', ...params),
    post: (...params) => general('post', ...params),
    put: (...params) => general('put', ...params),
    delete: (...params) => general('delete', ...params),
  };
};
