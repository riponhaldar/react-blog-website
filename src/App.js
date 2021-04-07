import React from 'react'
import Navigations from './components/Navigations'
import PageRenderer from './PageRender'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigations />
        <Switch>
          <Route path='/:page' components={PageRenderer} />
          <Route path='/' render={() => <Redirect to='/home' />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
