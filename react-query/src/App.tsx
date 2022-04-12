import { useGetRest } from './query';

import logo from './logo.svg'
import './App.css'

function App() {
  const restContext = useGetRest();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          {restContext.isLoading ? 'Loading' : 'Not loading'}
        </p>
        <p>
          {restContext.isSuccess ? 'Success' : 'Not Success'}
        </p>
        <p>
          {restContext.data.data.map((v) => (<div>{v.first_name}</div>))}
        </p>
      </header>
    </div>
  )
}

export default App
