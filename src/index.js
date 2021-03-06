import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import 'tachyons'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { searchRobots } from './reducers/reducer'

const store = createStore(searchRobots)
 
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
