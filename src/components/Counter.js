import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className={'text'}>
            <p>Your Counter - {count} </p>
            <button onClick={() => setCount(count + 1)}>
                Click Add
            </button>
            <button onClick={() => setCount(count - 1)}>
                Click Subtract
            </button>
            <button onClick={() => setCount(count * 2)}>
                Click Multiply
            </button>
            <button onClick={() => setCount(count / 2)}>
                Click Divide
            </button>
            <button onClick={() => setCount(0)}>
                Click Reset
            </button>
        </div>
    );
}

export default Counter