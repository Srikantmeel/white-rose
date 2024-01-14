
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/X0oK80BZKCUg8qYZtVp1_jYxVeMeQNPQ',
      accounts: ['2fe7a77b2debf829403cc229d07d1e52cc076dfc92aa3cb1528ced633477c67a']
    }
  }
}