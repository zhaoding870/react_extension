import React from 'react';

const Demo = () => {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    
    return (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>点我+1</button>
        </div>
    );
}

export default Demo;