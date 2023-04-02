// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract smartTrans is ERC20 {
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "");
        _;
    }

    constructor() ERC20("SmartTrans", "SMT") {
        owner = msg.sender;
    }

    function buy(uint256 amount) public payable {
        _mint(msg.sender, amount);
        payable(owner).transfer(msg.value);
    }

    function use(address user) public onlyOwner {
        require(balanceOf(user) >= 1, "Saldo insuficiente");
        burn(user, 1);
    }

    function burn(address user, uint256 amount) public onlyOwner {
        _burn(user, amount);
    }
}
