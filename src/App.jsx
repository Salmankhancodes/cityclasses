import Feeds from './components/Feeds/Feeds'
import Navbar from './components/Navbar/Navbar'
import MentorForm from './components/MentorForm/MentorForm'
import MentorDetails from './components/MentorDetails/MentorDetails'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase-setup/firebase'
import { userLoginSuccess, userLogout } from './store/actions/user-action'
import { connect } from 'react-redux'
import _ from 'lodash'

function App(props) {
  const { userData, userLoginSuccessDispatch, userLogoutDispatch } = props
  const userExist = !_.isEmpty(userData)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        userLoginSuccessDispatch(user)
      } else {
        userLogoutDispatch()
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Feeds />} />
          <Route path='/login' element={userExist ? <Feeds /> : <Login />} />
          <Route path='/signup' element={userExist ? <Feeds /> : <Signup />} />
          <Route path='/details' element={<MentorDetails />} />
          <Route
            path='/class-details-form'
            element={userExist ? <MentorForm /> : <Signup />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default connect(
  ({ user }) => ({
    userData: user.userData,
  }),
  (dispatch) => ({
    userLoginSuccessDispatch: (opts) => dispatch(userLoginSuccess(opts)),
    userLogoutDispatch: () => dispatch(userLogout()),
  })
)(App)
