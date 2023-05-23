// Global variables
let bankAccount = 40000;
let accountA = 10000;
let accountB = 2000;
let accountC = 2000;

// Function to calculate the percentage of an account with respect to the total balance
function calculatePercentage(accountBalance, totalBalance) {
  return (accountBalance / totalBalance) * 100;
}

// Function to distribute the holder tax amount among the accounts
function distributeHolderTaxAmount(taxAmount) {
  const totalBalance = bankAccount + accountA + accountB + accountC;
  
  // Calculate the percentage of each account with respect to the total balance
  const percentageA = calculatePercentage(accountA, totalBalance);
  const percentageB = calculatePercentage(accountB, totalBalance);
  const percentageC = calculatePercentage(accountC, totalBalance);
  
  // Distribute the holder tax amount to each account
  const taxAmountA = (percentageA / 100) * taxAmount;
  const taxAmountB = (percentageB / 100) * taxAmount;
  const taxAmountC = (percentageC / 100) * taxAmount;
  
  // Update the account balances
  accountA += taxAmountA;
  accountB += taxAmountB;
  accountC += taxAmountC;
}

// Perform the transaction
function performTransaction(sender, receiver, amount) {
  const tax = amount * 0.02; // Calculate the transaction tax
  const netAmount = amount - tax; // Calculate the net amount after tax
  
  // Deduct the net amount from the sender's account
  if (sender === 'A') {
    accountA -= netAmount;
  } else if (sender === 'B') {
    accountB -= netAmount;
  } else if (sender === 'C') {
    accountC -= netAmount;
  }
  
  // Add the net amount to the receiver's account
  if (receiver === 'A') {
    accountA += netAmount;
  } else if (receiver === 'B') {
    accountB += netAmount;
  } else if (receiver === 'C') {
    accountC += netAmount;
  }
  
  // Add the transaction tax to the bank's account
  bankAccount += tax;
  
  // Distribute the holder tax amount among the accounts
  distributeHolderTaxAmount(netAmount * 0.6);
}

// Perform the transaction from A to B with an amount of $1000
performTransaction('A', 'B', 1000);

// Display the updated account balances
console.log("Account A balance: $" + accountA.toFixed(2));
console.log("Account B balance: $" + accountB.toFixed(2));
console.log("Account C balance: $" + accountC.toFixed(2));
console.log("Bank account balance: $" + bankAccount.toFixed(2));
