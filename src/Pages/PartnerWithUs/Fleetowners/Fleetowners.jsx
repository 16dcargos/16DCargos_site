import React, { useState } from 'react'
import Img from '../../../Components/ImageTag/ImageTag';
import toast from 'react-hot-toast';
import sendEmail from '../../../email/sendEmail';
const Fleetowners = () => {

    const emailTemplateId = import.meta.env.VITE_API_TEMPLATE_ID
    // const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const [error, setError] = useState({})
    const [formData, setFormData] = useState({
        trasport_name: '',
        contact_number: '', user_email: '', base_location: '', no_of_vehicles: '', type_of_vehicles: ''
    })

    const validateForm = () => {
        let isError = false;
        const errorObj = {}

        if (!formData.trasport_name.trim()) {
            isError = true,
                errorObj.trasport_name = 'Trasport name is required!'
        }
        if (!formData.base_location.trim()) {
            isError = true,
                errorObj.base_location = 'Base location is required!'
        }
        if (!formData.no_of_vehicles) {
            isError = true,
                errorObj.no_of_vehicles = 'No of vehicles is required!'
        }
        if (!formData.type_of_vehicles.trim()) {
            isError = true,
                errorObj.type_of_vehicles = 'Type vehicles is required!'
        }
        if (!formData.contact_number) {
            isError = true,
                errorObj.contact_number = 'Contact number is required!'
        }



        // if (!formData.user_email.trim()) {
        //     isError = true;
        //     errorObj.user_email = 'Email Id is required!';
        // } else if (!emailPattern.test(formData.user_email)) { // Validate only if email is provided
        //     isError = true;
        //     errorObj.user_email = 'Kindly enter proper email format!';
        // }

        setError(errorObj); // Assuming you are using state to handle errors
        return !isError;
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        if (validateForm()) {
            await sendEmail(emailTemplateId, formData)
            setFormData({
                base_location: "",
                contact_number: "",
                no_of_vehicles: "",
                trasport_name: "",
                user_email: "",
                type_of_vehicles: "",
            })
        } else {
            toast.error('Form has validation error, kindly check it!')
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'contact_number' && value.length > 10) {
            toast.error('Contact number limit has been reached')
            return;
        }
        setFormData((preve) => ({
            ...preve,
            [name]: value
        }))
    }

    const handleInputFocus = (e) => {
        const { name } = e.target;

        setError((preve) => ({
            ...preve,
            [name]: ""
        }))
    }
    return (
        <React.Fragment>
            <section className="relative z-10 min-h-screen bg-custom overflow-hidden">
                <div className="absolute inset-0">
                    <Img src={'https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725985772/Partner_with_us_sqlqmz.png'} alt="Background Image" className="object-cover object-center w-full h-full" />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative space-y-5 mx-auto md:max-w-4xl max-w-xl z-10 flex flex-col justify-center items-center h-screen">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl text-center text-white leading-10 p-2 tracking-normal flex justify-start flex-row font-bold font-Poppins">Empowering Fleet Owners for Success</h1>
                    <p className='text-center font-Poppins text-xs md:text-sm lg:text-xl text-white font-medium leading-6 md:max-w-3xl max-w-full tracking-wide'>Join us in transforming logistics. As a fleet owner, gain access to top-tier opportunities, advanced tools, and full support. Together, we drive efficiency and elevate fleet management standards across India. Let’s lead the change, one journey at a time.</p>
                    <a href='#fop' className="bg-[#C96202] text-white active:translate-y-[6px] py-2.5 px-5 rounded-full text-xs font-medium tracking-wider font-Poppins transition duration-300 ease-in-out transform  hover:shadow-custom-white">Become a FOP Today</a>
                </div>
            </section>


            <section className='relative z-10  bg-custom overflow-hidden'>
                <div className="max-w-xl md:max-w-6xl mx-auto px-4 py-4 md:py-6 md:px-6">
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-6 gap-y-4">
                        <div className="w-full rounded-lg md:rounded-xl">
                            <Img src={'https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725983813/crucialrole_ghoubs.png'} alt={''} className={'object-fill aspect-auto object-center w-full h-full'} />
                        </div>

                        <div className="w-full px-4 py-4 md:py-6">
                            <h1 className='md:text-3xl text-xl font-Poppins text-black font-bold leading-6 tracking-wide'>The Crucial Role of Fleet Owners</h1>
                            <p className='font-Poppins text-xs md:text-sm mt-4 text-black font-medium lg:max-w-lg leading-6 tracking-wider'>Fleet owners are the backbone of our logistics operations. They play an essential role in ensuring that goods are transported efficiently, safely, and on time. Their expertise in managing vehicles and drivers directly impacts the quality and reliability of our Full Truck Load (FTL) services. By partnering with us, fleet owners help drive operational excellence, optimize routes, reduce transit times, and enhance customer satisfaction. Their contribution is vital in maintaining the seamless flow of goods across India, making them indispensable in our mission to revolutionize logistics.</p>
                        </div>
                    </div>
                </div>
            </section>



            <section id='fop' className='relative scroll-p-60 isolate overflow-hidden bg-white  lg:bg-gradient-to-r from-[#D9D9D9] from-50% to-white to-50%'>
                <div className="max-w-xl md:max-w-7xl mx-auto px-4 py-4">
                    <div className="grid grid-cols-1  md:grid-cols-2 md:gap-x-20">
                        <div className="w-full flex justify-center flex-grow flex-col items-center h-auto px-5 space-y-4 py-4">
                            <h1 className='md:text-4xl text-xl font-Poppins font-bold leading-6 tracking-wide'>Join Us as a Fleet Owner Partner.</h1>
                            <p className='text-black md:text-xs text-xxs leading-6 tracking-wider font-Poppins font-medium'>Ready to make a significant impact in the logistics industry? Partner with us and take your fleet operations to new heights. Contact us today to explore this exciting opportunity:</p>
                            <div className="inline-flex w-full justify-start items-center gap-3">
                                <span>
                                    <svg className='size-4' viewBox="0 0 51 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 12.2507C7.0518 16.838 15.6045 20 25.5 20C35.3955 20 43.9482 16.838 48 12.2507M3 12.2507V29.5C3 32.3003 3 33.7005 3.54497 34.77C4.02432 35.7108 4.78923 36.4757 5.73005 36.955C6.7996 37.5 8.19972 37.5 11 37.5H40C42.8002 37.5 44.2005 37.5 45.27 36.955C46.2108 36.4757 46.9757 35.7108 47.455 34.77C48 33.7005 48 32.3003 48 29.5V12.2507M3 12.2507V10.5C3 7.69972 3 6.2996 3.54497 5.23005C4.02432 4.28923 4.78923 3.52432 5.73005 3.04497C6.7996 2.5 8.19972 2.5 11 2.5H40C42.8002 2.5 44.2005 2.5 45.27 3.04497C46.2108 3.52432 46.9757 4.28923 47.455 5.23005C48 6.2996 48 7.69972 48 10.5V12.2507" stroke="#FF8E26" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <a href="tel:+91 96779 04120" target='_blank' className='no-underline font-semibold after-line text-sm font-Poppins text-black tracking-normal relative inline-block'>+91 96779 04120</a>
                            </div>
                            <div className="inline-flex w-full justify-start items-center gap-3">
                                <span>
                                    <svg className='size-4' viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.094 6.29043L19.7165 9.19775C21.1808 11.8215 20.593 15.2633 18.2868 17.5695C18.2868 17.5695 15.4897 20.367 20.5613 25.4388C25.6313 30.5088 28.4305 27.7132 28.4305 27.7132C30.7368 25.407 34.1785 24.8193 36.8023 26.2835L39.7095 27.906C43.6715 30.117 44.1393 35.673 40.657 39.1555C38.5645 41.248 36.001 42.8763 33.1673 42.9835C28.397 43.1645 20.2958 41.9573 12.1693 33.8308C4.04283 25.7043 2.83553 17.6031 3.01638 12.8327C3.12381 9.999 4.75201 7.43558 6.84453 5.34308C10.3269 1.8607 15.8829 2.3286 18.094 6.29043Z" stroke="#FF8E26" strokeWidth="5" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <a href="mailto:fop@16dcargos.com" target='_blank' className='no-underline font-semibold after-line text-sm font-Poppins text-black tracking-normal relative inline-block'>fop@16dcargos.com</a>
                            </div>
                        </div>

                        <div className="w-full flex justify-center flex-col items-center h-auto">
                            <form noValidate onFocus={handleInputFocus} onChange={handleInputChange} onSubmit={handleFormSubmit} className="px-5 py-4">
                                <h1 className='md:text-2xl text-center text-xl font-Poppins leading-6 tracking-wide font-bold'>Fill this form to become our FOP</h1>
                                <div className="grid md:grid-cols-2  grid-cols-1 md:mt-6 mt-4 gap-5">
                                    <div className="">
                                        <label htmlFor="trasport_name" className='text-gray-600 font-Poppins text-xs leading-6 tracking-wider'>Transport / Individual Name<strong className='inline-block text-red-600'>*</strong></label>
                                        <input type="text" id='trasport_name' name='trasport_name' value={formData.trasport_name} className={`bg-[#D9D9D9]  mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5 ${error.trasport_name && 'ring-1 ring-red-500'}`} required />
                                        {error.trasport_name && <span className='text-red-500 font-normal font-Poppins text-xs leading-3 tracking-tight'>{error.trasport_name}</span>}
                                    </div>
                                    <div className="">
                                        <label htmlFor="contact_number" className='text-gray-600 font-Poppins text-xs leading-6 tracking-wider'>Contact number <strong className='inline-block text-red-600'>*</strong></label>
                                        <input type="number" id='contact_number' name='contact_number' value={formData.contact_number} className={`bg-[#D9D9D9]  mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5 ${error.contact_number && 'ring-1 ring-red-500'}`} required />
                                        {error.contact_number && <span className='text-red-500 font-normal font-Poppins text-xs leading-3 tracking-tight'>{error.contact_number}</span>}
                                    </div>
                                    <div className="">
                                        <label htmlFor="user_email" className='text-gray-600  font-Poppins text-xs leading-6 tracking-wider'>Mail id</label>
                                        <input type="email" id='user_email' value={formData.user_email} name='user_email' className={`bg-[#D9D9D9]  mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5`} />
                                    </div>
                                    <div className="">
                                        <label htmlFor="base_location" className='text-gray-600 font-Poppins text-xs leading-6 tracking-wider'>Base Location <strong className='inline-block text-red-600'>*</strong></label>
                                        <input type="text" id='base_location' name='base_location' value={formData.base_location} className={`bg-[#D9D9D9]  mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5 ${error.base_location && 'ring-1 ring-red-500'}`} required />
                                        {error.base_location && <span className='text-red-500 font-normal font-Poppins text-xs leading-3 tracking-tight'>{error.base_location}</span>}
                                    </div>

                                    <div className="">
                                        <label htmlFor="no_of_vehicles" className='text-gray-600 font-Poppins text-xs leading-6 tracking-wider'>No of vehicles <strong className='inline-block text-red-600'>*</strong></label>
                                        <input type="email" id='no_of_vehicles' name='no_of_vehicles' value={formData.no_of_vehicles} className={`bg-[#D9D9D9]  mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5 ${error.no_of_vehicles && 'ring-1 ring-red-500'}`} required />
                                        {error.no_of_vehicles && <span className='text-red-500 font-normal font-Poppins text-xs leading-3 tracking-tight'>{error.no_of_vehicles}</span>}
                                    </div>
                                    <div className="">
                                        <label htmlFor="type_of_vehicles" className='text-gray-600 font-Poppins text-xs leading-6 tracking-wider'>Type of vehicles <strong className='inline-block text-red-600'>*</strong></label>
                                        <input type="text" id='type_of_vehicles' value={formData.type_of_vehicles} name='type_of_vehicles' className={`bg-[#D9D9D9]  mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5 ${error.type_of_vehicles && 'ring-1 ring-red-500'}`} required />
                                        {error.type_of_vehicles && <span className='text-red-500 font-normal font-Poppins text-xs leading-3 tracking-tight'>{error.type_of_vehicles}</span>}
                                    </div>
                                </div>
                                <div className="flex justify-center items-center mt-6">
                                    <button className='block  transition duration-300 ease-in-out hover:shadow-custom-white active:translate-y-1 font-Poppins hover:shadow-gray-600 text-white bg-[#0222C9]  px-1.5 py-1.5 lg:px-4 lg:py-2 text-xs shadow rounded-xl font-semibold' type='submit'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Fleetowners