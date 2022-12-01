// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.7.0 <0.9.0;

// import "truffle/Console.sol";
import "./Token.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenFactory is Context, Ownable {
    Token[] public TokenArray;

    function CreateNewToken(
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 initialSupply,
        uint256 cap,
        bool mintable,
        bool burnable,
        bool pausable,
        bool recoverable,
        uint8 taxFee,
        uint8 burnFee
    ) public returns (address) {
        Token token = new Token(name, symbol, decimals, initialSupply, cap, mintable, burnable, pausable, recoverable, taxFee, burnFee);
        TokenArray.push(token);
        return address(token);
    }
}
