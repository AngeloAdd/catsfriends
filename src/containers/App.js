import React from 'react';
import CardList from '../components/CardList';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import './App.css'
import ErrorBoundry  from '../components/ErrorBoundry';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      return this.setState({ cats: users })
  })
  }

  onSearchChange = (event) => {
    return this.setState( {searchfield: event.target.value} );
  }

  render() {
    const filteredCats = this.state.cats.filter( cat => {
      return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return !this.state.cats.length
      ? <h1 className="heading-style-custom tc">Loading</h1>
      : (<React.Fragment>
          <Header searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList cats={ filteredCats } />
            </ErrorBoundry>
          </Scroll>
        </React.Fragment>);
    }
  }

export default App;
