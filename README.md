# AdvancedFirewallLog

AdvancedFirewallLog is a Solidity-based smart contract designed to enhance security by tracking user access attempts, logging failed login attempts, and blocking users after multiple failures. This contract efficiently manages access logs while ensuring security and privacy by hashing IP addresses.

## Features

✅ Logs user access attempts with timestamps and status  
✅ Stores hashed IP addresses for privacy  
✅ Automatically blocks users after multiple failed attempts  
✅ Allows an admin to reset user attempts and unblock users  
✅ Supports admin changes and security policy updates  
✅ Limits the number of stored log entries to prevent excessive storage  

## How It Works

### Logging Access Attempts
- Users call `logAccess(status, ip)`, where `status` is "Granted" or "Denied".
- If denied, the failed attempt count increases.
- If failed attempts reach the limit (`maxFailedAttempts`), the user is blocked.

### Admin Controls
- `resetUserAttempts(user)`: Resets a user’s failed attempts and unblocks them.
- `changeAdmin(newAdmin)`: Transfers admin privileges to a new address.
- `setMaxFailedAttempts(newLimit)`: Updates the max failed attempt limit.

### Storage Management
- Stores a limited number of log entries (`maxLogEntries`).
- If the limit is reached, the oldest log is removed before adding a new one.

## Smart Contract Functions

| Function | Description |
|----------|-------------|
| `logAccess(string status, string ip)` | Logs a user’s access attempt with status and hashed IP. |
| `getLogs(address user)` | Retrieves the access logs of a user. |
| `resetUserAttempts(address user)` | Admin function to reset failed attempts and unblock a user. |
| `changeAdmin(address newAdmin)` | Transfers admin rights to another address. |
| `setMaxFailedAttempts(uint256 newLimit)` | Admin function to set a new max failed attempt limit. |

## Deployment
This contract can be deployed on Ethereum or Polygon networks. **Polygon** is recommended due to its lower gas fees and faster transactions.

### Deployment Steps
1. Use **Remix**, **Hardhat**, or any Solidity-compatible tool.
2. Compile the contract and deploy it using MetaMask or a compatible wallet.
3. Configure the admin privileges and set security policies.
4. Call `logAccess()` to track user attempts.
5. Use `getLogs()` to retrieve access records.

## Events

| Event | Description |
|--------|-------------|
| `AccessLogged(address user, uint256 timestamp, string status, bytes32 ipHash)` | Logs when a user attempts access. |
| `UserBlocked(address user, uint256 timestamp)` | Logs when a user is blocked. |
| `AdminChanged(address oldAdmin, address newAdmin)` | Logs when the admin is changed. |

## Usage
- Deploy the contract on Ethereum or Polygon.
- Admin sets policies using admin functions.
- Users call `logAccess()` when attempting access.
- Admins can retrieve logs, reset attempts, and update settings.

## License
This project is licensed under the MIT License.

---
### 📂 Project Structure
```
AdvancedFirewallLog/
│── contracts/
│   ├── AdvancedFirewallLog.sol   # Solidity smart contract
│
│── scripts/
│   ├── deploy.js                 # Hardhat script for deployment
│
│── test/
│   ├── AdvancedFirewallLog.test.js  # Tests using Hardhat & Chai
│
│── README.md                     # Documentation
│── package.json                   # Dependencies & scripts
│── hardhat.config.js               # Hardhat configuration
```




---
# Learning Tokens

SakshamSecurity is a Solidity smart contract for secure user registration, public key updates, and token rewards. Users register with hashed public keys and earn tokens upon completing learning tracks. The contract ensures transparency through event logging and allows users to verify their registration status. Functions include registering, updating keys, verifying users, and checking balances. This project is licensed under the MIT License.


## Contact
For any inquiries, feel free to open an issue or reach out via GitHub.


