import React, { Component } from 'react'

import FlagList from './components/FlagList'
import FlagSelect from './components/FlagSelect'

// import getWeb3 from './utils/getWeb3'
// import SimpleStorageContract from '../build/contracts/SimpleStorage.json'

class App extends Component {
  state = {
    web3: null,
    storageValue: 0,
    flagSelected: ''
  }

  removeFlag = () => {
    this.setState({ flagSelected: '' })
  }

  selectFlag = flag => {
    this.setState({ flagSelected: flag })
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.
    // getWeb3
    //   .then(results => {
    //     this.setState({
    //       web3: results.web3
    //     })
    //     // Instantiate contract once web3 provided.
    //     this.instantiateContract()
    //   })
    //   .catch(() => {
    //     console.log('Error finding web3.')
    //   })
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */
    // const contract = require('truffle-contract')
    // const simpleStorage = contract(SimpleStorageContract)
    // simpleStorage.setProvider(this.state.web3.currentProvider)
    // // Declaring this for later so we can chain functions on SimpleStorage.
    // var simpleStorageInstance
    // // Get accounts.
    // this.state.web3.eth.getAccounts((error, accounts) => {
    //   simpleStorage
    //     .deployed()
    //     .then(instance => {
    //       simpleStorageInstance = instance
    //       // Stores a given value, 5 by default.
    //       return simpleStorageInstance.set(5, { from: accounts[0] })
    //     })
    //     .then(result => {
    //       // Get the value from the contract to prove it worked.
    //       return simpleStorageInstance.get.call(accounts[0])
    //     })
    //     .then(result => {
    //       // Update state with the result.
    //       return this.setState({ storageValue: result.c[0] })
    //     })
    // })
  }

  render() {
    return (
      <div>
        <a href="https://generationblockchain.io">
          <img
            src="/logo.png"
            className="Logo"
            alt="Generation Blockchain Logo"
          />
        </a>

        <h2 className="Question">I want to bet on...</h2>

        {this.state.flagSelected ? (
          <FlagSelect selected={this.state.flagSelected} />
        ) : (
          <FlagList onSelect={this.selectFlag} />
        )}
      </div>
    )
  }
}

export default App
