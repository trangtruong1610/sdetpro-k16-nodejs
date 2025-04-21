import BankingAccount from "./BankingAccount";

export default class SavingAccount extends BankingAccount {
    deposit(amount: number): void {
        this.balance = this.balance + amount
    }

    withdraw(amount: number): number {
        const errorMessage = `Saving account must have minimum balance as ${this.minimumBalance}`
        return this._withdraw(amount, errorMessage)
    }
}