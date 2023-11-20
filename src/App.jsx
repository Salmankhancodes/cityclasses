import Feeds from './components/Feeds/Feeds'
import Navbar from './components/Navbar/Navbar'
import MentorForm from './components/MentorForm/MentorForm'
import MentorDetails from './components/MentorDetails/MentorDetails'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Feeds />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/details' element={<MentorDetails />} />
          <Route path='/class-details' element={<MentorForm />} />
        </Routes>
        {/* <Login /> */}
        {/* <Feeds /> */}
        {/* <MentorDetails /> */}
        {/* <MentorForm /> */}
      </Router>
    </>
  )
}

export default App
