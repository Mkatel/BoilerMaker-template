import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store'
import Home from './components/home'
import AllPictures from './components/allPictures'
import AuthorPictures from './components/authorPictures'
import AddPictures from './components/addPictures'
import singlePicture from './components/singlePicture'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    //const {isLoggedIn} = this.props
    const isLoggedIn = true
    return (
      <Switch>
        <Route exact path="/allPictures" component={AllPictures} />
        <Route exact path="/authorPictures" component={AuthorPictures} />
        <Route exact path="/addPictures" component={AddPictures} />

        <Route exact path="/" component={Home} />

        {/* <Route exact path="/" component={AuthorPictures} /> */}

        {/* {isLoggedIn ? (
          <Route exact path="/allPictures" component={AllPictures} />
        ) : (
          <Route path="/" component={Home} />
        )} */}
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
