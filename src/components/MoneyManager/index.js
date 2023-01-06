import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import MoneyDetails from '../MoneyDetails'

import './index.css'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
const List = []
class MoneyManager extends Component {
  state = {
    TransactionsList: List,
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
    type: 'Income',
    expense: 0,
    income: 0,
  }

  onDeleteTransaction = (amount, id) => {
    const {TransactionsList} = this.state
    const onDeleteList = TransactionsList.filter(each => each.id !== id)
    this.setState({TransactionsList: onDeleteList})

    const deletedTransactionDetails = TransactionsList.filter(
      each => each.id === id,
    )
    console.log(deletedTransactionDetails[0].amount)
    if (deletedTransactionDetails[0].type === 'Income') {
      this.setState(prevState => ({
        income:
          prevState.income - parseInt(deletedTransactionDetails[0].amount),
      }))
    } else {
      this.setState(prevState => ({
        expense:
          prevState.expense - parseInt(deletedTransactionDetails[0].amount),
      }))
    }
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    if (type === 'Income') {
      this.setState(prevState => ({
        income: parseInt(prevState.income) + parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        expense: parseInt(prevState.expense) + parseInt(amount),
      }))
    }
    const newTransaction = {
      id: uuid(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      TransactionsList: [...prevState.TransactionsList, newTransaction],
      title: '',
      amount: '',
    }))
  }

  onTypeChange = event => {
    this.setState({type: event.target.value})
  }

  onTitleInput = event => {
    this.setState({title: event.target.value})
  }

  onAmountInput = event => {
    this.setState({amount: event.target.value})
  }

  onTypeInput = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {TransactionsList, title, amount, type, income, expense} = this.state

    return (
      <div className="main-cont">
        <div className="top-cont">
          <h1 className="richard-name">Hi! Richard</h1>
          <p>
            Welcome back to your <strong>Money Manager</strong>
          </p>
        </div>
        <div className="small-cont-container">
          <div id="green" className="small-cont">
            <img
              className="small-img"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
            />
            <div className="text-cont">
              <p1 test-id="balanceAmount" className="cards-passage">
                Your Balance
              </p1>
              <br />
              <p1>Rs {parseInt(income - expense)}</p1>
            </div>
          </div>

          <div id="surf" className="small-cont">
            <img
              className="small-img"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
            />
            <div className="text-cont">
              <p1 test-id="incomeAmount" className="cards-passage">
                Your Income
              </p1>
              <br />
              <p1>Rs {parseInt(income)}</p1>
            </div>
          </div>

          <div id="pink" className="small-cont">
            <img
              className="small-img"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
              alt="expenses"
            />
            <div className="text-cont">
              <p1 test-id="expensesAmount" className="cards-passage">
                Your Expenses
              </p1>
              <br />
              <p1>Rs {parseInt(expense)}</p1>
            </div>
          </div>
        </div>
        <div className="content-cont">
          <div className="details">
            <h1 className="add-trans-name">Add Transaction</h1>
            <form onSubmit={this.onAddTransaction}>
              <label htmlFor="title">TITLE</label>
              <br />
              <input
                id="title"
                className="input"
                placeholder="TITLE"
                value={title}
                onChange={this.onTitleInput}
              />
              <br />
              <label htmlFor="amount">AMOUNT</label>
              <br />
              <input
                id="amount"
                placeholder="AMOUNT"
                className="input"
                value={amount}
                onChange={this.onAmountInput}
              />
              <br />

              <label htmlFor="select" className="type-pass">
                TYPE
              </label>
              <br />
              <select
                id="select"
                value={type}
                className="select"
                onChange={this.onTypeChange}
              >
                {transactionTypeOptions.map(each => (
                  <MoneyDetails type={each} key={each.optionId} />
                ))}
              </select>
              <br />
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="transactionList">
            <h1 className="history-name">History</h1>

            <ul className="unOrderList">
              <li className="listOrder-1">
                <p className="trans-paragraph-2">Title</p>
                <p className="trans-paragraph-2">Amount</p>
                <p className="trans-paragraph-2">Type</p>
              </li>
              {TransactionsList.map(each => (
                <TransactionItem
                  transaction={each}
                  key={each.id}
                  onDeleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
