'use strict'

require('make-promises-safe')
const {initDatabase} = require("./dal");
const Hapi = require('@hapi/hapi')
const Pino = require('hapi-pino');

async function start () {
  // Create a server with a host and port
  const server = Hapi.server({
    host: '0.0.0.0',
    port: 3000
  })

  // Add the route
  server.route({
    method: 'GET',
    path: '/',
    handler: async function (request, h) {
      // request.log is HAPI's standard way of logging
      request.log(['a', 'b'], 'Request into hello world')

      // a pino instance can also be used, which will be faster
      request.logger.info('In handler %s', request.path)

      return 'hello world'
    }
  })

  await server.register(Pino)
  await initDatabase(server.logger);

  await server.start()

  return server
}

start().catch((err) => {
  console.log(err)
  process.exit(1)
})
