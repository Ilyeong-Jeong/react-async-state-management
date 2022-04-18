import { useGetUsers, useUsersContext } from './query';

import logo from './logo.svg'
import './App.css'

function App() {
  const restContext = useGetUsers();
  console.log(restContext);
  console.log(useUsersContext());

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
        <div>
          {restContext.data!.data.map((v) => (<span key={v.id}>{v.first_name}</span>))}
        </div>
        <div>
          {useUsersContext().data! && useUsersContext().data!.data.map((v) => (<span key={v.id}>{v.first_name}</span>))}
        </div>
      </header>
    </div>
  )
}

export default App
