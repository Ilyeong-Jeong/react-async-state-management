import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useRecoilState } from 'recoil';
import { countState } from './atom';
import TestPage from './TestPage';
import AsyncComponent from './AsyncComponent';
import MultiAsyncComponent from './MultiAsyncComponent';
import TodoList from './TodoList';
import AddTodoList from './AddTodoList';

function App() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <TestPage />
      <AsyncComponent />
      <MultiAsyncComponent />
      <TodoList />
      <AddTodoList />
    </>
  );
}

export default App;
