import React, { useState } from 'react'
import Img from '../../../Components/ImageTag/ImageTag';
import OrangeBtn from '../../../Components/Buttons/OrangeBtn';
const Fleetowners = () => {

    const [formData, setFormData] = useState({
        trasport_name: '',
        contact_number: '', mail_id: '', base_location: '', no_of_vehicles: '', type_of_vehicles: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((preve) => ({
            ...preve,
            [name]: value
        }))
    }


    return (
        <React.Fragment>
            <section className="relative z-10 min-h-screen bg-custom overflow-hidden">
                <div className="absolute inset-0">
                    <Img src={'https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725985772/Partner_with_us_sqlqmz.png'} alt="Background Image" className="object-cover object-center w-full h-full" />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative space-y-5 mx-auto md:max-w-xl max-w-xs z-10 flex flex-col justify-center items-center h-screen">
                    <h1 className="text-3xl md:text-5xl xl:text-5xl text-center text-white leading-10 p-2 tracking-normal flex justify-start flex-row font-bold font-Poppins">Empowering Fleet Owners for Success</h1>
                    <p className='text-center font-Poppins text-xxs text-white font-medium leading-5  tracking-wider '>Join us in transforming logistics. As a fleet owner, gain access to top-tier opportunities, advanced tools, and full support. Together, we drive efficiency and elevate fleet management standards across India. Let’s lead the change, one journey at a time.</p>
                    <OrangeBtn text={'Become a FOP Today'} />
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
                            <p className='md:text-xs text-xxs font-Poppins leading-7 tracking-widest font-medium text-black mt-3 md:mt-5'>Fleet owners are the backbone of our logistics operations. They play an essential role in ensuring that goods are transported efficiently, safely, and on time. Their expertise in managing vehicles and drivers directly impacts the quality and reliability of our Full Truck Load (FTL) services. By partnering with us, fleet owners help drive operational excellence, optimize routes, reduce transit times, and enhance customer satisfaction. Their contribution is vital in maintaining the seamless flow of goods across India, making them indispensable in our mission to revolutionize logistics.</p>
                        </div>
                    </div>
                </div>
            </section>



            <section className='relative isolate overflow-hidden bg-white  lg:bg-gradient-to-r from-[#D9D9D9] from-50% to-white to-50%'>
                <div className="max-w-xl md:max-w-7xl mx-auto px-4 py-4">
                    <div className="grid grid-cols-1  md:grid-cols-2 md:gap-x-20">
                        <div className="w-full flex justify-center flex-grow flex-col items-center h-auto px-5 space-y-4 py-4">
                            <h1 className='md:text-4xl text-xl font-Poppins font-bold leading-6 tracking-wide'>Join Us as a Fleet Owner Partner</h1>
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
                            <form onSubmit={handleInputChange} className="px-5 py-4">
                                <h1 className='md:text-2xl text-center text-xl font-Poppins leading-6 tracking-wide font-bold'>Fill this form to become our FOP</h1>
                                <div className="grid md:grid-cols-2  grid-cols-1 md:mt-6 mt-4 gap-5">
                                    <div className="">
                                        <label htmlFor="name" className='text-gray-600 font-Poppins text-xs leading-6 tracking-wider'>Transport / Individual Name<strong className='inline-block text-red-600'>*</strong></label>
                                        <input type="text" id='name' name='name' className='bg-[#D9D9D9] mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5' required />
                                    </div>
                                    <div className="">
                                        <label htmlFor="contact" className='text-gray-600 font-Poppins text-xs leading-6 tracking-wider'>Contact number <strong className='inline-block text-red-600'>*</strong></label>
                                        <input type="text" id='contact' name='contact' className='bg-[#D9D9D9] mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5' required />
                                    </div>
                                    <div className="">
                                        <label htmlFor="mail" className='text-gray-600 font-Poppins text-xs leading-6 tracking-wider'>Mail id</label>
                                        <input type="email" id='mail' name='mail' className='bg-[#D9D9D9] mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5' required />
                                    </div>
                                    <div className="">
                                        <label htmlFor="BaseLocation" className='text-gray-600 font-Poppins text-xs leading-6 tracking-wider'>Base Location <strong className='inline-block text-red-600'>*</strong></label>
                                        <input type="text" id='BaseLocation' name='Base Location' className='bg-[#D9D9D9] mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5' required />
                                    </div>

                                    <div className="">
                                        <label htmlFor="No of vehicles" className='text-gray-600 font-Poppins text-xs leading-6 tracking-wider'>No of vehicles <strong className='inline-block text-red-600'>*</strong></label>
                                        <input type="email" id='No of vehicles' name='No of vehicles' className='bg-[#D9D9D9] mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5' required />
                                    </div>
                                    <div className="">
                                        <label htmlFor="Type of vehicles" className='text-gray-600 font-Poppins text-xs leading-6 tracking-wider'>Type of vehicles <strong className='inline-block text-red-600'>*</strong></label>
                                        <input type="text" id='Type of vehicles' name='Type of vehicles' className='bg-[#D9D9D9] mt-1.5 text-black focus:bg-white focus:ring-1 focus:ring-black w-full rounded-lg px-2 py-1.5' required />
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