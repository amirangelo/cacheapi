const config = module.exports

const PRODUCTION = process.env.NODE_ENV === 'production'

config.express = {
  port: process.env.EXPRESS_PORT || 3000,
  ip: '127.0.0.1'
}

config.mongodb = {
  port: process.env.MONGODB_PORT || 27017,
  host: process.env.MONGODB_HOST || 'localhost'
}

config.app = {
  cache: {
    size: 10,
    ttl: 60
  }
}