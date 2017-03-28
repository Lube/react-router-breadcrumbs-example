import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
const Breadcrumbs = (props) => (
    <div className="breadcrumbs">
        <ul className='container'>
            <Route path='/:path' component={BreadcrumbsItem} />
        </ul>
    </div>
)

const BreadcrumbsItem = ({ ...rest, match }) => (
    <span>
        <li className={match.isExact ? 'breadcrumb-active' : undefined}>
            <Link to={match.url || ''}>
                {match.params.path}
            </Link>
        </li>
        <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
    </span>
)

const BasicExample = () => (
  <Router>
    <div>
      <Breadcrumbs />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/topics" component={Topics}/>
      <Route exact path="/topics/:topicId" component={Topic}/>
      <Route exact path="/topics/:topicId/:bla" render={({match}) => <h1> {match.params.bla} </h1>}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`/topics/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`/topics/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`/topics/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
    <Link to={`/topics/${match.params.topicId}/adentro`}>
      Adentro
    </Link>
    <br />
    <Link to={`/topics/${match.params.topicId}/tambienAdentro`}>
      tambienAdentro
    </Link>
  </div>
)

export default BasicExample