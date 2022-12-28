// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transaction, onDeleteTransaction} = props
  const {id, title, amount, type} = transaction

  const onDelete = () => {
    onDeleteTransaction(id)
  }
  return (
    <li className="listOrder">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
        alt="delete"
        className="delete-image"
        onClick={onDelete}
      />
      <hr />
    </li>
  )
}
export default TransactionItem
