import BankingAccount from "./BankingAccount";
import SavingAccount from "./SavingAccount";
import CheckingAccount from "./CheckingAccount";

let savingAccount = new SavingAccount();
let checkingAccount = new CheckingAccount();

savingAccount.deposit(1000);
let balanceSavingAccount = savingAccount.withdraw(500);
console.log(`Balance Saving Account: ${balanceSavingAccount}`);

checkingAccount.deposit(1000);
let balanceCheckingAccount = checkingAccount.withdraw(950);
console.log(`Balance Checking Account: ${balanceCheckingAccount}`);

