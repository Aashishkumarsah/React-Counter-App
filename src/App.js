import { useState } from 'react';
import './App.css';

const AddButton = ({count, setCount}) => {

  const onIncrementClick = () => {
    setCount (count + 1);
  }

  return (
    <button onClick={onIncrementClick}>Increment</button>
  )
}

const DecrementButton = ({ count, setCount }) => {

   const onDecrementClick = () => {
    setCount (count - 1);
  }

  return (
    <button onClick={ onDecrementClick }>Decrement</button>
  )
}

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{count}</h1>
      <AddButton count={count} setCount={setCount}/>
      <DecrementButton count={count} setCount={setCount} />
    </div>
  );
}

export default App;