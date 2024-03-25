import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { RecoilRoot } from 'recoil';

import './index.css'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <React.StrictMode>
      <React.Suspense fallback={<div>loading</div>}>
        <RouterProvider router={router} />
      </React.Suspense>
    </React.StrictMode>
  </RecoilRoot>,
)
