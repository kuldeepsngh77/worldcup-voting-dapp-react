import React from 'react'

class Header extends React.Component {
  render() {
    const { voteOpen, totalVotes, totalStake } = this.props

    return (
      <div className="Header">
        {/* Logo */}
        <a className="Logo" href="https://generationblockchain.io">
          <img
            src="/logo.png"
            className="LogoImage"
            alt="Generation Blockchain Logo"
          />
        </a>

        <div className="HeaderContent">
          {/* Status */}
          <div className="Status">
            <div className="Dot" id={`Dot${voteOpen ? 'Green' : 'Red'}`} />
            <h2 className="HeaderText">
              Voting is
              <strong>{voteOpen ? ' OPEN' : ' CLOSED'}</strong>
            </h2>
          </div>

          {/* Details */}
          <p className="HeaderText">
            Votes Received: <strong>{totalVotes || 0}</strong>
          </p>
          <p className="HeaderText">
            Total Stake: <strong>{totalStake || 0} ETH</strong>
          </p>
        </div>
      </div>
    )
  }
}

export default Header
