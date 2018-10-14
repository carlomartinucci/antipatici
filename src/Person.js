// @flow
import * as React from 'react';
import styles from './Person.module.css';

type Props = {
  id: string,
  enemies: Array<string>
};

const Person = (props: Props) =>
  <div className={styles.container}>
    <div className={styles.id}>{props.id}</div>
    <div className={styles.enemies}>
      {props.enemies.map(id => <div key={id} className={styles.enemyId}>{id}</div>)}
    </div>
  </div>

export default Person;
