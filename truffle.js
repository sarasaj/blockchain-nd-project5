// Allows us to use ES6 in our migrations and tests.
require('babel-register')

// Edit truffle.config file should have settings to deploy the contract to the Rinkeby Public Network.
// Infura should be used in the truffle.config file for deployment to Rinkeby.
const HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = {
networks: {
  development: {
   host: "127.0.0.1",
   port: 9545,
   network_id: "*" // Match any network id
 },
 rinkeby: {
  provider: function() {
 return new HDWalletProvider("unveil sugar library owner faint avocado clerk off target junior used shoot", "https://rinkeby.infura.io/v3/e9d1b0f4541b415284f1e03b60a3fee7")
     },
      network_id: '4',
      gas: 4500000,
      gasPrice: 10000000000,
    }
   }
 };
// module.exports = {
//   networks: {
//     ganache: {
//       host: '127.0.0.1',
//       port: 7545,
//       network_id: '*' // Match any network id
//     }
//   }
// }


