
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Aboutus from './Pages/Company/Aboutus/Aboutus'
import Investor from './Pages/Company/InvestorInsight/Investor'
import SixteenDAndNiraahi from './Pages/ProductAndService/16D&Nirvaahi/SixteenDAndNiraahi'
import { useEffect } from 'react'
import FullTruckLoaded from './Pages/ProductAndService/FTL/FullTruckLoaded'
import Fleetowners from './Pages/PartnerWithUs/Fleetowners/Fleetowners'
import Belinkmentor from './Pages/PartnerWithUs/Belinkmentor/Belinkmentor'

function App() {
  const location = useLocation()

  const path = location.pathname

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/investor-insight' element={<Investor />} />
        <Route path='/sixteenD-and-nirvaahi' element={<SixteenDAndNiraahi />} />
        <Route path='/full-truck-loaded' element={<FullTruckLoaded />} />
        <Route path='/fleet-owners' element={<Fleetowners />} />
        <Route path='/be-link-mentor' element={<Belinkmentor />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
