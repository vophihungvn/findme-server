module.exports = {
  server: {
    name: 'findme-server',
    protocol: 'http',
    host: 'localhost',
    port: 3000,
    limit: 100
  },
  auth: {
    encrypt_key: 'ffsd',
    expire: 7*24*60*60*1000 //7 days
  },
  database: {
    uri: 'mongodb://localhost/findme-server-dev'
  }
}
