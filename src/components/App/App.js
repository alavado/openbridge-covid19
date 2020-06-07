import React from 'react'
import './App.css'
import Landing from '../Landing'
import { Switch, Route } from 'react-router'
import Dashboard from '../Dashboard'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  )
}

export default App
