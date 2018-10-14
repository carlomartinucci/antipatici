// @flow
import React, { Component } from 'react';
import styles from './App.module.css';

import Header from './Header';
import Main from './Main';
import generateEnemies from './utils/generateEnemies';

type State = {
  n: number,
  enemies: {}
};

class App extends Component<{}, State> {
  state = {
    n: 20,
    enemies: {}
  }
  setN = (event: SyntheticEvent<HTMLInputElement>) => this.setState({ n: parseInt(event.currentTarget.value) })
  generateEnemies = () => this.setState(state => ({ enemies: generateEnemies(state.n) }))

  render() {
    return (
      <div className={styles.container}>
        <Header setValue={this.setN} value={this.state.n} handleButtonClick={this.generateEnemies} />

        <Main enemies={this.state.enemies} />
      </div>
    );
  }
}

export default App;
