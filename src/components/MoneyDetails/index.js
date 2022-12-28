// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {type} = props
  const {optionId, displayText} = type

  return <option value={optionId}>{displayText}</option>
}
export default MoneyDetails
