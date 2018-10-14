// @flow
import * as React from 'react';
import styles from './Header.module.css';

type Props = {
  setValue: (event: SyntheticEvent<HTMLInputElement>) => void,
  handleButtonClick: () => void,
  value: ?number
};

const Header = (props: Props) =>
  <header className={styles.container}>
    <h2 className={styles.title}>
      Quanti siete?
    </h2>

    <input type='number' min='0' max='100' step='1' value={props.value} onChange={props.setValue} />

    <button onClick={props.handleButtonClick}>
      Conferma
    </button>
  </header>

export default Header;
