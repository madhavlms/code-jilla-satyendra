import { useEffect,  useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useGetDemoQuery } from "./store/api/demo";

function App() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const { data,  isFetching } = useGetDemoQuery("", { pollingInterval: 8000 });

  useEffect(()=>{
    if(isFetching){
      setCounter(0)
    }else{
      const timer = setInterval(() => setCounter(counter + 1), 1000);
      return () => clearInterval(timer);
    }
  },[counter, isFetching])

  return (
    <>
      <div>API WAS CALLED {counter} seconds</div>
      <div> Message : {data?.message}</div>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
