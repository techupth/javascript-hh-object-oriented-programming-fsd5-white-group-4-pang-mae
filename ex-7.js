class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.balance = balance;
    }
    // initializes the account

    deposit(amount) {
       this.balance += amount;
       console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`)
    }
  }

  const janeAccount = new BankAccount("0987654321", "Jane Smith", 5000.00);

  janeAccount.deposit(50000);