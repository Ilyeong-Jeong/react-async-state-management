import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/store/hook';
import { RequestState } from './interface/Request';
import { getUsers } from './store/appSlice';

import logo from './logo.svg'
import './App.css'

function App() {
  const dispatch = useAppDispatch();

  const usersSuccess = useAppSelector((state) => {
    return state.app.usersRequest.state == RequestState.SUCCESS;
  });
  const users = useAppSelector((state) => {
    return state.app.users;
  });

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        {!usersSuccess && <p>loading...</p>}
        {users && users.data.map((v) => (<span key={v.id}>{v.first_name}</span>))}
      </header>
    </div>
  )
}

export default App
