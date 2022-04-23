import React from 'react'
import useSWR from 'swr';
import { fetcher } from './fetcher';

import logo from './logo.svg'
import './App.css'

function App() {
  const { data } = useSWR('api/users', fetcher);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        {!data && <p>loading...</p>}
        {data && data.data.map((v) => (<span key={v.id}>{v.first_name}</span>))}
      </header>
    </div>
  )
}

export default App
