// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract AdvancedFirewallLog {
    address public admin;
    uint256 public maxFailedAttempts = 3;
    uint256 public maxLogEntries = 10; 
    
    struct LogEntry {
        uint256 timestamp;
        string status;
        bytes32 ipHash;
    }

    struct UserAccess {
        uint256 failedAttempts;
        bool isBlocked;
    }

    mapping(address => LogEntry[]) private logs;
    mapping(address => UserAccess) public userAccess;
    
    event AccessLogged(address indexed user, uint256 timestamp, string status, bytes32 ipHash);
    event UserBlocked(address indexed user, uint256 timestamp);
    event AdminChanged(address indexed oldAdmin, address indexed newAdmin);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized");
        _;
    }

    constructor() {
        admin = msg.sender;  
    }

    function logAccess(string memory status, string memory ip) public {
        require(bytes(status).length <= 20, "Status too long");
        require(!userAccess[msg.sender].isBlocked, "User is blocked");

        bytes32 ipHash = keccak256(abi.encodePacked(ip)); 

        
        if (logs[msg.sender].length >= maxLogEntries) {
            delete logs[msg.sender][0]; 
            for (uint i = 1; i < logs[msg.sender].length; i++) {
                logs[msg.sender][i - 1] = logs[msg.sender][i];
            }
            logs[msg.sender].pop(); 
        }

        logs[msg.sender].push(LogEntry(block.timestamp, status, ipHash));
        emit AccessLogged(msg.sender, block.timestamp, status, ipHash);

        if (keccak256(abi.encodePacked(status)) == keccak256(abi.encodePacked("Denied"))) {
            userAccess[msg.sender].failedAttempts++;

            if (userAccess[msg.sender].failedAttempts >= maxFailedAttempts) {
                userAccess[msg.sender].isBlocked = true;
                emit UserBlocked(msg.sender, block.timestamp);
            }
        }
    }

    function getLogs(address user) public view returns (LogEntry[] memory) {
        return logs[user];
    }

    function resetUserAttempts(address user) public onlyAdmin {
        userAccess[user].failedAttempts = 0;
        userAccess[user].isBlocked = false;
    }

    function changeAdmin(address newAdmin) public onlyAdmin {
        require(newAdmin != address(0), "Invalid admin address");
        emit AdminChanged(admin, newAdmin);
        admin = newAdmin;
    }

    function setMaxFailedAttempts(uint256 newLimit) public onlyAdmin {
        require(newLimit > 0, "Limit must be greater than 0");
        maxFailedAttempts = newLimit;
    }
}
