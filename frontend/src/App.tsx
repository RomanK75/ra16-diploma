import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { Route,Routes } from "react-router-dom"
import Main from "./pages/Main/Main"
function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/catalog" element={<div>Catalog</div>}/>
        <Route path="/about" element={<div>About</div>}/>
        <Route path="/contacts" element={<div>Contacts</div>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
