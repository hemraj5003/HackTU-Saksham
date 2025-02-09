// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SakshamSecurity {

    struct User {
        address userAddress;
        bytes32 publicKeyHash;
        bool isRegistered;
        uint256 tokenBalance;
    }

    mapping(address => User) public users;

    event UserRegistered(address indexed userAddress, bytes32 publicKeyHash);
    event UserUpdated(address indexed userAddress, bytes32 newPublicKeyHash);
    event TokensRewarded(address indexed userAddress, uint256 tokens);
    event LearningTrackCompleted(address indexed userAddress, uint256 tokensRewarded);

    uint256 public tokenRewardForTrack = 100;

    function registerUser(bytes32 publicKeyHash) external {
        require(!users[msg.sender].isRegistered, "User already registered.");
        users[msg.sender] = User(msg.sender, publicKeyHash, true, 0);
        emit UserRegistered(msg.sender, publicKeyHash);
    }

    function updateUserPublicKey(bytes32 newPublicKeyHash) external {
        require(users[msg.sender].isRegistered, "User not registered.");
        users[msg.sender].publicKeyHash = newPublicKeyHash;
        emit UserUpdated(msg.sender, newPublicKeyHash);
    }

    function verifyUser(address userAddress) external view returns (bool) {
        require(users[userAddress].isRegistered, "User not registered.");
        return users[userAddress].publicKeyHash != bytes32(0);
    }

    function completeLearningTrack() external {
        require(users[msg.sender].isRegistered, "User not registered.");
        uint256 reward = tokenRewardForTrack;
        users[msg.sender].tokenBalance += reward;
        emit TokensRewarded(msg.sender, reward);
        emit LearningTrackCompleted(msg.sender, reward);
    }

    function getUserTokenBalance() external view returns (uint256) {
        return users[msg.sender].tokenBalance;
    }
}
