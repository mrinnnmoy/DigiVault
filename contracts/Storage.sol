// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract Storage {
    // Define a struct called "Access" to represent access permissions.
    struct Access {
        address user; // Address of the user.
        bool access; // Boolean indicating whether the user has access or not.
    }

    // Mapping to store a list of URLs associated with each user's address.
    mapping(address => string[]) value;

    // Mapping to store ownership permissions between addresses.
    mapping(address => mapping(address => bool)) ownership;

    // Mapping to store a list of access permissions for each user.
    mapping(address => Access[]) accessList;

    // Mapping to track previous access permissions for optimization.
    mapping(address => mapping(address => bool)) previousData;

    // Function to add a URL to a user's storage.
    function add(address _user, string memory url) external {
        value[_user].push(url);
    }

    // Function to allow another user to access your data.
    function allow(address user) external {
        ownership[msg.sender][user] = true;

        // Check if previous access data exists for optimization.
        if (previousData[msg.sender][user]) {
            for (uint i = 0; i < accessList[msg.sender].length; i++) {
                if (accessList[msg.sender][i].user == user) {
                    accessList[msg.sender][i].access = true;
                }
            }
        } else {
            // If no previous access data, add a new Access struct.
            accessList[msg.sender].push(Access(user, true));
            previousData[msg.sender][user] = true;
        }
    }

    // Function to disallow a user from accessing your data.
    function disallow(address user) public {
        ownership[msg.sender][user] = false;
        for (uint i = 0; i < accessList[msg.sender].length; i++) {
            if (accessList[msg.sender][i].user == user) {
                accessList[msg.sender][i].access = false;
            }
        }
    }

    // Function to display the URLs associated with a user's address.
    function display(address _user) external view returns (string[] memory) {
        require(
            _user == msg.sender || ownership[_user][msg.sender],
            "No Access"
        );
        return value[_user];
    }

    // Function to retrieve a list of users who have access to your data.
    function shareAccess() public view returns (Access[] memory) {
        return accessList[msg.sender];
    }
}

// Contract Deployed at: 0x8abAC03c156e47Bb11C178C15e284870a7F5c240