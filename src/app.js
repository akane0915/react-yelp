import React from 'react'
import ReactDOM from 'react-dom'

import './app.css'
import styles from './styles.module.css'

export default class App extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}> hello </div>
        )
    }
}

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);