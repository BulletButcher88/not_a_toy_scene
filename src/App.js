import React, { Component }from 'react';
import { CardList } from './components/card-list/card-list-componet';
import { SearchBox } from './components/search-box/search-box-component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      searchFeild: ''
    }
  }

  // API for monster profiles
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monster: users }))
  }
  
  render() {
    // function to handle search bar input to be letter sensitive, to what renders in CardList
    const { monster, searchFeild } = this.state;
    const filteredMonsters = monster.filter(monster => 
      monster.name.toLowerCase().includes(searchFeild.toLowerCase()))
    return (
      <div className="App">
        <SearchBox 
        type="search"
        placeholder="search monsters"
        handleChange={e => this.setState({ searchFeild: e.target.value})}
        />
        <CardList monster={filteredMonsters}/>
     </div>
    )
  }
}

export default App;
