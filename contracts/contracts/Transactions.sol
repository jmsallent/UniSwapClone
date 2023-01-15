// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Transactions {
    event Transaction(
        address sender,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    function publishTransaction(
        address sender,
        address receiver,
        uint256 amount,
        string memory message,
        string memory keyword
    ) public {
        emit Transaction(
            sender,
            receiver,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }
}
