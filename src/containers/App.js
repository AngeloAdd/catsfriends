import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import Header from '../components/Header'
import Scroll from '../components/Scroll'
import './App.css'
import ErrorBoundry  from '../components/ErrorBoundry'
import { setSearchField } from '../actions/actions'

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = disptch => {
    return {
        onSearchChange: (event) => disptch(setSearchField(event.target.value)),
    }
}


const App = (AppProps) => {
    const [ cats, setCats ] = useState([])

    const { searchField, onSearchChange} = AppProps
    
    useEffect(()  => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            return setCats(users)
        })
        .catch(e => console.log(e))
    })

    const filteredCats = cats.filter( cat => {
        return cat.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
        (!cats.length) ?
            <h1 className="heading-style-custom tc">Loading</h1> :
            (
                <>
                    <Header onSearchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList cats={ filteredCats } />
                        </ErrorBoundry>
                    </Scroll>
                </>
            )
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
