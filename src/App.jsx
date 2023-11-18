import Feeds from './components/Feeds/Feeds'
import Navbar from './components/Navbar/Navbar'
import MentorForm from './components/MentorForm/MentorForm'
import MentorDetails from './components/MentorDetails/MentorDetails'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

function App() {
  return (
    <>
      <Navbar />
      <Login />
      <Feeds />
      <MentorDetails />
      <MentorForm />
      <Signup />
    </>
  )
}

export default App
