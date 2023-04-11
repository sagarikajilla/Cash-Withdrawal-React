// Write your code here
import './index.css'

const DenominationItem = props => {
  const {details, onDecrement} = props
  const {id, value} = details

  const onButton = () => {
    onDecrement(value)
  }

  return (
    <li className="list-cont">
      <button className="button" type="button" onClick={onButton}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
