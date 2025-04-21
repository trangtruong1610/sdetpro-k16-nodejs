import BankingAccount from "./BankingAccount.js";

export default class CheckingAccount extends BankingAccount {
    
    constructor() {
        super()
        this.minimumBalance = 50
    }

    deposit(amount: number): void {
        this.balance = this.balance + amount
    }

    withdraw(amount: number): number {
        const errorMessage = `Checking account must have minimum balance as ${this.minimumBalance}`
        return this._withdraw(amount, errorMessage)
    }
}