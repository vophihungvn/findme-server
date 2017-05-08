module.exports = {
  server: {
    name: 'findme-server',
    protocol: 'http',
    host: 'findme-server.vn',
    port: 4000,
    limit: 100
  },
  auth: {
    encrypt_key: 'ffst',
    expire: 7*24*60*60*1000 //7 days
  },
  database: {
    uri: 'mongodb://username:password@localhost/findme-server?authSource=admin'
  }
}
