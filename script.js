const transactionsUl = document.querySelector('#transactions')
const incomeDisplay = document.querySelector("#money-plus")
const expenseDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')
const form = document.querySelector('#form')
const inputTransactionsName = document.querySelector('#text')
const inputTransactionsAmount = document.querySelector('#amount')

const localAStorageTransactions = JSON.parse(localStorage
.getItem('transactions'))

let transactions = localStorage
.getItem('transactions') !== null ? localAStorageTransactions : []

const removeTransactions = ID => {
  transactions = transactions
  .filter(transactions => transactions.id !== ID)
 uptadeLocalStorage()
  init()
  
}






const addTransactionsIntoDOM = transactions => {
    
  //Faz Verificação do valor, Se menor que zero o valor Addicionado será '-', se nao '+'
    const operator = transactions.amount < 0 ? '-' : '+'
    const CSSClass =  transactions.amount < 0 ? 'minus' : 'plus'
    const li = document.createElement('li')
    const amountWhithoutOperator = Math.abs(transactions.amount)        
    //Metodo classList - add
 li.classList.add(CSSClass)
 li.innerHTML = `
 ${transactions.name} 
 <span>${operator} R$ ${amountWhithoutOperator}</span>
 <button class="delete-btn" onClick="removeTransactions(${transactions.id})">
 x
 </button>
 `
transactionsUl.prepend(li)

};


const cleanInput = () => {
  inputTransactionsAmount.value = ''

  inputTransactionsName.value = ''

}

const getIncome = transactionsAmount => transactionsAmount
    .filter(NegativeNumber => NegativeNumber > 0)
    .reduce((accumulator, value) => accumulator + value, 0)
    .toFixed(2)

const getExpense = transactionsAmount => Math.abs(transactionsAmount
    .filter(number => number < 0)
    .reduce((accumulator, number) => accumulator + number, 0))
    .toFixed(2)

const getTotal = transactionsAmount => transactionsAmount
 //.reduce, reduz uma array de numeros, aculando seus valores em uma unica variavel    
 .reduce((accumulator, number) => accumulator + number, 0)
    .toFixed(2)

  


const updateBalanceValues = () => {
  
   //.map, recebe em seu parametro "transactions", percorrendo pela array de objetos e guardando na const 
  const transactionsAmount = transactions.map( ({amount}) => amount) //transactions.amount se refere ao objeto
   
  
  const total = getTotal(transactionsAmount)
  const income = getIncome(transactionsAmount) 
  const expense = getExpense(transactionsAmount)
  
    balanceDisplay.textContent = `R$${total}`
    incomeDisplay.textContent = `R$${income}`
    expenseDisplay.textContent = `R$${expense}`
  }


  const init = () => {
   
    transactionsUl.innerHTML = ''
    transactions.forEach(addTransactionsIntoDOM)
  updateBalanceValues()
 
  
}
init()


    

const uptadeLocalStorage = () => {
      localStorage.setItem('transactions', JSON.stringify(transactions))
    }

const generateID = () => Math.round(Math.random() * 1000)
    
const addToTransactionsArray = (transactionsName, transactionsAmount) => {
  transactions.push({
    id: generateID(), 
    name:transactionsName,
    amount: Number(transactionsAmount)
  });
}

const handleFormSubmit = event => {
  event.preventDefault()
  const transactionsName = inputTransactionsName.value.trim()
  const transactionsAmount = inputTransactionsAmount.value.trim()
  const isSomeInputEmpty = transactionsName === '' || transactionsAmount === ''
  
  
  
  if (isSomeInputEmpty) {
    alert('Por favor, Preencha os campos vazios!')
    return
  };

addToTransactionsArray(transactionsName, transactionsAmount)
init()
uptadeLocalStorage()
cleanInput()


};



form.addEventListener('submit', handleFormSubmit)

