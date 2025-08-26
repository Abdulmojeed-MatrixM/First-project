// BankAccount class with transaction history
class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.transactions = [];
    }
    deposit(amount) {
        this.balance += amount;
        this.addTransaction('Deposit', amount, this.balance);
        return `$${amount} deposited. Current balance: $${this.balance}`;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            this.addTransaction('Withdraw (Failed)', amount, this.balance);
            return `Insufficient funds. Current balance: $${this.balance}`;
        } else {
            this.balance -= amount;
            this.addTransaction('Withdraw', amount, this.balance);
            return `$${amount} withdrawn. Current balance: $${this.balance}`;
        }
    }
    checkBalance() {
        this.addTransaction('Balance Checked', null, this.balance);
        return `The current account balance for ${this.accountHolder}: $${this.balance}`;
    }
    displayAccountInfo() {
        this.addTransaction('Account Info Viewed', null, this.balance);
        return `Account Number: ${this.accountNumber}, Account Holder: ${this.accountHolder}, Balance: $${this.balance}`;
    }
    addTransaction(type, amount, balance) {
        const now = new Date();
        this.transactions.unshift({
            type,
            amount,
            balance,
            date: now.toLocaleString()
        });
        // Keep only last 20 transactions
        if (this.transactions.length > 20) this.transactions.pop();
    }
}

// Create account instances
const account1 = new BankAccount(123456, "AbduLLah Abdulsalaam", 3500);
const account2 = new BankAccount(654321, "Abidah Zakariyyah");

// Get DOM elements
const accountSelect = document.getElementById('accountSelect');
const amountInput = document.getElementById('amountInput');
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');
const balanceBtn = document.getElementById('balanceBtn');
const infoBtn = document.getElementById('infoBtn');
const output = document.getElementById('output');
const transactionList = document.getElementById('transactionList');

// Helper to get selected account
function getSelectedAccount() {
    return accountSelect.value === "1" ? account1 : account2;
}

// Render transaction history
function renderTransactions(account) {
    transactionList.innerHTML = "";
    account.transactions.forEach(tx => {
        const li = document.createElement('li');
        // Assign class for color
        if (tx.type.startsWith('Deposit')) li.classList.add('deposit');
        else if (tx.type.startsWith('Withdraw')) li.classList.add('withdraw');
        else if (tx.type.startsWith('Balance')) li.classList.add('balance');
        else li.classList.add('info');
        // Transaction description
        let desc = `${tx.type}`;
        if (tx.amount !== null) desc += `: $${tx.amount}`;
        desc += ` | Balance: $${tx.balance}`;
        li.textContent = desc;
        // Date
        const dateSpan = document.createElement('span');
        dateSpan.className = "transaction-date";
        dateSpan.textContent = tx.date;
        li.appendChild(dateSpan);
        transactionList.appendChild(li);
    });
}

// Deposit event
depositBtn.addEventListener('click', () => {
    const account = getSelectedAccount();
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        output.innerText = "Please enter a valid deposit amount.";
        return;
    }
    output.innerText = account.deposit(amount);
    amountInput.value = "";
    renderTransactions(account);
});

// Withdraw event
withdrawBtn.addEventListener('click', () => {
    const account = getSelectedAccount();
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        output.innerText = "Please enter a valid withdrawal amount.";
        return;
    }
    output.innerText = account.withdraw(amount);
    amountInput.value = "";
    renderTransactions(account);
});

// Check balance event
balanceBtn.addEventListener('click', () => {
    const account = getSelectedAccount();
    output.innerText = account.checkBalance();
    renderTransactions(account);
});

// Account info event
infoBtn.addEventListener('click', () => {
    const account = getSelectedAccount();
    output.innerText = account.displayAccountInfo();
    renderTransactions(account);
});

// Update transaction list when account changes
accountSelect.addEventListener('change', () => {
    renderTransactions(getSelectedAccount());
});

// Initial render
renderTransactions(getSelectedAccount());