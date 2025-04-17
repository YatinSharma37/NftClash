module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,       // Match Ganache port
      network_id: "*"
    }
  },
  compilers: {
    solc: {
      version: "0.8.0"  // Or match your contract's version
    }
  }
}
