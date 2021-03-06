import './styles/root.css'
import './styles/global.css'
import './states/device'
import * as React from 'react'
import { render } from 'react-dom'
import App from './App'
import { store } from './states/store'
import { Provider } from 'react-redux'

render(
    <Provider store={store}>
        <App></App>
    </Provider>
    , document.getElementById('root')
)