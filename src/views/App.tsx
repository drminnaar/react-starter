import React from 'react';
import styles from './_app-style.module.scss';

const { useState } = React;
const App: React.FC = () => {
    const [count, setCount] = useState(0);

    const addOne = () => {
        setCount(v => v + 1);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>React Starter</h1>
            <p className={styles.count}>{count}</p>
            <p
                className={styles.addCount}
                onClick={addOne}
            >
                Click here to add count!
            </p>
        </div>
    );
};

export default App;
