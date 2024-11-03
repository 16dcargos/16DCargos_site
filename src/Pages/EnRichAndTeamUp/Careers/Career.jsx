import React, { useRef, useState } from 'react'
import ImageTag from '../../../Components/ImageTag/ImageTag'
import sendEmail from '../../../email/sendEmail'
import toast from 'react-hot-toast'
import { jobsDetails } from '../../../DB/Jobs.json';
import { AnimatePresence, motion } from 'framer-motion';
import { uploadToCloudinary } from '../../../service/Cloudinary'



// url-gen/actions/upload
const Career = () => {

    const carouselRef = useRef(null);
    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const emailTemplateId = import.meta.env.VITE_API_TEMPLATE_ID
    const [errors, setErrors] = useState({})
    const [modal, setModal] = useState(false)
    const [careers, setCareers] = useState({
        name: '',
        dob: '',
        resume: null,
        email: "",
        contact_number: "",
        location: '',
        graduation: '',
        from_email: "logesh.r@16dcargos.com"
    })
    const [fetchDetails, setFetchDetails] = useState(null)

    const [apply, setApply] = useState({
        name: "",
        last_name: "",
        email: "",
        phone_number: "",
        file: null
    })
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
        if (careers.contact_number === '') {
            isError = true,
                errObj.contact_number = 'contact number is required!'
        }
        if (!careers.email?.trim()) {
            isError = true,
                errObj.email = "Email must not be empty!"
        } else if (!emailPattern.test(careers?.email)) {
            isError = true,
                errObj.email = "Email must in email pattern!"
        }

        if (careers.resume === null || '') {
            isError = true,
                errObj.resume = "Resume must not be empty!"
        }
        setErrors(errObj)
        return isError
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (validateForm()) {
            toast.error('Form have validation error!')
        } else {
            await uploadToCloudinary(careers.resume).then((res) => {
                const data = {
                    ...careers,
                    resume: res.secure_url
                }
                sendEmail(emailTemplateId, data)
                setCareers({
                    dob: "",
                    graduation: "",
                    location: "",
                    name: "",
                    contact_number: "",
                    email: "",
                    from_email: "",
                    resume: null
                })

            }).catch((err) => {
                console.log(err)
            })
        }

    }


    const handleInputChange = (e) => {

        const { name, value, files, type } = e.target

        if (name === 'contact_number' && value.length > 10) {
            toast.error('Maximum number of limit is reached!')
            return
        }

        if (name === 'resume') {
            const file = files[0];

            if (file && file.type !== 'application/pdf') {
                setErrors({ resume: "File Type must be PDF" })
            }
            setCareers({
                ...careers,
                resume: null,
            });
        } else {
            setCareers((preve) => ({
                ...preve,
                [name]: type === 'file' ? files[0] : value
            }))
        }

    }

    const handleFocus = (e) => {
        const { name } = e.target;

        setErrors((preve) => ({
            ...preve,
            [name]: ''
        }))
    }



    const handleApplyFormValidation = () => {
        const errObj = {}
        let isError = false

        if (!apply.name.trim()) {
            isError = true,
                errObj.name = 'First must not be empty!'
        }

        if (!apply.email?.trim()) {
            isError = true,
                errObj.email = "Email must not be empty!"
        } else if (!emailPattern.test(apply?.email)) {
            isError = true,
                errObj.email = "Email must in email pattern!"
        }

        if (apply.phone_number === '') {
            isError = true,
                errObj.phone_number = "Phone number must not be empty!"
        }

        if (apply.file === null || '') {
            isError = true,
                errObj.file = "Resume must not be empty!"
        }
        setErrors(errObj)
        return isError
    }

    // console.log(errors)

    const handleApplyChange = (e) => {
        const { name, value, files, type } = e.target

        if (name === 'phone_number' && value.length > 10) {
            toast.error('Maximum number of limit is reached!')
            return
        }

        if (type === 'file') {
            const file = files[0];

            if (file && file.type !== 'application/pdf') {
                setErrors({ file: "File Type must be PDF" })
            }
            setApply({
                ...apply,
                file: null,
            });
        }

        setApply((preve) => ({
            ...preve,
            [name]: type === 'file' ? files[0] : value
        }))
    }


    const handleApplyReset = () => {
        setApply({
            email: "", file: null, name: '', last_name: '', phone_number: ""
        });
    }

    const handleShowModel = (id) => {
        setModal(true)

        const data = jobsDetails && jobsDetails.find((item) => item.id === id ? id : '')
        setFetchDetails(data)
    }

    const handleApplySubmit = async (e) => {
        e.preventDefault()

        // console.log(fileUrl)
        if (handleApplyFormValidation()) {
            toast.error('Form have validation error!')
        } else {
            await uploadToCloudinary(apply.file).then((res) => {
                const data = {
                    ...apply,
                    file: res.secure_url
                }
                sendEmail(emailTemplateId, data)
                setApply({
                    email: "", file: null, name: '', last_name: '', phone_number: ""
                });

            }).catch((err) => {
                console.log(err)
            })
        }

    }


    const handleCloseModal = async () => {
        setModal((preve) => !preve)
    }

    const modalVariants = {
        hidden: {
            y: '100vh', // Start off-screen at the bottom
            opacity: 0,
        },
        visible: {
            y: 0,       // Move to the top (fully visible position)
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
            },
        },
        exit: {
            y: '100vh', // Exit back to the bottom of the screen
            opacity: 0,
            transition: {
                type: 'tween',
                duration: 0.9,
            },
        },
    };

    return (
        <React.Fragment>
            <section className="relative z-10 min-h-screen bg-custom overflow-hidden">
                <div className="absolute inset-0">
                    <ImageTag src={'https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725984922/heroCareer_n5u9ql.png'} alt="Background Image" className="object-cover object-center w-full h-full" />
                    {/* <div className="absolute inset-0 bg-black/50"></div> */}
                </div>

                <div className="relative space-y-5 mx-auto md:max-w-4xl max-w-xs z-10 flex flex-col justify-center items-center h-screen">
                    <h1 className="text-xl md:text-4xl lg:text-5xl text-center text-white lg:leading-tight p-2 tracking-tight flex justify-start flex-row font-semibold font-Poppins">Elevate Your Career with Us: Join to shape the future of logistics in Bharat and make a meaningful impact.</h1>
                    <p className='text-center font-Poppins md:text-sm text-xxs text-white font-normal md:leading-5 md:max-w-2xl max-w-xl tracking-wider '>Join our Dynamic team and elevate your career in the logistics industry. At our company, we provide a supportive environment where your skills and ambitions can flourish. Work with like-minded professionals, take on exciting challenges, and help shape the future of logistics in India. Team up with us and make a meaningful impact!</p>

                    <a href='#applyForm' className="bg-[#C96202] text-white active:translate-y-[6px] py-2.5 px-5 rounded-full text-xs font-medium tracking-wider font-Poppins transition duration-300 ease-in-out transform  hover:shadow-custom-white">Apply now</a>
                </div>
            </section>


            <section className='relative isolate bg-custom overflow-hidden '>
                <div className="mx-auto max-w-xl md:max-w-6xl px-4 py-4 md:py-6">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 place-items-center place-content-between">
                        <div className="bg-white w-full rounded-lg md:rounded-xl">
                            <ImageTag src={'https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725983862/joinus_yjm2jx.png'} alt={'why join us'} className={'w-full object-fill object-center'} />
                        </div>
                        <div className="w-full px-4 md:px-4 py-5 md:py-9">
                            <div className="space-y-5">
                                <h1 className='font-Poppins font-bold text-xl md:text-3xl leading-6 tracking-wide text-black'>Why Join Us:</h1>
                                <p className='text-xs md:text-sm text-black font-Poppins font-medium leading-6 tracking-wide'>At the heart of our organization, we cultivate a vibrant culture driven by innovation, teamwork, and continuous growth. We encourage our employees to think creatively and collaborate across teams, pushing the boundaries of what’s possible in the logistics industry. Our goal is not only to revolutionize the way goods are moved but to inspire each individual to reach their full potential. We are deeply committed to providing a supportive environment where learning, development, and career progression are prioritized. By joining our team, you’re not just contributing to impactful solutions—you’re embarking on a professional journey where your growth is our shared success.</p>
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

                            {jobsDetails && jobsDetails.length > 0 ? (
                                jobsDetails.map((item, index) => {
                                    return (
                                        <div key={index} className="space-y-2 md:min-w-[350px] min-w-[300px] bg-custom rounded-lg shadow-lg p-4 transform transition-transform duration-500 hover:scale-105 snap-center">
                                            <img src={item?.img ? item?.img : "https://loremflickr.com/800/600/cats"} alt="Image 1" className="rounded-lg mb-4" />
                                            <div className="flex justify-between items-center gap-2">
                                                <h3 className="text-sm font-semibold font-Poppins leading-6 tracking-tight">{item.title}</h3>
                                                <button type='button' onClick={() => handleShowModel(item.id)} className='bg-[#C96202] text-white active:translate-y-[6px] py-2 px-5 rounded-lg text-xs font-medium tracking-wider font-Poppins transition duration-300 ease-in-out transform shadow-md hover:shadow-gray-600 hover:shadow-custom-white'>Apply</button>
                                            </div>

                                            {item.hashTag.length > 0 && (
                                                item.hashTag.map((item, index) => (
                                                    <span key={index} className="inline-flex flex-wrap justify-start mr-2 items-center bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">{item}</span>
                                                ))
                                            )}
                                        </div>
                                    )
                                })
                            ) : (
                                <div className="text-center">
                                    <p>Currently we`re not hiring</p>
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
                    <div className="md:max-w-xl max-w-md w-full  shadow bg-white rounded-lg p-2 md:p-5">
                        <h1 className='text-2xl font-Poppins leading-6 tracking-wide font-bold text-black text-center'>Lets begin from here!</h1>
                        <form noValidate onSubmit={handleSubmit} onFocus={handleFocus} onChange={handleInputChange} className='mt-5 px-5'>
                            <div className="space-y-2">
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-5">

                                    <div className="mb-3">
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
                                    <div className="mb-3">
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
                                </div>

                                <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                                    <div className="mb-3">
                                        <label htmlFor="resume" className='flex justify-start mb-1.5 items-center font-Poppins leading-6 tracking-wide  text-gray-500 font-normal text-sm'>
                                            <span className='pr-2 pointer-events-none'>
                                                <svg className="size-5 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2 2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm-6 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h.5a2.5 2.5 0 0 0 0-5H5Zm1.5 3H6v-1h.5a.5.5 0 0 1 0 1Zm4.5-3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1.376A2.626 2.626 0 0 0 15 15.375v-1.75A2.626 2.626 0 0 0 12.375 11H11Zm1 5v-3h.375a.626.626 0 0 1 .625.626v1.748a.625.625 0 0 1-.626.626H12Zm5-5a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1h1a1 1 0 1 0 0-2h-2Z" clipRule="evenodd" />
                                                </svg>

                                            </span>
                                            Upload CV / Resume
                                        </label>
                                        <input type="file" id='resume' accept="application/pdf"  // Accept only PDF files
                                            name='resume' className='w-full placeholder:text-[8px] placeholder:tracking-wide focus:outline-none font-Poppins text-xs rounded-md border py-1.5 px-1.5 bg-custom text-black border-none shadow shadow-gray-500' required />
                                        {errors?.resume && <span className='text-red-500 inline-block text-start font-Poppins font-normal leading-3 tracking-tight text-xs'>{errors?.resume}</span>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className='flex justify-start mb-1.5 items-center font-Poppins leading-6 tracking-wide  text-gray-500 font-normal text-sm'>
                                            <span className='pr-2'>
                                                <svg className="size-5 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                                                    <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                                                </svg>
                                            </span>
                                            Email
                                        </label>
                                        <input type="email" id='email' name='email' value={careers.email} className='w-full placeholder:text-[8px] placeholder:tracking-wide focus:outline-none font-Poppins text-xs rounded-md border py-1.5 px-1.5 bg-custom text-black border-none shadow shadow-gray-500' required />
                                        {errors.email && <span className='text-red-500 inline-block text-start font-Poppins font-normal leading-3 tracking-tight text-xs'>{errors.email}</span>}
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="contact_number" className='flex justify-start mb-1.5 items-center font-Poppins leading-6 tracking-wide  text-gray-500 font-normal text-sm'>
                                        <svg className="size-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                                        </svg>
                                        Contact Number
                                    </label>
                                    <input type="number" id='contact_number' value={careers.contact_number} name='contact_number' className='w-full placeholder:text-[8px] placeholder:tracking-wide focus:outline-none font-Poppins text-xs rounded-md border py-1.5 px-1.5 bg-custom text-black border-none shadow shadow-gray-500' required />
                                    {errors.contact_number && <span className='text-red-500 inline-block text-start font-Poppins font-normal leading-3 tracking-tight text-xs'>{errors.contact_number}</span>}
                                </div>
                                <div className="mb-3">
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
                                <div className="mb-3">
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



            {modal && (
                <AnimatePresence>
                    <div
                        className="relative  overflow-auto">
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="fixed inset-0 bg-black/75 z-50 w-full flex justify-center items-center">
                            <div className="bg-white p-6 w-full h-screen max-w-full md:max-w-7xl mt-28 rounded-3xl overflow-scroll">
                                <div className="absolute inset-0 top-5 -z-10 px-5">
                                    <button onClick={handleCloseModal} className='inline-block float-end group'>
                                        <svg className="w-6 h-6 text-white group-hover:rotate-180 transition-all duration-500 ease-in-out" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18 17.94 6M18 18 6.06 6" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="max-w-md md:max-w-4xl">
                                    <div className="md:px-6 md:py-6 p-4">
                                        <div className="space-y-3">
                                            <h1 className='text-xl md:text-3xl mb-3 font-bold leading-6 tracking-wide font-Poppins'>{fetchDetails && fetchDetails.id ? fetchDetails.id : ''}. {fetchDetails && fetchDetails.title ? fetchDetails.title : '-'}</h1>
                                            <i className='font-Poppins leading-5 font-semibold tracking-wide  text-gray-700 text-sm'>Job Description :</i>
                                            <p className='font-Poppins leading-7 tracking-wide mt-3 text-gray-700 text-sm'>{fetchDetails && fetchDetails.job_description ? fetchDetails.job_description : '-'}</p>
                                        </div>
                                        <div className="md:mt-6 mt-3">
                                            {/* <h1 className='text-xl md:text-3xl mb-3 font-bold leading-6 tracking-wide font-Poppins'>{fetchDetails && fetchDetails.id ? fetchDetails.id : ''}. {fetchDetails && fetchDetails.title ? fetchDetails.title : '-'}</h1> */}
                                            <i className='font-Poppins leading-5 font-semibold tracking-wide  text-gray-700 text-sm '>Key Responsibilities :</i>
                                            {/* <p className='font-Poppins leading-7 tracking-wide mt-3 text-gray-700 text-sm'>{fetchDetails && fetchDetails.job_description ? fetchDetails.job_description : '-'}</p> */}
                                            <ul className='list-disc pl-6'>
                                                {fetchDetails && fetchDetails.key_response.length > 0 ?
                                                    (
                                                        fetchDetails?.key_response.map((item, index) => {
                                                            return (
                                                                <li key={index} className=' font-Poppins leading-7 tracking-wide mt-3 text-gray-700 text-sm'>{item}</li>
                                                            )
                                                        })
                                                    ) : (
                                                        ''
                                                    )
                                                }
                                            </ul>
                                        </div>
                                        <div className="md:mt-6 mt-3">
                                            {fetchDetails && fetchDetails.hashTag.length > 0 && (
                                                <>
                                                    <i className='font-Poppins leading-5 font-semibold tracking-wide  text-gray-700 text-sm '>Hashtags :</i>
                                                    <div className="flex items-center justify-start flex-wrap gap-x-4 md:mt- mt-3">
                                                        {fetchDetails && fetchDetails?.hashTag.map((item, index) => (
                                                            <span key={index}> {item} </span>
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <form noValidate onFocus={handleFocus} onReset={handleApplyReset} onSubmit={handleApplySubmit}>
                                        <div className="mx-auto md:max-w-7xl max-w-xl mb-12">
                                            <div className="my-4 border px-4 shadow-xl  sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 ">
                                                <div className="flex flex-col border-b justify-center sm:flex-row sm:items-center">
                                                    <div className="shrink-0 sm:py-3">
                                                        <h1 className='md:text-2xl text-xl text-center font-bold leading-6 tracking-wide text-black'>Let us find you for this role.</h1>
                                                    </div>
                                                </div>
                                                <div className="flex  justify-center flex-col gap-4 border-b py-4 sm:flex-row">
                                                    <label htmlFor='name' className="shrink-0 w-32 font-medium">Name <span className='text-xl font-bold text-red-500 inline-block'>*</span></label>
                                                    <div className="w-full">
                                                        <input type='text' placeholder="First Name" name='name' id='name' value={apply.name} onChange={handleApplyChange} className={`mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 sm:mr-4 sm:mb-0 focus:ring-1 ${errors?.name && 'ring-red-500 ring-1 placeholder:text-red-500'}`} />
                                                        {errors?.name && (
                                                            <span className='text-red-600 bg-red-300 text-xs mt-1 border-red-500 border rounded-xl inline-block py-1.5 font-normal font-Poppins px-1'>{errors?.name}</span>
                                                        )}
                                                    </div>
                                                    <div className="w-full">
                                                        <input type='text' placeholder="Last Name" name='last_name' id='last_name' value={apply.last_name} onChange={handleApplyChange} className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" />
                                                    </div>
                                                </div>
                                                <div className="flex justify-center flex-col gap-4 border-b py-4 sm:flex-row">
                                                    <label htmlFor='email' className="shrink-0 w-32 font-medium">Email <span className='text-xl font-bold text-red-500 inline-block'>*</span></label>
                                                    <div className="w-full">
                                                        <input placeholder="your.email@domain.com" value={apply.email} id='email' name='email' onChange={handleApplyChange} type='email' className={`w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1 ${errors?.email && 'ring-red-500 ring-1 placeholder:text-red-500'}`} />
                                                        {errors?.email && (
                                                            <span className='text-red-600 bg-red-300 text-xs mt-1 border-red-500 border rounded-xl inline-block py-1.5 font-normal font-Poppins px-1'>{errors?.email}</span>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="flex justify-center flex-col gap-4 border-b py-4 sm:flex-row">
                                                    <label htmlFor='phone_number' className="shrink-0 w-32 font-medium">Phone number <span className='text-xl font-bold text-red-500 inline-block'>*</span></label>
                                                    <div className="w-full">
                                                        <input type='number' placeholder="+91 1234 567 890" value={apply.phone_number} onChange={handleApplyChange} name='phone_number' id='phone_number' className={`w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1 ${errors?.phone_number && 'ring-red-500 ring-1 placeholder:text-red-500'}`} />
                                                        {errors?.phone_number && (
                                                            <span className='text-red-600 bg-red-300 text-xs mt-1 border-red-500 border rounded-xl inline-block py-1.5 font-normal font-Poppins px-1'>{errors?.phone_number}</span>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-4 py-4  lg:flex-row">
                                                    <div className="shrink-0 w-32  sm:py-4">
                                                        <label htmlFor='file' className="mb-auto font-medium">Reseume <span className='text-xl font-bold text-red-500 inline-block'>*</span></label>
                                                        <p className="text-sm text-gray-600">Upload pdf file only</p>
                                                    </div>
                                                    <div className={`flex justify-center items-center gap-12 rounded-xl border border-dashed ${errors?.phone_number && 'border-dashed border-red-400'} border-gray-300 p-5 text-center`}>
                                                        <input type="file" accept="application/pdf" id='file' name='file' onChange={handleApplyChange} className={`max-w-full text-center justify-center rounded-lg px-2 font-medium text-orange-500 outline-none ring-orange-500 focus:ring-1 `} />
                                                        {errors?.file && (
                                                            <span className='text-red-600 bg-red-300 text-xs mt-1 border-red-500 border rounded-xl inline-block py-1.5 font-normal font-Poppins px-1'>{errors?.file}</span>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-x-4 justify-end py-4">
                                                    <button type='reset' className="rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200">Cancel</button>
                                                    <button type='submit' className="rounded-lg border-2 border-transparent bg-orange-500 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700 transition-all duration-200 ease-in-out">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </AnimatePresence>
            )}

        </React.Fragment>
    )


}

export default Career