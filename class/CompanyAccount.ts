import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
  
  // método de empréstimo
  getLoan = (LoanValue: number): void => {
    const loanValue: number = LoanValue
    const getBalance: number = this.getBalance()

    if(this.getValidateStatus()){
      console.log('Voce pegou um empréstimo de ' + loanValue + ' R$')
      this.setBalance((LoanValue  += getBalance) )
    }
  }
}