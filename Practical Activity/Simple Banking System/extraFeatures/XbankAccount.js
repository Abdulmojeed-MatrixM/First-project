class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0, password) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.password = password; // Store the password for authentication
        this.isAuthenticated = false; // To track authentication status
    }

    // Method to deposit funds
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Method to withdraw funds
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Insufficient funds or invalid amount.");
        }
    }

    // Method to check balance
    checkBalance() {
        console.log(`Current balance: $${this.balance}`);
    }

    // Method to authenticate user
    authenticate(inputPassword) {
        if (inputPassword === this.password) {
            this.isAuthenticated = true;
            console.log("Authentication successful.");
        } else {
            console.log("Authentication failed.");
        }
    }

    // Method to transfer funds to another account
    transferFunds(amount, targetAccount) {
        if (!this.isAuthenticated) {
            console.log("Please authenticate to transfer funds.");
            return;
        }

        if (amount > 0 && amount <= this.balance) {
            this.withdraw(amount); // Withdraw from the current account
            targetAccount.deposit(amount); // Deposit to the target account
            console.log(`Transferred: $${amount} to account number ${targetAccount.accountNumber}`);
        } else {
            console.log("Insufficient funds or invalid amount for transfer.");
        }
    }
}

