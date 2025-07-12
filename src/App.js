import { useState } from 'react';
import './App.css';

const AddButton = (props) => {

  const { count, setCount } = props;

  const onIncrementClick = () => {
    setCount (count + 1);
  }

  return (
    <button onClick={onIncrementClick}>Increment</button>
  )
}

const DecrementButton = (props) => {

    const { count, setCount } = props;

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