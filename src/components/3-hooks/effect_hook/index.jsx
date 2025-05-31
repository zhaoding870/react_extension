import React from "react";
import ReactDOM from "react-dom";

const Demo = () => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }
        , 1000);
        // 清除定时器
        return () => {
            clearInterval(timer);
        };
    }, [count]); // 空依赖数组表示只在组件挂载时执行一次

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const removeComponent = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>点我+1</button>
            <button onClick={removeComponent}>卸载组件</button>
        </div>
    );
}

export default Demo;
// 这个组件使用了 useEffect Hook 来设置一个定时器，每秒钟更新一次计数器的值。
// 当组件挂载时，定时器开始工作；当组件卸载时，定时器会自动清除。
// 通过 useEffect 的第二个参数传入一个空数组，确保定时器只在组件挂载时设置一次。
// 这样可以避免在每次渲染时都创建新的定时器，导致内存泄漏或性能问题。