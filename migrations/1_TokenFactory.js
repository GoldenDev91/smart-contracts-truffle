const TokenFactory = artifacts.require("TokenFactory");
const Token = artifacts.require("Token");

module.exports = function (deployer) {
  // deployer.deploy(TokenFactory);
  deployer.deploy(
    Token,
    "My Token",
    "MYT",
    18,
    "21000000000000000000000000",
    0,
    1,
    1,
    1,
    1,
    50,
    50
  );
};
