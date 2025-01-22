const readline = require('readline-sync');
const {getUserNumber} = require("../../utils/UtilMethods");


/**
 * . Write a console interface app to:
 *
 * allow user to find account by using accountNumber, if the account is existing, print the name and balance info out (NOT all the object)
 * allow user to withdraw the money and avoid user to take more than current balance
 * Note: Strongly recommend to create functions to process each tasks
 * === Banking application===
 * 1. Find an account
 * 2. Update balance
 * 0. Exit the program
 */

// DB
const account1 = {
    accountName: 'Teo',
    accountNumber: '1234',
    routingNumber: '123',
    balance: 20000
};

const account2 = JSON.parse(JSON.stringify(account1));
account2.accountName = 'Ti';
account2.accountNumber = '4321';

const accounts = [account1, account2];

// Program interface
bankApp();

// Support functions
function bankApp() {
    let isInteracting = true;
    while (isInteracting) {
        printTheAppMenu();
        const userOption = getUserNumber();

        switch (userOption) {
            case 1:
                const foundAccount = findAccount();
                if (foundAccount.accountNumber) {
                    const {accountName, balance} = foundAccount;
                    console.log(`Account Name: ${accountName}, Balance: ${balance}`);
                } else {
                    console.log('Account Not Found');
                }
                break;
            case 2:
                updateBalance();
                break;
            case 0:
                isInteracting = false;
                break;
            default:
                console.log('Wrong Option !! \n');
        }
    }
}

function printTheAppMenu() {
    console.log('=== Banking application===\n ' +
        '1. Find an account\n ' +
        '2. Update balance\n ' +
        '0. Exit the program');
}

function updateBalance() {
    const MAX_ALLOWED_ATTEMPT = 3;
    let attempts = 0;

    do {
        const foundAccount = findAccount();
        const isNotFound = foundAccount.accountNumber === undefined;
        if (isNotFound) {
            console.log(`Attempt time : ${attempts + 1}`);
            attempts++;
        } else {
            const {balance} = foundAccount;
            console.log(`Your balance is : ${balance}`);
            const expectedWithdrawMoney = Number(readline.question("Please input the withdraw amount: "));
            let isValidAmount = expectedWithdrawMoney <= balance;
            if (!isValidAmount) {
                console.log('Insufficient balance');
            } else {
                console.log('Success');
                foundAccount.balance = balance - expectedWithdrawMoney;
                console.log(`Your new balance is : ${foundAccount.balance}`);

                attempts = MAX_ALLOWED_ATTEMPT;
            }
        }
    } while (attempts < MAX_ALLOWED_ATTEMPT);
}

function findAccount() {
    let foundAccount = {};
    const inputAccount = readline.question('Please input a account number:  ');
    for (const account of accounts) {
        if (account.accountNumber === inputAccount) {
            foundAccount = account;
            break;
        }
    }
    // if account found, reassign foundAccount for the found one
    return foundAccount;
}

console.log('See you next time');