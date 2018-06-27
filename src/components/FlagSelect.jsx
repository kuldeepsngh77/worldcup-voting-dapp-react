import React, { Component } from 'react'
import Overdrive from 'react-overdrive'

import Remove from 'react-icons/lib/io/ios-close-outline'
import Success from 'react-icons/lib/io/ios-checkmark-outline'

class FlagSelect extends Component {
  state = {
    amount: 0.000001
  }

  changeAmount = event => {
    const amount = event.target.value
    if (Number(amount) && amount.length < 10) this.setState({ amount })
  }

  render() {
    return (
      <div className="FlagSelect">
        <Overdrive id="remove">
          <Remove
            onClick={this.props.onRemove}
            className="FlagSelectIcon FlagSelectIconClose"
          />
        </Overdrive>
        <Overdrive id="remove">
          <Success className="FlagSelectIcon FlagSelectIconCheck" />
        </Overdrive>

        <div className="FlagSelectItem">
          <Overdrive id={this.props.selected.code}>
            <span
              className="FlagSelectImage"
              style={{
                backgroundImage: `url(${require(`../../node_modules/flag-icon-css/flags/4x3/${
                  this.props.selected.code
                }.svg`)})`
              }}
            />
          </Overdrive>
          <div className="FlagSelectTitle">{this.props.selected.country}</div>
        </div>
        <div className="FlagSelectAmount">
          <div className="FlagSelectDisplay">
            <input
              type="text"
              value={this.state.amount}
              className="FlagAmountTitle"
              onChange={this.changeAmount}
            />
            <input
              disabled
              type="text"
              value=" BTC"
              className="FlagAmountTitle"
              style={{ textAlign: 'left', width: '123px' }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default FlagSelect
