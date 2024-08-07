import React, { Component } from 'react';
import StakingYieldFarming from './StakingAndFarming';
import GovernanceAndVoting from './Governance';

class App extends Component {
  render() {
    return (
      <div>
      <h1>Main Application</h1>
      <StakingYieldFarming />
      <GovernanceAndVoting />
    </div>
   );
  }
}

export default App;



