import React, { useState } from 'react'
import ImageTag from '../../../Components/ImageTag/ImageTag'
import OrangeBtn from '../../../Components/Buttons/OrangeBtn'
import sendEmail from '../../../email/sendEmail'
import toast from 'react-hot-toast'

const FullTruckLoaded = () => {


    const [email, setEmail] = useState('')
    const emailTemplateId = import.meta.env.VITE_API_TEMPLATE_ID
    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)

    const validateForm = () => {
        let isError = false
        const errorObj = {}
        if (!email.trim()) {
            isError = true;
            errorObj.email = 'Email Id is required!';
            setStatus('error')
        } else if (!emailPattern.test(email)) { // Validate only if email is provided
            isError = true;
            errorObj.email = 'Kindly enter proper email format!';
            setStatus('error')
        }
        //  Object.keys(errorObj).length === 0

        setError(errorObj); // Assuming you are using state to handle errors
        return !isError;
    }
    const [status, setStatus] = useState("idle")
    const handleNewsletterSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus('idle')
        if (validateForm()) {
            await sendEmail(emailTemplateId, { email }).then((res) => {
                if (res) {
                    setEmail('')
                    setStatus('success')
                    setLoading(false)
                }
            }).catch((err) => {
                console.log(err)
                setLoading(false)
                setStatus('error')
            }).finally(() => {
                setLoading(false)
            })
        } else {
            toast.error('Input has empty validaton error!')
        }
    }

    const onFocus = (e) => {
        const { name } = e.target;
        setError((preve) => ({ ...preve, [name]: '' }))
        setStatus('idle')
    }
    return (
        <React.Fragment>
            <section className="relative z-10 h-screen text-white overflow-hidden">
                <div className="absolute inset-0">
                    <ImageTag src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907877/FTL_kbrxbn.jpg"} alt="Background Image" className="object-cover object-center w-full h-full" />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative  max-w-xl md:max-w-4xl px-4 py-4 md:py-12 md:px-12 z-10 flex flex-col justify-center items-start h-screen">
                    <h1 className="text-2xl md:text-3xl xl:text-4xl text-center md:text-start leading-6 mb-5 tracking-wide flex justify-start flex-row font-bold font-Poppins">Streamline Your Logistics with Our Full Truck Load (FTL) Services</h1>
                    <p className='md:text-sm font-Poppins leading-normal md:leading-6 md:text-start text-center  tracking-wider text-white text-xs max-w-lg font-medium mb-6'>Experience unmatched efficiency and reliability in transporting full truckloads across India. Optimize your operations with our advanced FTL solutions.</p>
                    <div className="md:text-start text-center w-full">
                        <OrangeBtn text={'Book your Truck'} />
                    </div>
                </div>
            </section>

            <section className='relative isolate overflow-hidden bg-custom'>
                <div className="mx-auto md:max-w-3xl max-w-xl py-5 px-5 md:py-6">
                    <h1 className='md:text-3xl text-lg text-black font-Poppins font-bold leading-6 text-center tracking-wide'>Experience the Pinnacle of Logistics with Our Full Truck Load (FTL) Services</h1>
                </div>


                <div className="max-w-full md:max-w-6xl mx-auto px-4 py-4">
                    <h1 className='text-center p-3 text-black mb-5 font-bold leading-6 tracking-wide font-Poppins md:text-xl text-sm'>Why Choose Our FTL Services?</h1>
                    <div className="grid md:grid-cols-2 gap-x-8  grid-cols-1">
                        <div className="w-full h-full  rounded-md md:rounded-lg mb-8">
                            <ImageTag src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907914/ftlservice_vsyncl.png"} alt={'Ftl Service'} className={'aspect-auto md:aspect-[11/12] lg:aspect-auto w-full h-auto object-center object-fill'} />
                        </div>

                        <div className="">
                            <div className="space-y-3">
                                <div className="flex items-center justify-self-start gap-4">
                                    <svg className='size-5' viewBox="0 0 60 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.978 0.852539C22.2876 0.852539 14.6118 3.78223 8.76709 9.62695C-2.92236 21.3164 -2.92236 40.3594 8.76709 52.0488C10.2319 53.5137 12.605 53.5137 14.0698 52.0488C15.5347 50.584 15.5347 48.2109 14.0698 46.7461C5.25147 37.9277 5.25147 23.748 14.0698 14.9297C22.8882 6.11133 37.0679 6.11133 45.8862 14.9297C53.2837 22.3272 54.4702 33.5039 49.4604 42.1025C48.4937 43.7725 47.3071 45.3252 45.8862 46.7461C44.4214 48.2109 44.4214 50.584 45.8862 52.0488C47.3511 53.5137 49.7241 53.5137 51.189 52.0488C62.8784 40.3594 62.8784 21.3164 51.189 9.62695C45.3442 3.78223 37.6685 0.852539 29.978 0.852539ZM49.4604 42.1025L48.0981 36.9902L37.478 30.8525C37.478 28.1719 36.0425 25.7109 33.728 24.3633C30.1392 22.2979 25.5542 23.5283 23.4888 27.1025C21.4087 30.6914 22.6392 35.291 26.228 37.3564C28.5425 38.6895 31.3989 38.6748 33.7134 37.3418L44.3481 43.4795L49.4604 42.1025Z" fill="#FF8E26" />
                                    </svg>

                                    <h2 className='font-bold font-Poppins leading-6 tracking-wide xl:text-lg md:text-sm text-sm'>Unmatched Efficiency and Reliability</h2>
                                </div>
                                <p className='font-medium font-Poppins leading-6  tracking-wide text-black md:text-xs text-xs'>At the heart of our logistics solutions is our Full Truck Load (FTL) service. We are committed to delivering your goods with the highest standards of efficiency and reliability. Our expertise ensures that your cargo is transported swiftly and safely across India.</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-start items-center gap-4 mt-6">
                                    <svg className='size-5' viewBox="0 0 55 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.55363 49.0298C1.14321 49.0298 0 50.1734 0 51.5834V57.4464C0 58.8564 1.14321 60 2.55363 60C3.96385 60 5.10727 58.8564 5.10727 57.4464V51.5834C5.10727 50.1734 3.96365 49.0298 2.55363 49.0298Z" fill="#FF8E26" />
                                        <path d="M14.8111 36.7725C13.4009 36.7725 12.2574 37.9161 12.2574 39.3261V57.4465C12.2574 58.8565 13.4009 60.0001 14.8111 60.0001C16.2213 60.0001 17.3647 58.8565 17.3647 57.4465V39.3261C17.3647 37.9161 16.2211 36.7725 14.8111 36.7725Z" fill="#FF8E26" />
                                        <path d="M27.0685 24.5149C25.6583 24.5149 24.5149 25.6583 24.5149 27.0685V57.4466C24.5149 58.8568 25.6583 60 27.0685 60C28.4785 60 29.6222 58.8568 29.6222 57.4466V27.0685C29.6222 25.6583 28.4785 24.5149 27.0685 24.5149Z" fill="#FF8E26" />
                                        <path d="M39.326 12.2573C37.9158 12.2573 36.7723 13.4007 36.7723 14.811V57.4464C36.7723 58.8567 37.9158 59.9999 39.326 59.9999C40.7362 59.9999 41.8796 58.8567 41.8796 57.4464V14.811C41.8796 13.4007 40.7362 12.2573 39.326 12.2573Z" fill="#FF8E26" />
                                        <path d="M51.5834 0C50.1732 0 49.0298 1.14342 49.0298 2.55363V57.4466C49.0298 58.8568 50.1732 60 51.5834 60C52.9936 60 54.1371 58.8568 54.1371 57.4466V2.55363C54.1371 1.14342 52.9936 0 51.5834 0Z" fill="#FF8E26" />
                                    </svg>
                                    <h2 className='font-bold font-Poppins leading-6 tracking-wide xl:text-lg md:text-sm text-sm'>Nationwide Coverage</h2>
                                </div>
                                <p className='font-medium font-Poppins leading-6 tracking-wide text-black md:text-xs text-xs'>No matter where your destination is within India, our FTL services have you covered. We provide extensive coverage across the country, ensuring that your goods reach their destination on time, every time.</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-start items-center gap-4 mt-6">
                                    <svg className='size-5' viewBox="0 0 55 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40 60V27.5H55V60H40ZM45 32.5V55H50V32.5H45ZM35 60H20V40H35V60ZM25 55H30V45H25V55ZM15 60H0V45H15V60ZM5 55H10V50H5V55ZM0 40V35C19.5 35 32 26.5 40.25 7.75L29.5 12L27.5 7.25L46.25 0L53.75 18L49 20L44.75 9.5C35.75 30.25 21.5 40 0 40Z" fill="#FF8E26" />
                                    </svg>
                                    <h2 className='font-bold font-Poppins leading-6 tracking-wide xl:text-lg md:text-sm text-sm'>Optimized Routes and Operations</h2>
                                </div>
                                <p className='font-medium font-Poppins leading-6 tracking-wide text-black md:text-xs text-xs'>Our advanced logistics technology allows us to optimize routes and operations, reducing transit times and costs. By choosing our FTL services, you benefit from our sophisticated planning and execution strategies that ensure smooth and timely deliveries.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='bg-custom relative isolate overflow-hidden'>
                <div className="max-w-full md:max-w-6xl mx-auto px-4 py-4">
                    <h1 className='text-center p-3 text-black mb-5 font-bold leading-6 tracking-wide font-Poppins md:text-xl text-sm'>Our Commitment to Excellence</h1>
                    <div className="grid md:grid-cols-2 gap-x-8  grid-cols-1">
                        <div className="w-full h-full  rounded-md md:rounded-lg md:hidden block mb-8">
                            <ImageTag src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907956/commitmentex_wcbzds.png"} alt={'commitmentex'} className={'aspect-auto md:aspect-[11/12] lg:aspect-auto w-full h-auto object-center object-fill'} />
                        </div>

                        <div className="">
                            <div className="space-y-3">
                                <div className="flex items-center justify-self-start gap-4">
                                    <svg className='size-5' viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M45 5H15C10.85 5 7.5 8.325 7.5 12.425V39.7C7.5 43.8 10.85 47.125 15 47.125H16.9C18.9 47.125 20.8 47.9 22.2 49.3L26.475 53.525C28.425 55.45 31.6 55.45 33.55 53.525L37.825 49.3C39.225 47.9 41.15 47.125 43.125 47.125H45C49.15 47.125 52.5 43.8 52.5 39.7V12.425C52.5 8.325 49.15 5 45 5ZM25.95 32.525C26.975 32.525 27.825 33.375 27.825 34.4C27.825 35.425 26.975 36.275 25.95 36.275H19.25C18.15 36.275 17.125 35.75 16.475 34.85C15.85 34 15.7 32.95 16 31.95C16.875 29.275 19.025 27.825 20.925 26.525C22.925 25.175 24.05 24.325 24.05 22.875C24.05 21.575 23 20.525 21.7 20.525C20.4 20.525 19.375 21.6 19.375 22.9C19.375 23.925 18.525 24.775 17.5 24.775C16.475 24.775 15.625 23.925 15.625 22.9C15.625 19.55 18.35 16.8 21.725 16.8C25.1 16.8 27.825 19.525 27.825 22.9C27.825 26.425 25.175 28.225 23.05 29.675C21.725 30.575 20.475 31.425 19.85 32.55H25.95V32.525ZM42.5 32.7H41.975V34.425C41.975 35.45 41.125 36.3 40.1 36.3C39.075 36.3 38.225 35.45 38.225 34.425V32.7H33.325C33.325 32.7 33.325 32.7 33.3 32.7C32.075 32.7 30.95 32.05 30.325 31C29.7 29.925 29.7 28.6 30.325 27.55C32.025 24.625 34 21.3 35.8 18.4C36.6 17.125 38.125 16.55 39.55 16.95C40.975 17.375 41.975 18.675 41.95 20.175V28.975H42.5C43.525 28.975 44.375 29.825 44.375 30.85C44.375 31.875 43.525 32.7 42.5 32.7Z" fill="#FF8E26" />
                                        <path d="M38.2228 28.9515V21.6016C36.7478 24.0016 35.2228 26.5765 33.8478 28.9265H38.2228V28.9515Z" fill="#FF8E26" />
                                    </svg>

                                    <h2 className='font-bold font-Poppins leading-6 tracking-wide xl:text-lg md:text-sm text-sm'>Dedicated Support</h2>
                                </div>
                                <p className='font-medium font-Poppins leading-6  tracking-wide text-black md:text-xs text-xs'>From the moment you book our FTL service, our dedicated support team is with you every step of the way. We offer round-the-clock assistance to ensure all your logistics needs are met promptly and efficiently.</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-start items-center gap-4 mt-6">
                                    <svg className='size-5' viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.91797 26.1362C5.53679 24.9332 3.84619 24.3315 3.34249 23.4192C2.90599 22.6285 2.88557 21.6737 3.28787 20.8652C3.75212 19.9321 5.41547 19.2588 8.74214 17.9123L40.0988 5.22034C43.375 3.89416 45.0133 3.23109 46.0483 3.57106C46.9465 3.86616 47.651 4.57069 47.9463 5.46899C48.2863 6.50391 47.623 8.14211 46.297 11.4185L33.605 42.775C32.2585 46.1017 31.5853 47.7652 30.652 48.2295C29.8435 48.6317 28.8888 48.6112 28.098 48.1747C27.1858 47.671 26.584 45.9805 25.381 42.5992L21.6975 32.2472C21.4635 31.5895 21.3465 31.2605 21.1553 30.986C20.986 30.7425 20.7748 30.5312 20.5313 30.362C20.2567 30.1707 19.9277 30.0537 19.2699 29.8197L8.91797 26.1362Z" stroke="#FF8E26" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <h2 className='font-bold font-Poppins leading-6 tracking-wide xl:text-lg md:text-sm text-sm'>Real-Time Tracking</h2>
                                </div>
                                <p className='font-medium font-Poppins leading-6 tracking-wide text-black md:text-xs text-xs'>Stay informed with our real-time tracking feature. You can monitor your shipment’s progress at any time, providing you with peace of mind and the ability to plan ahead with confidence.</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-start items-center gap-4 mt-6">
                                    <svg className='size-5' viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M36.3937 8.33037L19.5187 0.830367C19.277 0.721709 19.015 0.665527 18.75 0.665527C18.485 0.665527 18.223 0.721709 17.9813 0.830367L1.10625 8.33037C0.777281 8.47824 0.497945 8.71786 0.301731 9.0205C0.105517 9.32313 0.000752553 9.67594 0 10.0366V26.0866C0.0129154 28.3692 0.505298 30.6237 1.44524 32.7038C2.38518 34.7839 3.7517 36.6434 5.45625 38.1616L17.5125 48.8679C17.8547 49.1685 18.2945 49.3342 18.75 49.3342C19.2055 49.3342 19.6453 49.1685 19.9875 48.8679L32.0438 38.1616C33.7483 36.6434 35.1148 34.7839 36.0548 32.7038C36.9947 30.6237 37.4871 28.3692 37.5 26.0866V10.0366C37.4992 9.67594 37.3945 9.32313 37.1983 9.0205C37.0021 8.71786 36.7227 8.47824 36.3937 8.33037ZM33.75 26.0866C33.7536 27.8576 33.3811 29.6091 32.657 31.2253C31.933 32.8414 30.8739 34.2854 29.55 35.4616L18.75 45.0241L7.95 35.4241C6.62606 34.2479 5.56703 32.8039 4.84298 31.1878C4.11893 29.5716 3.74639 27.8201 3.75 26.0491V11.2554L18.75 4.58037L33.75 11.2554V26.0866Z" fill="#FF8E26" />
                                        <path d="M13.125 21.8303C12.7719 21.4772 12.2931 21.2789 11.7937 21.2789C11.2944 21.2789 10.8156 21.4772 10.4625 21.8303C10.1094 22.1834 9.91107 22.6622 9.91107 23.1615C9.91107 23.6608 10.1094 24.1397 10.4625 24.4928L15.15 29.1803C15.3243 29.356 15.5317 29.4955 15.7602 29.5907C15.9886 29.6859 16.2337 29.7349 16.4812 29.7349C16.7288 29.7349 16.9738 29.6859 17.2023 29.5907C17.4308 29.4955 17.6382 29.356 17.8125 29.1803L27.1875 19.8053C27.5406 19.4323 27.731 18.9344 27.7169 18.421C27.7029 17.9076 27.4855 17.4208 27.1125 17.0678C26.7395 16.7147 26.2416 16.5243 25.7282 16.5383C25.2148 16.5524 24.7281 16.7698 24.375 17.1428L16.3312 25.2053L13.125 21.8303Z" fill="#FF8E26" />
                                    </svg>
                                    <h2 className='font-bold font-Poppins leading-6 tracking-wide xl:text-lg md:text-sm text-sm'>Safety and Security</h2>
                                </div>
                                <p className='font-medium font-Poppins leading-6 tracking-wide text-black md:text-xs text-xs'>We prioritize the safety and security of your goods. Our FTL services include stringent safety measures and protocols to protect your cargo throughout its journey. Rest assured, your shipment is in safe hands.</p>
                            </div>
                        </div>

                        <div className="w-full h-full  rounded-md md:rounded-lg hidden md:block mb-8">
                            <ImageTag src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907956/commitmentex_wcbzds.png"} alt={'commitmentex'} className={'aspect-auto md:aspect-[11/12] lg:aspect-auto w-full h-auto object-center object-fill'} />
                        </div>
                    </div>
                </div>
            </section>


            <section className='relative isolate overflow-hidden bg-custom'>
                <div className="max-w-full md:max-w-6xl mx-auto px-4 py-4">
                    <h1 className='text-center p-3 text-black mb-5 font-bold leading-6 tracking-wide font-Poppins md:text-xl text-sm'>Customer-Centric Approach</h1>
                    <div className="grid md:grid-cols-2 gap-x-8  grid-cols-1">
                        <div className="w-full h-full  rounded-md md:rounded-lg mb-8">
                            <ImageTag src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907897/customer_fs4bfd.png"} alt={'customer Service'} className={'aspect-auto md:aspect-[11/12] lg:aspect-auto w-full h-auto object-center object-fill'} />
                        </div>

                        <div className="">
                            <div className="space-y-3">
                                <div className="flex items-center justify-self-start gap-4">
                                    <svg className='size-5' viewBox="0 0 42 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.574 0.109593C8.77396 1.20959 0.873962 8.90959 0.073962 18.5096C-0.526038 25.5096 2.57396 31.9096 7.57396 36.0096C9.07396 37.2096 9.97396 39.0096 9.97396 40.9096V41.0096C9.97396 43.8096 12.274 46.1096 15.174 46.1096H26.774C29.674 46.1096 31.974 43.8096 31.974 41.0096V40.9096C31.974 39.0096 32.874 37.2096 34.374 36.0096C38.974 32.2096 41.974 26.6096 41.974 20.3096C41.974 8.30959 31.274 -1.19041 18.574 0.109593Z" fill="#FF8E26" />
                                        <path d="M29.9739 52.0096H11.9739C10.8739 52.0096 9.97394 52.9096 9.97394 54.0096C9.97394 57.3096 12.6739 60.0096 15.9739 60.0096H25.9739C29.2739 60.0096 31.9739 57.3096 31.9739 54.0096C31.9739 52.9096 31.0739 52.0096 29.9739 52.0096Z" fill="#FF8E26" />
                                    </svg>
                                    <h2 className='font-bold font-Poppins leading-6 tracking-wide xl:text-lg md:text-sm text-sm'>Tailored Solutions</h2>
                                </div>
                                <p className='font-medium font-Poppins leading-6  tracking-wide text-black md:text-xs text-xs'>We understand that every customer’s needs are unique. Our FTL services are flexible and can be tailored to meet your specific requirements. Whether you have special handling needs or time-sensitive deliveries, we customize our services to fit your needs perfectly.</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-start items-center gap-4 mt-6">
                                    <svg className='size-5' viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M50.9771 2.29622C50.4913 1.80478 49.9126 1.41492 49.2746 1.14935C48.6366 0.883776 47.9522 0.7478 47.2611 0.749342H32.8553C31.9103 0.751103 31.0041 1.12545 30.3334 1.79114L1.53457 30.5841C0.551892 31.5688 0 32.9031 0 34.2943C0 35.6854 0.551892 37.0197 1.53457 38.0044L15.2455 51.7154C16.2304 52.6985 17.5652 53.2506 18.9568 53.2506C20.3485 53.2506 21.6832 52.6985 22.6682 51.7154L51.4553 22.9341C52.1223 22.2645 52.498 21.3586 52.5006 20.4134V5.99934C52.5048 5.31192 52.3724 4.63051 52.1108 3.99476C51.8493 3.35902 51.4639 2.78164 50.9771 2.29622ZM41.2506 15.7493C40.5089 15.7493 39.7839 15.5294 39.1672 15.1174C38.5505 14.7053 38.0699 14.1196 37.786 13.4344C37.5022 12.7492 37.4279 11.9952 37.5726 11.2678C37.7173 10.5403 38.0745 9.87214 38.5989 9.34769C39.1234 8.82324 39.7916 8.46609 40.519 8.3214C41.2464 8.1767 42.0004 8.25096 42.6856 8.53479C43.3709 8.81862 43.9565 9.29927 44.3686 9.91595C44.7806 10.5326 45.0006 11.2577 45.0006 11.9993C45.0006 12.9939 44.6055 13.9477 43.9022 14.651C43.199 15.3543 42.2451 15.7493 41.2506 15.7493Z" fill="#FF8E26" />
                                    </svg>
                                    <h2 className='font-bold font-Poppins leading-6 tracking-wide xl:text-lg md:text-sm text-sm'>Competitive Pricing</h2>
                                </div>
                                <p className='font-medium font-Poppins leading-6 tracking-wide text-black md:text-xs text-xs'>Quality service doesn’t have to come at a high cost. Our FTL services are competitively priced, offering you the best value for your money. We believe in providing top-notch logistics solutions at affordable rates.</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-start items-center gap-4 mt-6">
                                    <svg className='size-5' viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M46.9987 27.6494C43.6925 25.1719 38.9838 25.8456 36.515 29.1306C35.9625 29.8444 34.9412 30.9756 33.625 32.1231C31.015 28.5419 24.94 26.1506 17.5 26.1506C7.52375 26.1506 0 30.4494 0 36.1506V51.1506H25C38.5863 51.1506 48.1012 38.6819 48.5012 38.1519C50.9812 34.8419 50.3088 30.1319 46.9987 27.6494ZM25 46.1506H7.5H5V36.1506C5 34.1119 9.87 31.1506 17.5 31.1506C23.7188 31.1506 28.1025 33.1169 29.5125 34.9481C28.075 35.6694 26.5362 36.1506 25 36.1506H15V41.1506H25C33.7175 41.1506 40.4412 32.2306 40.4987 32.1519C41.325 31.0494 42.8975 30.8244 44 31.6506C45.1025 32.4781 45.3275 34.0494 44.5 35.1519C44.1637 35.5994 36.1162 46.1506 25 46.1506Z" fill="#FF8E26" />
                                        <path d="M25 24.0631C29.8325 24.0631 33.75 20.4256 33.75 15.9381C33.75 7.81312 25 0.849365 25 0.849365C25 0.849365 16.25 7.81312 16.25 15.9381C16.25 20.4256 20.1675 24.0631 25 24.0631Z" fill="#FF8E26" />
                                    </svg>
                                    <h2 className='font-bold font-Poppins leading-6 tracking-wide xl:text-lg md:text-sm text-sm'>Sustainable Practices</h2>
                                </div>
                                <p className='font-medium font-Poppins leading-6 tracking-wide text-black md:text-xs text-xs'>We are committed to sustainable logistics practices. Our optimized routes and efficient operations contribute to reducing our carbon footprint, making our FTL services an eco-friendly choice.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className='bg-custom relative isolate overflow-hidden'>
                <div className="mx-auto md:max-w-6xl max-w-xl px-4 py-4 md:py-8">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 lg:gap-12">
                        <div className="px-4 py-4">
                            <h1 className='md:text-4xl text-xl font-Poppins text-black font-bold leading-6 tracking-wide'>Get Started with Our FTL Services</h1>
                            <p className='font-Poppins mt-3 md:mt-6 text-sm leading-6 tracking-wide text-black font-medium'>Ready to experience the best in logistics? Contact us today to learn more about our Full Truck Load (FTL) services and how we can help streamline your supply chain. Our team is here to answer any questions and provide you with a customized solution that meets your needs.</p>
                        </div>

                        <div className="md:pt-5 max-w-md">
                            <form noValidate onSubmit={handleNewsletterSubmit} onFocus={onFocus} className='space-y-4'>
                                <div className="relative">
                                    <div className="">
                                        <input type='email' id='email' name='email' value={email} placeholder='Email' className={`rounded-xl ${error.email && 'ring-1 ring-red-500 placeholder:text-red-500'} px-3 py-2.5 placeholder:font-Poppins placeholder:text-xs leading-6 tracking-wide font-Poppins  text-black text-xs focus:outline-none focus:ring-0 w-full focus:shadow-custom-white focus:shadow-gray-600 shadow-md transition-all duration-500 ease-in-out`} />
                                        <div className="absolute inset-y-0 end-0 grid place-content-center px-2 pointer-events-none">
                                            <svg className={`size-5 ${error.email && 'fill-red-500'}`} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M47.4011 22.8697C47.4364 23.8632 48.2704 24.6399 49.264 24.6045C50.2574 24.5692 51.0343 23.7351 50.9987 22.7416L47.4011 22.8697ZM38.9135 13.2057V15.0057C38.9337 15.0057 38.9536 15.0053 38.9738 15.0047L38.9135 13.2057ZM23.4863 13.2057L23.4262 15.0047C23.4463 15.0053 23.4663 15.0057 23.4863 15.0057V13.2057ZM11.4011 22.7416C11.3657 23.7351 12.1424 24.5692 13.1359 24.6045C14.1294 24.6399 14.9634 23.8632 14.9988 22.8697L11.4011 22.7416ZM50.9999 22.8057C50.9999 21.8116 50.194 21.0057 49.1999 21.0057C48.2059 21.0057 47.3999 21.8116 47.3999 22.8057H50.9999ZM49.1999 37.2058L50.9987 37.2696C50.9995 37.2485 50.9999 37.2271 50.9999 37.2058H49.1999ZM38.9135 46.8058L38.9738 45.0067C38.9536 45.006 38.9337 45.0058 38.9135 45.0058V46.8058ZM23.4863 46.8058V45.0058C23.4663 45.0058 23.4463 45.006 23.4262 45.0067L23.4863 46.8058ZM13.1999 37.2058H11.3999C11.3999 37.2271 11.4003 37.2485 11.4011 37.2696L13.1999 37.2058ZM14.9999 22.8057C14.9999 21.8116 14.1941 21.0057 13.1999 21.0057C12.2058 21.0057 11.3999 21.8116 11.3999 22.8057H14.9999ZM50.1079 24.3599C50.9663 23.8585 51.2555 22.7561 50.7542 21.8978C50.2528 21.0394 49.1505 20.75 48.292 21.2514L50.1079 24.3599ZM36.5663 30.1858L35.6584 28.6313L35.6435 28.6402L36.5663 30.1858ZM25.8335 30.1858L26.7566 28.6402L26.7415 28.6315L25.8335 30.1858ZM14.1079 21.2514C13.2495 20.75 12.1471 21.0394 11.6457 21.8978C11.1443 22.7561 11.4336 23.8585 12.292 24.3599L14.1079 21.2514ZM50.9987 22.7416C50.7681 16.2609 45.3347 11.1901 38.8533 11.4067L38.9738 15.0047C43.4709 14.8544 47.2411 18.3729 47.4011 22.8697L50.9987 22.7416ZM38.9135 11.4057H23.4863V15.0057H38.9135V11.4057ZM23.5465 11.4067C17.0652 11.1901 11.6319 16.2609 11.4011 22.7416L14.9988 22.8697C15.1589 18.3729 18.929 14.8544 23.4262 15.0047L23.5465 11.4067ZM47.3999 22.8057V37.2058H50.9999V22.8057H47.3999ZM47.4011 37.1417C47.2411 41.6386 43.4709 45.157 38.9738 45.0067L38.8533 48.6046C45.3347 48.8213 50.7681 43.7506 50.9987 37.2696L47.4011 37.1417ZM38.9135 45.0058H23.4863V48.6058H38.9135V45.0058ZM23.4262 45.0067C18.929 45.157 15.1589 41.6386 14.9988 37.1417L11.4011 37.2696C11.6319 43.7506 17.0652 48.8213 23.5465 48.6046L23.4262 45.0067ZM14.9999 37.2058V22.8057H11.3999V37.2058H14.9999ZM48.292 21.2514L35.6584 28.6313L37.4743 31.74L50.1079 24.3599L48.292 21.2514ZM35.6435 28.6402C32.9066 30.2748 29.4935 30.2748 26.7566 28.6402L24.9107 31.7311C28.7843 34.0445 33.6155 34.0445 37.4891 31.7311L35.6435 28.6402ZM26.7415 28.6315L14.1079 21.2514L12.292 24.3599L24.9256 31.74L26.7415 28.6315Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <button type='submit' className='capitalize hover:shadow-custom-white hover:shadow-gray-500 shadow-sm transition-all duration-300 ease-in-out font-medium lg:w-1/2 inline-flex gap-2 justify-center items-center active:translate-y-[6px] w-full  bg-[#002CBF] rounded-xl px-2 py-3 text-white text-sm font-Poppins leading-6 tracking-wide'>
                                    Book your truck now
                                    <svg className='size-4' viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.25516 14.5952C1.76076 20.3576 17.1664 25.532 17.1664 25.532C17.1664 25.532 22.3409 40.9376 28.1033 37.4432C34.2185 33.7136 41.5433 10.7984 36.7049 5.99359C31.8665 1.18879 8.98477 8.47997 5.25516 14.5952Z" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M26.8758 15.8216L17.1654 25.532" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default FullTruckLoaded