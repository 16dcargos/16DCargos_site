import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Aboutus from "./Pages/Company/Aboutus/Aboutus";
import Investor from "./Pages/Company/InvestorInsight/Investor";
import SixteenDAndNiraahi from "./Pages/ProductAndService/16D&Nirvaahi/SixteenDAndNiraahi";
import { useEffect, useState } from "react";
import FullTruckLoaded from "./Pages/ProductAndService/FTL/FullTruckLoaded";
import Fleetowners from "./Pages/PartnerWithUs/Fleetowners/Fleetowners";
import Belinkmentor from "./Pages/PartnerWithUs/Belinkmentor/Belinkmentor";
import Career from "./Pages/EnRichAndTeamUp/Careers/Career";
import SkillDevelopment from "./Pages/EnRichAndTeamUp/SkillDevelopment/SkillDevelopment";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import sendEmail from "./email/sendEmail";

function App() {
  const location = useLocation();
  const [showContactModal, setContactModal] = useState(false);
  const path = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const handleToggleModal = () => {
    setContactModal((preve) => !preve);
  };

  const modalVariants = {
    hidden: {
      y: "100vh", // Start off-screen at the bottom
      opacity: 0,
    },
    visible: {
      y: 0, // Move to the top (fully visible position)
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      y: "100vh", // Exit back to the bottom of the screen
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.9,
        delay: 0.2,
      },
    },
  };

  const [quote, setQuote] = useState({
    email: "",
    contact_number: "",
    date: "",
    open_or_container: "",
    material: "",
    vehicle_type: "",
    unloading_pin: "",
    loading_pin: ""
  })

  const [error, setError] = useState({})
  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
  const emailTemplateId = import.meta.env.VITE_API_TEMPLATE_ID

  const validateForm = () => {
    let isError = false;
    const errorObj = {}

    if (!quote.material.trim()) {
      isError = true,
        errorObj.material = 'Material is required!'
    }
    if (!quote.open_or_container.trim()) {
      isError = true,
        errorObj.open_or_container = 'Open/Container is required!'
    }
    if (!quote.vehicle_type.trim()) {
      isError = true,
        errorObj.vehicle_type = 'Vehicle Type is required!'
    }
    if (!quote.date) {
      isError = true,
        errorObj.date = 'Date of Requirement is required!'
    }
    if (!quote.contact_number) {
      isError = true,
        errorObj.contact_number = 'Contact number is required!'
    }
    if (!quote.loading_pin) {
      isError = true,
        errorObj.loading_pin = 'Loading Pincode is required!'
    }
    if (!quote.unloading_pin) {
      isError = true,
        errorObj.unloading_pin = 'Unloading Pincode is required!'
    }

    if (!quote.email.trim()) {
      isError = true;
      errorObj.email = 'Email Id is required!';
    } else if (!emailPattern.test(quote.email)) { // Validate only if email is provided
      isError = true;
      errorObj.email = 'Kindly enter proper email format!';
    }

    setError(errorObj); // Assuming you are using state to handle errors
    return isError;
  }

  const handleQuoteChange = (e) => {
    const { name, value } = e.target

    setQuote((preve) => ({
      ...preve,
      [name]: value
    }))
  }

  const handleQuoteSubmit = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      toast.error('Form has validation error!')
    } else {
      await sendEmail(emailTemplateId, quote)
      setQuote({
        date: "", contact_number: "", email: "", loading_pin: "", material: "", open_or_container: "", unloading_pin: "", vehicle_type: ""
      })
    }
  }

  const handleQuoteReset = () => {
    setQuote({
      date: "", contact_number: "", email: "", loading_pin: "", material: "", open_or_container: "", unloading_pin: "", vehicle_type: ""
    })
    setError({})
    setContactModal(false)
  }

  const handleQuoteFocus = (e) => {
    const { name } = e.target

    setError((pre) => ({
      ...pre,
      [name]: ""
    }))
  }

  return (
    <>
      <Navbar handleToggleModal={handleToggleModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/investor-insight" element={<Investor handleToggleModal={handleToggleModal} />} />
        <Route path="/sixteenD-and-nirvaahi" element={<SixteenDAndNiraahi />} />
        <Route path="/full-truck-loaded" element={<FullTruckLoaded handleToggleModal={handleToggleModal} />} />
        <Route path="/fleet-owners" element={<Fleetowners />} />
        <Route path="/be-link-mentor" element={<Belinkmentor />} />
        <Route path="/career" element={<Career />} />
        <Route path="/skill-development" element={<SkillDevelopment handleToggleModal={handleToggleModal} />} />
      </Routes>
      <Footer />

      {showContactModal && (
        <AnimatePresence>
          <div className="relative overflow-auto">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/75 z-50 w-full flex justify-center items-center"
            >
              <div className="bg-white md:p-6 p-3 w-screen h-screen  max-w-full mt-28 rounded-3xl overflow-scroll">
                <div className="absolute inset-0 top-5  -z-10 px-5">
                  <button
                    onClick={handleToggleModal}
                    className="inline-block float-end group"
                  >
                    <svg
                      className="w-6 h-6 text-white group-hover:rotate-180 transition-all duration-500 ease-in-out"
                      aria-hidden="true"
                      xmlns="http:www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M6 18 17.94 6M18 18 6.06 6"
                      />
                    </svg>
                  </button>
                </div>
                <div className="max-w-full md:max-w-5xl mx-auto">
                  <div className="md:max-w-3xl max-w-md mx-auto">
                    <h1 className="text-center md:text-4xl text-xl mb-4 leading-relaxed tracking-wide font-bold font-Poppins text-black">
                      Your logistics partner—reliable, responsible, every time.
                    </h1>
                    <p className="text-center font-medium leading-5 tracking-wide font-Poppins text-sm text-gray-500">
                      With every shipment, we bring reliability, dedication, and trust. From loading dock to final destination, we handle your freight with care, so you can focus on what matters most—your business.
                    </p>
                  </div>
                </div>
                <form noValidate onSubmit={handleQuoteSubmit} onChange={handleQuoteChange} onFocus={handleQuoteFocus} onReset={handleQuoteReset} className="">
                  <div className="md:max-w-7xl max-w-xl mx-auto py-12">
                    <div className="bg-gray-500 w-full flex md:flex-row flex-col min-h-screen justify-center items-start rounded-2xl">
                      <div className="md:block hidden md:w-1/2 md:h-screen w-full h-full">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30767694.11883084!2d60.92944751922805!3d19.72019948337311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1729885384791!5m2!1sen!2sin" className="w-full md:rounded-r-none rounded-2xl h-full object-fill object-center"
                          allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                      </div>

                      <div className="md:w-1/2 w-full h-full md:px-3 mt-4 md:mt-8 md:py-6 px-3 py-4">
                        <div className="hidden">
                          <h1 className="font-bold text-center font-Poppins leading-6 tracking-wide text-black text-xl md:text-3xl">
                            Lorem ipsum dolor sit amet
                            elit.
                          </h1>
                        </div>

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                          <div className="mb-2">
                            <label
                              htmlFor="email"
                              className='text-gray-100 font-Poppins text-xs leading-6 tracking-wider after:content-["*"] after:ml-1 after:text-red-600'
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className={`bg-[#D9D9D9]  ${error.email && 'ring-1 ring-red-500'}   mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5`}
                              required
                            />
                            {error.email && <span className='text-red-500 font-normal font-Poppins text-xs leading-3 tracking-tight'>{error.email}</span>}
                          </div>
                          <div className="mb-2">
                            <label
                              htmlFor="contact_number"
                              className='text-gray-100 font-Poppins text-xs leading-6 tracking-wider after:content-["*"] after:ml-1 after:text-red-600'
                            >
                              Contact number
                            </label>
                            <input
                              type="text"
                              id="contact_number"
                              name="contact_number"
                              className={`bg-[#D9D9D9]  ${error.contact_number && 'ring-1 ring-red-500'}   mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5`}
                              required
                            />
                            {error.contact_number && <span className='text-red-500 font-normal font-Poppins text-xs leading-3 tracking-tight'>{error.contact_number}</span>}
                          </div>
                          <div className="mb-2">
                            <label
                              htmlFor="loading_pin"
                              className='text-gray-100 font-Poppins text-xs leading-6 tracking-wider after:content-["*"] after:ml-1 after:text-red-600'
                            >
                              Loading Pincode
                            </label>
                            <input
                              type="text"
                              id="loading_pin"
                              name="loading_pin"
                              className={`bg-[#D9D9D9]  ${error.loading_pin && 'ring-1 ring-red-500'} mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5`}
                              required
                            />
                            {error.loading_pin && <span className='text-red-500 font-normal font-Poppins text-xs leading-3 tracking-tight'>{error.loading_pin}</span>}
                          </div>
                          <div className="mb-2">
                            <label
                              htmlFor="unloading_pin"
                              className='text-gray-100 font-Poppins text-xs leading-6 tracking-wider after:content-["*"] after:ml-1 after:text-red-600'
                            >
                              Unloading Pincode
                            </label>
                            <input
                              type="text"
                              id="unloading_pin"
                              name="unloading_pin"
                              className={`bg-[#D9D9D9]   ${error.unloading_pin && 'ring-1 ring-red-500'}  mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5`}
                              required
                            />
                            {error.unloading_pin && <span className='text-red-500 font-normal font-Poppins text-xs leading-3 tracking-tight'>{error.unloading_pin}</span>}
                          </div>
                          <div className="mb-2">
                            <label
                              htmlFor="vehicle_type"
                              className='text-gray-100 font-Poppins text-xs leading-6 tracking-wider after:content-["*"] after:ml-1 after:text-red-600'
                            >
                              Vehicle Type
                            </label>
                            <input
                              type="text"
                              id="vehicle_type"
                              name="vehicle_type"
                              className={`bg-[#D9D9D9]  ${error.vehicle_type && 'ring-1 ring-red-500'}  mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5`}
                              required
                            />
                            {error.vehicle_type && <span className='text-red-500 font-normal font-Poppins text-xs leading-3 tracking-tight'> {error.vehicle_type}</span>}
                          </div>
                          <div className="mb-2">
                            <label
                              htmlFor="material"
                              className='text-gray-100 font-Poppins text-xs leading-6 tracking-wider after:content-["*"] after:ml-1 after:text-red-600'
                            >
                              Material
                            </label>
                            <input
                              type="text"
                              id="material"
                              name="material"
                              className={`bg-[#D9D9D9] ${error.material && 'ring-1 ring-red-500'}  mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5`}
                              required
                            />
                            {error.material && <span className='text-red-500 font-normal font-Poppins text-xs leading-3 tracking-tight'>{error.material}</span>}
                          </div>
                          <div className="mb-2">
                            <label
                              htmlFor="open_or_container"
                              className='text-gray-100 font-Poppins text-xs leading-6 tracking-wider after:content-["*"] after:ml-1 after:text-red-600'
                            >
                              Open / Container
                            </label>
                            <input
                              type="text"
                              id="open_or_container"
                              name="open_or_container"
                              className={`bg-[#D9D9D9] ${error.open_or_container && 'ring-1 ring-red-500'}  mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5`}
                              required
                            />
                            {error.open_or_container && <span className='text-red-500 font-normal font-Poppins text-xs leading-3 tracking-tight'>{error.open_or_container}</span>}
                          </div>
                          <div className="mb-2">
                            <label
                              htmlFor="date"
                              className='text-gray-100 font-Poppins text-xs leading-6 tracking-wider after:content-["*"] after:ml-1 after:text-red-600'
                            >
                              Date of Requirement
                            </label>
                            <input
                              type="date"
                              id="date"
                              name="date"
                              className={`bg-[#D9D9D9] ${error.date && 'ring-1 ring-red-500'}  mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5`}
                              required
                            />
                            {error.date && <span className='text-red-500 font-normal font-Poppins text-xs leading-3 tracking-tight'>{error.date}</span>}
                          </div>
                        </div>

                        <div className="flex justify-center md:mt-8 mt-4 items-center gap-6">
                          <button type="reset" className="bg-[#C96202] text-white bg-transparent ring-2 ring-[#C96202] active:translate-y-[6px] py-2.5 px-5 rounded-lg text-xs font-medium tracking-wider font-Poppins transition duration-300 ease-in-out transform hover:bg-[#de8b3e]">Cancel</button>
                          <button type="submit" className="bg-[#C96202] text-white active:translate-y-[6px] py-2.5 px-5 rounded-lg text-xs font-medium tracking-wider font-Poppins transition duration-300 ease-in-out transform hover:ring-[#C96202] hover:bg-transparent hover:ring-2">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
}

export default App;
