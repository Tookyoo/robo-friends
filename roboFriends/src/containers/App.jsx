import React from 'react'
import './App.css'
import { robots } from '../robots'
import CardList from '../components/Cardlist'

const App = () => {
  return (
    <>
      <div className='text-center'>
        <h1 className='text-6xl font-black'>RoboFriends</h1>
        <CardList robots={robots} />
      </div>
    </>
  )
}

export default App
