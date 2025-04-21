
export default abstract class BankingAccount {
    protected balance: number = 0;
    protected minimumBalance: number = 0;

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): number;
    
    getBalance(): number {
        return this.balance;
    }

    protected _withdraw(amount: number, errorMessage: string): number {
        let draftBlance = this.balance - amount;
        if (draftBlance < this.minimumBalance) {
            throw new Error(errorMessage);
        }
        return this.balance = draftBlance;
    }
}