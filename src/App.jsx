// import UserDetails from "./assets/components/UserDetails"
import { useState, useEffect } from "react";
import UserDetails from "./assets/components/UserDetails";

function App() {
  const [ counter, setCounter ] = useState(0);
  const [ sync, setSync ] = useState(false);
  const [ data, setData ] = useState(null);

  useEffect(() => {
    document.title = counter;
    console.log('render');
  }, [sync]);

  useEffect(() => {
    const controller = new AbortController();
    const {signal} = controller;
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', { signal });
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  return(
    <div>
      <div>
        You clicked the button {counter} times
      </div>
      {data && data.map(user => {
        return (
          <div key={user.id} className="mb-4">
            <li>ID: {user.id}</li>
            <li>{user.name}</li>
            <li>{user.username}</li>
            <li>{user.phone}</li>
          </div>
        )
      })}
      <button onClick={() => setCounter(curState => curState + 1)}>Click</button>
      <button onClick={() => setSync(curState => !curState)}>Sync</button>
    </div>
  )
}

export default App;