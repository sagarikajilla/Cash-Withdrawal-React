// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {count: 2000}

  onDecrement = value => {
    this.setState(prevState => ({count: prevState.count - value}))
  }

  render() {
    const {count} = this.state

    const {denominationsList} = this.props

    return (
      <div className="bg">
        <div className="card">
          <div className="head-cont">
            <p className="icon">S</p>
            <p className="heading">Sarah Williams</p>
          </div>
          <div className="middle-cont">
            <p className="middle-heading">Your Balance</p>
            <div>
              <p className="money">{count}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>

          <p className="with">Withdraw</p>
          <p className="desc">CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(item => (
              <DenominationItem
                details={item}
                key={item.id}
                onDecrement={this.onDecrement}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
