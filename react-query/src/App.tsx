import React from 'react';
import { useGetUsers, useUsersContext, useUpdateUsers } from './query';
import { UserUpdateData } from '@/interface';

import logo from './logo.svg'
import './App.css'

function App() {
  const restContext = useGetUsers();
  const updateUsersMutation = useUpdateUsers();

  const mutationClick = () => {
    const param = {
      name: "morpheus",
      job: "zion resident"
    } as UserUpdateData;

    updateUsersMutation.mutate(param);
  };

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
        {/* <div>
          {useUsersContext().data! && useUsersContext().data!.data.map((v) => (<span key={v.id}>{v.first_name}</span>))}
        </div> */}
        <div>
          <button onClick={() => mutationClick()}>mutation</button>
        </div>
      </header>
    </div>
  )
}

export default App
