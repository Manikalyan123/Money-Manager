// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transaction, onDeleteTransaction} = props
  const {id, title, amount, type} = transaction

  const onDelete = () => {
    onDeleteTransaction(amount, id)
  }
  return (
    <li className="listOrder">
      <p className="trans-paragraph-1">{title}</p>
      <p className="trans-paragraph-1">Rs {amount}</p>
      <p className="trans-paragraph-1">{type}</p>
      <div>
        <button
          // test-id="delete"
          className="delete-button"
          type="button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>

      <hr />
    </li>
  )
}
export default TransactionItem
