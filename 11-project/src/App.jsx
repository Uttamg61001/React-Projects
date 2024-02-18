import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'
import './App.css'

function App() {

  return (
    <UserContextProvider>
      <h2>Uttam don</h2>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
