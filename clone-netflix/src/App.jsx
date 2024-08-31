import { Route, Routes } from "react-router-dom"
import { Login } from "./components/login/Login"
import { GlobalStyles } from "./styles/GobalStyles"
import { User } from "./components/User/User"
import { Catalog } from "./components/Catalog/Catalog"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element = {<Login />} />
        <Route path="/user" element = { <User/>} />
        <Route path="/Catalog" element = {<Catalog/>} />
      </Routes>

      <GlobalStyles />
    </>
  )
}

export default App
