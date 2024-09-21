import React, { useRef, useState } from 'react'
import ImageTag from '../../../Components/ImageTag/ImageTag'
import { Link } from 'react-router-dom'
import sendEmail from '../../../email/sendEmail'
import toast from 'react-hot-toast'

const Career = () => {
    const jobs = [
        {
            title: 'job 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti velit, amet consequuntur porro eaque nemo dolorem totam veniam.',
        },
        {
            title: 'job 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti velit, amet consequuntur porro eaque nemo dolorem totam veniam.',
        },
        {
            title: 'job 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti velit, amet consequuntur porro eaque nemo dolorem totam veniam.',
        },
        {
            title: 'job 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti velit, amet consequuntur porro eaque nemo dolorem totam veniam.',
        },
        {
            title: 'job 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti velit, amet consequuntur porro eaque nemo dolorem totam veniam.',
        },
        {
            title: 'job 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti velit, amet consequuntur porro eaque nemo dolorem totam veniam.',
        },
    ]


    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -300, // Adjust this value based on card width
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 300, // Adjust this value based on card width
                behavior: 'smooth',
            });
        }
    };
    const emailTemplateId = import.meta.env.VITE_API_TEMPLATE_ID
    const [errors, setErrors] = useState({})
    const [careers, setCareers] = useState({
        name: '',
        dob: '',
        location: '',
        graduation: ''
    })
    const validateForm = () => {
        let isError = false
        const errObj = {}

        if (!careers.name.trim()) {
            isError = true,
                errObj.name = 'Name is required!'
        }
        if (!careers.dob) {
            isError = true,
                errObj.dob = 'Date of brith is required!'
        }
        if (!careers.location.trim()) {
            isError = true,
                errObj.location = 'Location is required!'
        }
        if (!careers.graduation.trim()) {
            isError = true,
                errObj.graduation = 'Graduation is required!'
        }

        setErrors(errObj)
        return !isError
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validateForm()) {
            await sendEmail(emailTemplateId, careers)
            setCareers({
                dob: "",
                graduation: "",
                location: "",
                name: "",
            })
        } else {
            toast.error('Form has validation, kindly fill all fields!')
        }
    }


    const handleInputChange = (e) => {

        const { name, value } = e.target

        setCareers((preve) => ({
            ...preve,
            [name]: value
        }))
    }

    const handleFocus = (e) => {
        const { name } = e.target;

        setErrors((preve) => ({
            ...preve,
            [name]: ''
        }))
    }
    return (
        <React.Fragment>
            <section className="relative z-10 min-h-screen bg-custom overflow-hidden">
                <div className="absolute inset-0">
                    <ImageTag src={'https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725984922/heroCareer_n5u9ql.png'} alt="Background Image" className="object-cover object-center w-full h-full" />
                    {/* <div className="absolute inset-0 bg-black/50"></div> */}
                </div>

                <div className="relative space-y-5 mx-auto md:max-w-3xl max-w-xs z-10 flex flex-col justify-center items-center h-screen">
                    <h1 className="text-xl md:text-3xl text-center text-white md:leading-10 p-2 tracking-normal flex justify-start flex-row font-bold font-Poppins">Elevate Your Career with Us: Join to shape the future of logistics in Bharat and make a meaningful impact.</h1>
                    <p className='text-center font-Poppins text-xxs text-white font-medium md:leading-5  tracking-wider '>Join our Dynamic team and elevate your career in the logistics industry. At our company, we provide a supportive environment where your skills and ambitions can flourish. Work with like-minded professionals, take on exciting challenges, and help shape the future of logistics in India. Team up with us and make a meaningful impact!</p>
                    {/* <OrangeBtn text={'Apply now'} onClick={}/> */}

                    <a href='#applyForm' className="bg-[#C96202] text-white active:translate-y-[6px] py-2.5 px-5 rounded-full text-xs font-medium tracking-wider font-Poppins transition duration-300 ease-in-out transform  hover:shadow-custom-white">Apply now</a>
                </div>
            </section>


            <section className='relative isolate bg-custom overflow-hidden '>
                <div className="mx-auto max-w-xl md:max-w-6xl px-4 py-4 md:py-6">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 place-items-start place-content-between">
                        <div className="bg-white w-full rounded-lg md:rounded-xl">
                            <ImageTag src={'https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725983862/joinus_yjm2jx.png'} alt={'why join us'} className={'w-full object-fill object-center'} />
                        </div>
                        <div className="w-full px-4 md:px-4 py-5 md:py-9">
                            <div className="space-y-5">
                                <h1 className='font-Poppins font-bold text-xl md:text-3xl leading-6 tracking-wide text-black'>Why Join Us:</h1>
                                <p className='text-sm md:text-xs text-black font-Poppins font-medium leading-6 tracking-wide '>We believe in fostering a culture of innovation, collaboration, and growth. Our team is dedicated to making a difference in the logistics industry, and we are committed to supporting your professional journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative isolate bg-white'>

                <div className="mx-auto max-w-6xl px-4 py-4 md:px-6 md:py-6">
                    <div className="flex justify-between items-center gap-5">
                        <h1 className='font-bold text-center leading-6 tracking-wide font-Poppins text-2xl'>Current Job Openings:</h1>
                        <div className="md:flex hidden gap-4 justify-center items-center">
                            <button type='button' onClick={scrollLeft}
                                className='bg-custom active:translate-y-[6px] inline-block transition-all duration-300 ease-in-out p-4 rounded-full shadow-md hover:shadow-custom-white hover:shadow-gray-500 w-full'>
                                <svg className='size-4' viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M21.5435 0.732225C22.4953 1.70855 22.4953 3.29145 21.5435 4.26777L8.64351 17.5H41.7553C43.1014 17.5 44.1926 18.6192 44.1926 20C44.1926 21.3808 43.1014 22.5 41.7553 22.5H8.64351L21.5435 35.7323C22.4953 36.7085 22.4953 38.2915 21.5435 39.2677C20.5918 40.244 19.0485 40.244 18.0968 39.2677L1.03611 21.7677C0.579053 21.299 0.322266 20.663 0.322266 20C0.322266 19.337 0.579053 18.701 1.03611 18.2323L18.0968 0.732225C19.0485 -0.244075 20.5918 -0.244075 21.5435 0.732225Z" fill="black" />
                                </svg>
                            </button>
                            <button type='button' onClick={scrollRight} className='bg-custom active:translate-y-[6px] inline-block transition-all duration-300 ease-in-out p-4 rounded-full shadow-md hover:shadow-custom-white hover:shadow-gray-500 w-full'>
                                <svg className='size-4' viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.608 0.732225C24.5597 -0.244075 26.103 -0.244075 27.0547 0.732225L44.1154 18.2323C45.0672 19.2085 45.0672 20.7915 44.1154 21.7677L27.0547 39.2677C26.103 40.244 24.5597 40.244 23.608 39.2677C22.6563 38.2915 22.6563 36.7085 23.608 35.7323L36.5081 22.5H3.39622C2.05018 22.5 0.958984 21.3807 0.958984 20C0.958984 18.6193 2.05018 17.5 3.39622 17.5H36.5081L23.608 4.26777C22.6563 3.29145 22.6563 1.70855 23.608 0.732225Z" fill="black" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-xl md:max-w-6xl mx-auto">
                    <div className="relative px-4 py-4">
                        {/* <!-- Scrollable Container --> */}
                        <div ref={carouselRef} className="flex space-x-6 overflow-x-scroll scrollbar-hide p-0 md:p-4 snap-x snap-mandatory scroll-smooth">
                            {/* <!-- Card 1 --> */}
                            {jobs && jobs.length > 0 ? (
                                jobs.map((item, index) => {
                                    return (
                                        <Link key={index} className="space-y-4  min-w-[300px] bg-custom rounded-lg shadow-lg p-4 transform transition-transform duration-500 hover:scale-105 snap-center">
                                            <img src="https://loremflickr.com/800/600/girl" alt="Image 1" className="rounded-lg mb-4" />
                                            <div className="flex justify-between items-center gap-2">
                                                <h3 className="text-xl font-semibold font-Poppins leading-6 tracking-tight">{item.title}</h3>
                                                <button className='bg-[#C96202] text-white active:translate-y-[6px] py-2 px-5 rounded-lg text-xs font-medium tracking-wider font-Poppins transition duration-300 ease-in-out transform shadow-md hover:shadow-gray-600 hover:shadow-custom-white'>Apply</button>
                                            </div>
                                            <p className="text-gray-600 leading-5 tracking-wide text-xs font-Poppins">{item.description}</p>
                                            <div className="inline-flex justify-start flex-wrap items-center gap-2">
                                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#photography</span>
                                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#travel</span>
                                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                                            </div>
                                        </Link>
                                    )
                                })
                            ) : (
                                <div className="text-center">
                                    <p>Currently we're not hiring</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>


            <div id='applyForm' className="relative  isolate overflow-hidden min-h-screen bg-custom">
                <div className="absolute inset-x-0 text-center z-50">
                    <span className="py-1.5 px-12 w-max rounded bg-[#ff8f26ad] text-black font-xs font-Poppins font-normal leading-6 tracking-wide">
                        JOB
                    </span>
                </div>
                <div className="absolute inset-0">
                    <ImageTag src={'https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725985466/formbg_y7udbw.png'} alt={'Job form'} className={'w-full h-full object-fill object-center'} />
                </div>
                <div className="relative flex justify-center items-center h-screen px-4">
                    <div className="max-w-md w-full  shadow shadow-white bg-white rounded-lg p-2 md:p-5">
                        <h1 className='text-2xl font-Poppins leading-6 tracking-wide font-bold text-black text-center'>Lets begin from here</h1>
                        <form noValidate onSubmit={handleSubmit} onFocus={handleFocus} onChange={handleInputChange} className='mt-5 px-5'>
                            <div className="space-y-2">
                                <div className="">
                                    <label htmlFor="name" className='flex justify-start mb-1.5 items-center font-Poppins leading-6 tracking-wide  text-gray-500 font-normal text-sm'>
                                        <span className='pr-2 pointer-events-none'>
                                            <svg className='size-4 ' viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.625 18.9056C23.132 18.9056 25.5364 17.9097 27.3091 16.137C29.0819 14.3642 30.0778 11.9599 30.0778 9.45281C30.0778 6.94577 29.0819 4.54141 27.3091 2.76866C25.5364 0.995918 23.132 0 20.625 0C18.118 0 15.7136 0.995918 13.9409 2.76866C12.1681 4.54141 11.1722 6.94577 11.1722 9.45281C11.1722 11.9599 12.1681 14.3642 13.9409 16.137C15.7136 17.9097 18.118 18.9056 20.625 18.9056ZM20.625 23.0587C8.05688 23.0587 0 29.9944 0 33.3713V39.6769H41.25V33.3713C41.25 29.2875 33.6225 23.0587 20.625 23.0587Z" fill="black" />
                                            </svg>
                                        </span>
                                        Name
                                    </label>
                                    <input type="text" id='name' name='name' value={careers.name} className='w-full placeholder:text-[8px] placeholder:tracking-wide focus:outline-none font-Poppins text-xs rounded-md border py-1.5 px-1.5 bg-custom text-black border-none shadow shadow-gray-500' required />
                                    {errors.name && <span className='text-red-500 inline-block text-start font-Poppins font-normal leading-3 tracking-tight text-xs'>{errors.name}</span>}
                                </div>
                                <div className="">
                                    <label htmlFor="dob" className='flex justify-start mb-1.5 items-center font-Poppins leading-6 tracking-wide  text-gray-500 font-normal text-sm'>
                                        <span className='pr-2'>
                                            <svg className='size-4' viewBox="0 0 45 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.5 50H37.5C39.4891 50 41.3968 49.2098 42.8033 47.8033C44.2098 46.3968 45 44.4891 45 42.5V12.5C45 11.1739 44.4732 9.90215 43.5355 8.96447C42.5979 8.02678 41.3261 7.5 40 7.5H35V2.5C35 1.83696 34.7366 1.20107 34.2678 0.732233C33.7989 0.263392 33.163 0 32.5 0C31.837 0 31.2011 0.263392 30.7322 0.732233C30.2634 1.20107 30 1.83696 30 2.5V7.5H15V2.5C15 1.83696 14.7366 1.20107 14.2678 0.732233C13.7989 0.263392 13.163 0 12.5 0C11.837 0 11.2011 0.263392 10.7322 0.732233C10.2634 1.20107 10 1.83696 10 2.5V7.5H5C3.67392 7.5 2.40215 8.02678 1.46447 8.96447C0.526784 9.90215 0 11.1739 0 12.5V42.5C0 44.4891 0.790177 46.3968 2.1967 47.8033C3.60322 49.2098 5.51088 50 7.5 50ZM5 26.25C5 25.9185 5.1317 25.6005 5.36612 25.3661C5.60054 25.1317 5.91848 25 6.25 25H38.75C39.0815 25 39.3995 25.1317 39.6339 25.3661C39.8683 25.6005 40 25.9185 40 26.25V42.5C40 43.163 39.7366 43.7989 39.2678 44.2678C38.7989 44.7366 38.163 45 37.5 45H7.5C6.83696 45 6.20107 44.7366 5.73223 44.2678C5.26339 43.7989 5 43.163 5 42.5V26.25Z" fill="black" />
                                            </svg>
                                        </span>
                                        Date of Birth
                                    </label>
                                    <input type="date" id='Date of Birth' name='dob' value={careers.dob} className='w-full placeholder:text-[8px] placeholder:tracking-wide focus:outline-none font-Poppins text-xs rounded-md border py-1.5 px-1.5 bg-custom text-black border-none shadow shadow-gray-500' required />
                                    {errors.dob && <span className='text-red-500 inline-block text-start font-Poppins font-normal leading-3 tracking-tight text-xs'>{errors.dob}</span>}
                                </div>
                                <div className="">
                                    <label htmlFor="Location" className='flex justify-start mb-1.5 items-center font-Poppins leading-6 tracking-wide  text-gray-500 font-normal text-sm'>
                                        <span className='pr-2'>
                                            <svg className='size-4' viewBox="0 0 45 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M22.5 16.875C19.3931 16.875 16.875 19.3931 16.875 22.5C16.875 25.6069 19.3931 28.125 22.5 28.125C25.6069 28.125 28.125 25.6069 28.125 22.5C28.125 19.3931 25.6069 16.875 22.5 16.875ZM22.5 31.875C17.3231 31.875 13.125 27.6788 13.125 22.5C13.125 17.3212 17.3231 13.125 22.5 13.125C27.6769 13.125 31.875 17.3212 31.875 22.5C31.875 27.6788 27.6769 31.875 22.5 31.875ZM22.5 0C10.0744 0 0 10.0744 0 22.5C0 31.9088 18.7594 60.0206 22.5 60C26.1825 60.0206 45 31.7812 45 22.5C45 10.0744 34.9256 0 22.5 0Z" fill="black" />
                                            </svg>
                                        </span>
                                        Location
                                    </label>
                                    <input type="text" id='Location' value={careers.location} name='location' className='w-full placeholder:text-[8px] placeholder:tracking-wide focus:outline-none font-Poppins text-xs rounded-md border py-1.5 px-1.5 bg-custom text-black border-none shadow shadow-gray-500' required />
                                    {errors.location && <span className='text-red-500 inline-block text-start font-Poppins font-normal leading-3 tracking-tight text-xs'>{errors.location}</span>}
                                </div>
                                <div className="">
                                    <label htmlFor="Graduation" className='flex justify-start mb-1.5 items-center font-Poppins leading-6 tracking-wide  text-gray-500 font-normal text-sm'>
                                        <span className='pr-2'>
                                            <svg className='size-4' viewBox="0 0 56 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.8501 22.425L28 28L45.5 19.25M16.8501 22.425V37.425M16.8501 22.425L28 16.8501M16.8501 22.425L10.5 19.25M45.5 19.25V34.25L28 43L16.8501 37.425M45.5 19.25L53 15.5L28 3L3 15.5L10.5 19.25M16.8501 37.425V45.5M16.8501 37.425L10.5 34.25V19.25" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        Graduation
                                    </label>
                                    <input type="text" id='Graduation' name='graduation' value={careers.graduation} className='w-full placeholder:text-[8px] placeholder:tracking-wide focus:outline-none font-Poppins text-xs rounded-md border py-1.5 px-1.5 bg-custom text-black border-none shadow shadow-gray-500' required />
                                    {errors.graduation && <span className='text-red-500 inline-block text-start font-Poppins font-normal leading-3 tracking-tight text-xs'>{errors.graduation}</span>}
                                </div>
                            </div>
                            <div className="text-center flex justify-center items-center pt-4">
                                <button type='submit' className='transition duration-300 ease-in-out hover:shadow-custom-white active:translate-y-1 font-Poppins hover:shadow-gray-600 text-white bg-[#0222C9] block px-1.5 py-1.5 lg:px-4 lg:py-2 text-xs rounded-xl font-semibold'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )


}

export default Career