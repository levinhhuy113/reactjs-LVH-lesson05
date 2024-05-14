import React from 'react'
import LvhUseState from './components/LvhUseState'
import LvhUseEffect from './components/LvhUseEffect'
import LvhUseContext from './components/LvhUseContext'

import './App.css'

export default function App() {
  return (
    <div className='container border mt-3'>
        <h1 className='text-center'>Lê Vinh Huy - Hook</h1>
        <hr/>
        <LvhUseState />
        <hr/>
        <LvhUseEffect />
        <hr/>
        <LvhUseContext />
    </div>
  )
}
