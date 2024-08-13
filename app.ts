import { CompanyAccount } from './class/CompanyAccount'
import { NewTypeAccount } from './class/NewTypeAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(200.00)
peopleAccount.withdraw(79.30)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.withdraw(20)
companyAccount.deposit(150.00)
companyAccount.withdraw(80)
companyAccount.getLoan(137.53)
console.log(companyAccount)

const newTypeAccount: NewTypeAccount = new NewTypeAccount('Claudivan', 123) //esta conta está com saldo acrescído de 10 por depósito
console.log(newTypeAccount)
newTypeAccount.withdraw(30.30)
newTypeAccount.deposit(100)
newTypeAccount.deposit(30)
newTypeAccount.withdraw(20)
console.log(newTypeAccount)

// por padrão o status da conta será true, para alterar basta instanciar assim: 
// peopleAccount.setStatus(false)
// companyAccount.setStatus(false)
// newTypeAccount.setStatus(false)