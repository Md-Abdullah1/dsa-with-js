import React, { useState } from 'react'

const Counter = () => {
    const [count, SetCount] = useState(0);
    const handleCount = (type = 'increase') => {
        SetCount((prev) => type == 'increase' ? prev + 1 : prev - 1)
    }
    const counts = () => {
        let vall = 0;
        const childFunc = () => {
            return vall + 1;
        }
        return childFunc;
    }
    getData((data) => console.log(data));

    const flatten = nums.reduce((newArray, prev) => {
        if (typeof prev !== Number) {
            newArray = [...newArray, ...prev];

        } else {
            newArray.push(prev);

        }
        return newArray
    })

    return (
        <div>Counter
            <h2>Count : {count}</h2>
            <div>
                <button onClick={(e) => handleCount('increase')}>
                    Increament</button>
                <button onClick={(e) => handleCount('decrease')} >Decreament</button>
            </div>
        </div>
    )
}

export default Counter