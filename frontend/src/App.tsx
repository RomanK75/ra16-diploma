import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { Route,Routes } from "react-router-dom"
import Main from "./pages/Main/Main"
import About from "./pages/About/About"
import Contacts from "./pages/Contacts/Contacts"
function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/catalog" element={<div>Catalog</div>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
