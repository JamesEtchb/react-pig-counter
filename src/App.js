import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const adding = () => setCount(count + 1)
  const addingTen = () => setCount(count + 10)
  // const fakesubtracting = () => setCount(count > 0? count++: 0)
  const subtracting = () => setCount(count - 1)
  const subtractingTen = () => setCount(count - 10)
  const reset = () => setCount(0)
  const Checkcount = () => {
    if (count>0){
      return subtracting()
    } else {
      return reset()
    }
  }
  const Checkcount10 = () => {
    if (count>10){
      return subtractingTen()
    } else {
      return reset()
    }
  }
  return (
    <>
    <menubar>
      
    </menubar>



    <body>
    <header className='Count'>
    <h1>Count: {count}</h1>
    </header>
    
    <main className='Main'>
    <button onClick={Checkcount10}>Click -10</button>
    <button onClick={Checkcount}>Click Down</button>
    <button onClick={reset}> Click Reset</button>
    <button onClick={adding}>Click Up</button>
    <button onClick={addingTen}>Click +10</button>
    </main>
    </body>
    </>
  );
}

export default App;
