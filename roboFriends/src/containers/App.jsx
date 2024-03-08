import React from 'react'
import './App.css'
import { robots } from '../robots.js'
import Card from '../components/Card.jsx'

const App = () => {
  return (
    <>
      <div className='text-center'>
        <h1 className='text-6xl font-black'>RoboFriends</h1>
        <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
        <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
        <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
      </div>
    </>
  )
}

export default App
