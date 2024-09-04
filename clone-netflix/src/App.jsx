import { Route, Routes } from "react-router-dom"
import { Login } from "./components/login/Login"
import { GlobalStyles } from "./styles/GobalStyles"
import { User } from "./components/User/User"
import { Catalog } from "./components/Catalog/Catalog"
import { ProtectRouter } from "./components/ProtectRouter/ProtectRouter"

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={
            <ProtectRouter>
              <User />
            </ProtectRouter>
            } />
          <Route path="/Catalog" element={
            <ProtectRouter>
              <Catalog />
            </ProtectRouter>
            } />
        </Routes>

      <GlobalStyles />
    </>
  )
}

export default App
