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
    type: transactionTypeOptions[0].displayText,
    expense: 0,
    income: 0,
  }

  onDeleteTransaction = id => {}

  onAddTransaction = event => {
    event.preventDefault()
    const {TransactionsList, title, amount, type} = this.state

    if (type === 'Income') {
      this.setState(prevState => ({income: prevState.income + amount}))
    } else {
      this.setState(prevState => ({expense: prevState.expense + amount}))
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
      type: '',
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
          <h1>Hi! Richard</h1>
          <p>Welcome back to your Money Manager</p>
        </div>
        <div className="small-cont-container">
          <div className="small-cont">
            <img src="" alt="" />
            <div className="text-cont">
              <p1>Your balance</p1>
              <p1>{income - expense}</p1>
            </div>
          </div>

          <div className="small-cont">
            <img src="" alt="" />
            <div className="text-cont">
              <p1>Your Income</p1>
              <p1>Rs {income}</p1>
            </div>
          </div>

          <div className="small-cont">
            <img src="" alt="" />
            <div className="text-cont">
              <p1>Your Expenses</p1>
              <p1>Rs {expense}</p1>
            </div>
          </div>
        </div>
        <div className="content-cont">
          <div className="details">
            <h1>Transaction</h1>
            <form onSubmit={this.onAddTransaction}>
              <label htmlFor="title">TITLE</label>
              <input
                id="title"
                className="input"
                value={title}
                onChange={this.onTitleInput}
              />
              <br />
              <label htmlFor="amount">AMOUNT</label>
              <input
                id="amount"
                className="input"
                value={amount}
                onChange={this.onAmountInput}
              />
              <br />

              <select value={type} onChange={this.onTypeChange}>
                {transactionTypeOptions.map(each => (
                  <MoneyDetails type={each} key={each.optionId} />
                ))}
              </select>
              <br />
              <button type="submit">Add</button>
            </form>
          </div>
          <div className="transactionList">
            <h1>History</h1>
            <div className="transaction-column">
              <h1>Title</h1>
              <h1>Amount</h1>
              <h1>Type</h1>
            </div>
            <ul>
              {TransactionsList.map(each => (
                <TransactionItem transaction={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
