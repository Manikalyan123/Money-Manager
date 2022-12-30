// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {type} = props
  const {displayText} = type

  return <option>{displayText}</option>
}
export default MoneyDetails
