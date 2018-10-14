// @flow
import * as React from 'react';
import styles from './Main.module.css';
import Person from './Person';

type Props = {
  enemies: {[id: string]: Array<string>}
};

const Main = (props: Props) =>
  <main className={styles.container}>
    {Object.entries(props.enemies).map(([id, enemies]) => {
      const castedEnemies: Array<string> = (enemies: any)
      return <Person key={id} id={id} enemies={castedEnemies}/>
    })}
  </main>

export default Main;
