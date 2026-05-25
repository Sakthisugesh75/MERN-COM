import { BrowserRouter ,Route,Routes } from "react-router-dom"
import './App.css'
import UserLayout from "./components/layout/UserLayout"
import Home from "./pages/Home"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLayout/>}>
      <Route index element ={<Home/>}/>
      { /*User Layout*/}
      
      </Route>
      <Route>
      { /*Client Layout*/}
      </Route>
    </Routes>
    </BrowserRouter>
    
        </>
  )
}

export default App
