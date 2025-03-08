import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const handleIncrease = () => {
        setCount((prev) => prev + 1);
    };

    const handleDecrease = () => {
        setCount((prev) => prev - 1);
    };

    const handleClear = () => {
        setCount(0)
    }

    return (
        <div>
            <p>カウント：{count}</p>
            <button onClick={handleIncrease}>増やす</button>
            <button onClick={handleDecrease}>減らす</button>
            <button onClick={handleClear}>クリア</button>
        </div>
    );
}

export default Counter