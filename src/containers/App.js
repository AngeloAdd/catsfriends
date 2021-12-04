import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import Header from '../components/Header'
import Scroll from '../components/Scroll'
import './App.css'
import ErrorBoundry  from '../components/ErrorBoundry'
import { setSearchField, setCatsList } from '../actions/actions'

const mapStateToProps = state => {
    return {
        searchField: state.searchField,
        catsList: state.catsList
    }
}

const mapDispatchToProps = disptch => {
    return {
        onSearchChange: (event) => disptch(setSearchField(event.target.value)),
        filterCats: (cats) => disptch(setCatsList(cats))
    }
}


const App = (AppProps) => {
    const [ catsList, setCatsList] = useState([])

    const { onSearchChange, searchField } = AppProps
    
    useEffect(()  => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(catsList => setCatsList(catsList))
        .catch(e => console.log(e))
    })

    const filterCatsList = catsList.filter( cat => {
        return cat.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
        (!catsList.length) ?
            <h1 className="heading-style-custom tc">Loading</h1> :
            (
                <>
                    <Header onSearchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList catsList={filterCatsList} />
                        </ErrorBoundry>
                    </Scroll>
                </>
            )
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
