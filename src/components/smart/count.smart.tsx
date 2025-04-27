import { useEffect, useReducer, useState } from 'react'

type State = {
  count: number;
  username : string;
}

type Action = {
  type: 'increment' | 'decrement'
}

function reducer(){
  
}

function Counter() {
  const [count , setCount] = useState(0);

  useEffect(() =>{
    console.log(`The count is ${count}`);
  }, [count])

  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={() => setCount(count + 1)}>เพิ่ม</button>
    </div>
  );
}

export default Counter;