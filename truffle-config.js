const mnemonic = process.env.MNEMONIC;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    dashboard: {},
    ropsten: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          "https://ropsten.infura.io/v3/YOUR-PROJECT-ID"
        );
      },
      network_id: "3",
    },
    bsc_testnet: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          "https://data-seed-prebsc-1-s1.binance.org:8545"
        );
      },
      network_id: "97",
    },
    bsc_mainnet: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          "https://bsc-dataseed.binance.org/"
        );
      },
      network_id: "56",
    },
    goerli: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
          // "https://eth-goerli.g.alchemy.com/v2/demo",
          // "https://eth-goerli.public.blastapi.io",
          // "https://rpc.ankr.com/eth_goerli",
          // "https://rpc.goerli.mudit.blog",
        );
      },
      network_id: "5",
    },
  },
  compilers: {
    solc: {
      // version: "0.5.16",
      // version: "0.7.0",
      // version: "0.7.3",
      // version: "0.8.7",
      // version: "0.8.9",
      version: "0.8.13",
      // settings: {
      //   optimizer: {
      //     enabled: true,
      //     runs: 200,
      //   },
      //   viaIR: true,
      // },
    },
  },
  db: {
    enabled: false,
    host: "127.0.0.1",
  },
};
