# SPARK+ 

### Assignment

### Bank Account Transaction Program
This program simulates a bank account transaction and calculates the final balances of the accounts involved. It is implemented in JavaScript and can be run using Node.js or the Code Runner extension in Visual Studio Code.

### Global Variables
I have defined the following global variables to store the initial balances of the bank account and customer accounts:

### bankAccount: Represents the balance of the bank's own account.
accountA, accountB, accountC: Represent the balances of my customer accounts A, B, and C, respectively.
Function: initialize()
To ensure consistent starting values, I have implemented the initialize() function. It initializes the account balances to their default values, so I can start each transaction with the same initial state. This function does not take any arguments and has no return value.

### Function: calculatePercentage(accountBalance, totalBalance)
To calculate the percentage of an account balance with respect to the total balance, I have created the calculatePercentage() function. It takes two parameters: accountBalance (the balance of the specific account) and totalBalance (the sum of all account balances). This function returns the calculated percentage as a floating-point number.

### Function: distributeHolderTaxAmount(taxAmount)
To distribute the holder tax amount among my customer accounts based on their balances, I have implemented the distributeHolderTaxAmount() function. It takes a single parameter taxAmount (the amount to be distributed). Within this function, I calculate the percentage share of each account based on the total balance and distribute the tax amount accordingly. The updated account balances are then stored in the respective global variables.

### Function: transfer(sender, receiver, amount)
For the actual bank account transaction, I have created the transfer() function. This function allows me to transfer funds between two accounts and calculates the final balances. It takes three parameters: sender (the account sending the amount), receiver (the account receiving the amount), and amount (the transaction amount). Within this function, I calculate the transaction tax, deduct the net amount from the sender's account, add the net amount to the receiver's account, add the transaction tax to the bank's account, and distribute the holder tax amount among the accounts. This function does not return any value, but it outputs the transaction details and the before/after balances of each account.

### Function: testTransfer()
To test the transfer() function with a sample transaction, I have included the testTransfer() function. It serves as a test case and showcases the functionality of the program. The testTransfer() function calls the initialize() function to reset the account balances to their default values and then calls the transfer() function with the specified sample values. I can modify or extend this function to test different scenarios as needed.

## Thanks for taking your time and forreviewing my code, Have a good day.
