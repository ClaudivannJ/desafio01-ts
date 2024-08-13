import { DioAccount } from "./DioAccount";

export class NewTypeAccount extends DioAccount {
    
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }


    // método para depósito acrescido de 10
    deposit = (depositValue: number): void => {

        const getBalance: number = this.getBalance()

        if(this.getValidateStatus()){
          console.log('você depositou ' + depositValue + ' R$')
          this.setBalance(((depositValue += getBalance) + 10))
          
        }
      }
}