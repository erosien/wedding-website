import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import routes from './config/routes'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  const auth = getAuth()
  const [authenticatedUserID, setAuthenticatedUserID] = useState("")

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        setAuthenticatedUserID(uid)
      } else {
        setAuthenticatedUserID("")
      }
    })
  }, [auth])
  return (
    <HashRouter>
        <Provider store={store}>
          <Routes>
              <Route
                path="/"
                element={<Navbar authenticatedUserID={authenticatedUserID} />}
              >
                { routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}
              </Route>
          </Routes>
        </Provider>
    </HashRouter>
  )
}

export default App;
