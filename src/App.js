
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Router>  
        <Header />
        <Routes> 
          <Route path="/" Component = {Home}/>
          <Route path="/about" Component = {About}/>
          <Route path="/contact" Component = {Contact}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
