
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Aboutus from './Pages/Company/Aboutus/Aboutus'
import Investor from './Pages/Company/InvestorInsight/Investor'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/investor-insight' element={<Investor />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
