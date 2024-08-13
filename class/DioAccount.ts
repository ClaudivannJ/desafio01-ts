export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  // método de depósito
  deposit = (depositValue: number): void => {
    if(this.validateStatus()){
      this.balance += depositValue
      this.setBalance(this.balance)
      console.log('você depositou ' + depositValue + ' R$')
    }
  }

  // método de retirada de dinheiro
  withdraw = (withdrawValue: number): void => {
    const WithdrawValue = withdrawValue
    const GetBalance = this.getBalance()
    if( this.validateStatus() && this.validateBalanceEnough(WithdrawValue, GetBalance)){
      this.setBalance( (this.balance - WithdrawValue) )
      console.log('você retirou ' + WithdrawValue + ' R$')
    }
  }

  // altera o valor do saldo de acordo com depósito e retirada
  setBalance = (newBalance : number): void => {
    this.balance = newBalance
  }
  
  // busca o saldo
  getBalance = (): number => {
    return this.balance
  }

  // método para alterar o status da conta
  setStatus = (Status: boolean): boolean => {
    return this.status = Status
  }

  // método para acessara validação do status de fora da class dioAccount
  getValidateStatus = () : boolean => {
    return this.validateStatus()
  }

// validar status da conta
  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
      }else{
        console.log('Conta inválida')
        return false
      }
  }
  
  // valida se saldo é suficiente para retirada
  private validateBalanceEnough = (WithdrawValue: number, GetBalance: number) : boolean => {
    if(this.balance >= WithdrawValue){
      return true
    }else{
      console.log('erro!')
      console.log('você tentou retirar ' + WithdrawValue + ' R$ mas seu saldo é de ' + GetBalance + ' R$')
      return false
    }
  }
}