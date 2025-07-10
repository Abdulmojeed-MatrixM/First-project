import BankAccount from './XbankAccount.js';

// Example usage

const account1 = new BankAccount(123456, 'AbduLLAh Muhammad', 1000, 'password123');
const account2 = new BankAccount(789012, 'AbdurAbdurRahman Mahmoud', 500, 'password456');


// Authenticate user
account1.authenticate('password123'); // Successful authentication
account2.authenticate('password456'); // Successful authentication


// Deposit money
account1.deposit(1500);
account2.deposit(1000);

// Withdraw money
account1.withdraw(500);
account2.withdraw(700);


// Transfer funds
account1.transferFunds(200, account2); // Transfer $200 from account1 to account2



// Check balances
account1.checkBalance(); // Check balance of account1
account2.checkBalance(); // Check balance of account2