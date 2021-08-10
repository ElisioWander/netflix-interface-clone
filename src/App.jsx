import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './pages/index'

import './styles/global.css'

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}