import React, { Component } from 'react'
import '../containers/App.css'
import { robots } from '../robots'
import CardList from '../components/Cardlist'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
class App extends Component {

  constructor() {
    super()

    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.cypress.io/users')
      .then(response => response.json())
      .then(users => { this.setState({ robots: users }) })
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { robots, searchField } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return !robots.length
      ? <h1 className='font-black text-center text-6xl'>Loading</h1>
      : (
        <>
          <div className='text-center'>
            <h1 className='text-6xl p-4'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <CardList robots={filteredRobots} />
            </Scroll>
          </div>
        </>
      )
  }
}

export default App
