module.exports = {
  server: {
    name: 'findme-server',
    protocol: 'http',
    host: 'findme-server',
    port: 3000,
    limit: 100
  },
  auth: {
    encrypt_key: 'ffsp',
    expire: 7*24*60*60*1000 //7 days
  },
  database: {
    uri: 'mongodb://username:password@localhost/findme-server?authSource=admin'
  }
}
