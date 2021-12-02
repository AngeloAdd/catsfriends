import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import Header from '../components/Header'
import Scroll from '../components/Scroll'
import './App.css'
import ErrorBoundry  from '../components/ErrorBoundry'

const App = () => {
  
    const [ cats, setCats ] = useState([])
    const [ searchfield, setSearchfield ] = useState('')

    useEffect(()  => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            return setCats(users)
        })
        .catch(e => console.log(e))
    })

    const onSearchChange = (event) => setSearchfield(event.target.value)

    const filteredCats = cats.filter( cat => {
        return cat.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return (
        (!cats.length) ?
            <h1 className="heading-style-custom tc">Loading</h1> :
            (<React.Fragment>
                <Header searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList cats={ filteredCats } />
                    </ErrorBoundry>
                </Scroll>
            </React.Fragment>)
    )
}

export default App
