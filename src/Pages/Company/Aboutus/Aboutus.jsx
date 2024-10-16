import React, { useState } from 'react'
import ImageTag from '../../../Components/ImageTag/ImageTag';
import { Link } from 'react-router-dom';
import sendEmail from '../../../email/sendEmail';
import toast from 'react-hot-toast';
import Model from '../../../Components/model/Model';
import { AnimatePresence } from 'framer-motion';
export default function Aboutus() {
    const [email, setEmail] = useState('')
    const emailTemplateId = import.meta.env.VITE_API_TEMPLATE_ID
    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const [error, setError] = useState({})
    const [isOpen, setIsOpen] = useState(false);
    const [quoteErr, setQuoteErr] = useState({})
    const [quote, setQuote] = useState({
        full_name: "",
        email: "",
        phone_number: "",
        summary: ''
    })

    const fields = [
        { placeholder: 'Full name', id: "full_name", name: "full_name", value: quote.full_name, type: 'text', isRequired: true, isTextArea: false },
        { placeholder: 'Email', id: "email", name: "email", value: quote.email, type: 'email', isRequired: true, isTextArea: false },
        { placeholder: 'Phone number', id: "phone_number", name: "phone_number", value: quote.phone_number, type: 'number', isRequired: true, isTextArea: false },
        { placeholder: 'Summary', id: "summary", name: "summary", value: quote.summary, type: 'text', isRequired: true, isTextArea: true },
    ]


    const faq = [
        { id: 0, title: "What is the company’s current financial status?", answer: "We provide detailed financial statements and performance metrics in our investor reports. These include revenue, profit margins, and growth trends." },
        { id: 1, title: "What are the key drivers of growth for the company?", answer: "Our growth is driven by expanding market opportunities, innovation in logistics solutions, and strategic partnerships that enhance our service offerings." },
        { id: 2, title: "How does the company plan to use the investment funds?", answer: "Investment funds will be allocated towards scaling operations, expanding market reach, enhancing technology infrastructure, and accelerating innovation initiatives." },
        { id: 3, title: "What is the company’s market position and competitive advantage?", answer: "We hold a strong position in the logistics market with a competitive edge through our nationwide coverage, cutting-edge solutions, and a commitment to customer satisfaction." },
        { id: 4, title: "What are the company’s long-term strategic goals?", answer: "Our long-term goals include becoming a leading player in the logistics industry, expanding our services across new regions, and driving sustainable growth through innovation." },
        { id: 5, title: "What is the expected return on investment (ROI)?", answer: "We provide projections and insights into expected ROI based on market trends, company performance, and strategic plans. Detailed forecasts are available in our investor presentations." },
        { id: 6, title: "How does the company manage risks?", answer: "We employ a comprehensive risk management strategy that includes monitoring market trends, managing operational risks, and implementing mitigation plans to safeguard investments." },
        { id: 7, title: "Are there opportunities for investors to engage with the company?", answer: "Yes, investors can engage through regular updates, investor meetings, and opportunities to provide feedback on strategic initiatives." },
        { id: 8, title: "What are the company’s recent milestones and achievements?", answer: "Recent milestones include significant contract wins, successful expansions, and advancements in technology. Details are outlined in our latest annual reports." },
        { id: 9, title: "How does the company address sustainability and corporate social responsibility (CSR)?", answer: "We are committed to sustainability by incorporating eco-friendly practices and CSR initiatives that positively impact communities and the environment." },
        { id: 10, title: "What is the company’s approach to innovation?", answer: "Our approach involves investing in research and development, adopting new technologies, and continuously improving our logistics solutions to stay ahead in the industry." },
        { id: 11, title: "How can potential investors get in touch?", answer: "Potential investors can contact us through our investor relations team via email, phone, or by scheduling a meeting through our website’s investor contact form." },
        { id: 12, title: "What are the company's plans for international expansion?", answer: "We have strategic plans for expanding into new international markets, leveraging our successful model and adapting to regional demands." },
        { id: 13, title: "What is the company’s valuation?", answer: "Our current valuation is detailed in the latest financial reports and investor presentations. This includes an assessment of market position and growth potential." },
        { id: 14, title: "How often are financial reports and updates provided to investors?", answer: "Financial reports and updates are provided quarterly and annually, along with regular investor briefings to keep stakeholders informed of our progress and performance." },
    ]

    const [visibleFaqs, setVisibleFaqs] = useState(5);

    // Function to show 5 more FAQs
    const showMore = () => {
        setVisibleFaqs((prevVisible) => prevVisible + 5);
    };

    const validateForm = () => {
        let isError = false
        const errorObj = {}
        if (!email.trim()) {
            isError = true;
            errorObj.email = 'Email Id is required!';
        } else if (!emailPattern.test(email)) { // Validate only if email is provided
            isError = true;
            errorObj.email = 'Kindly enter proper email format!';
        }
        //  Object.keys(errorObj).length === 0

        setError(errorObj); // Assuming you are using state to handle errors
        return !isError;
    }
    const handleNewsletterSubmit = async (e) => {
        e.preventDefault()

        if (validateForm()) {
            await sendEmail(emailTemplateId, { email })
        } else {
            toast.error('Kindly fill the email address!')
        }
    }

    const onFocus = (e) => {
        const { name } = e.target;
        setError((preve) => ({ ...preve, [name]: '' }))
    }

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleQuoteInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone_number' && value.length > 10) {
            toast.error('Phone number fields limit reached!')
            return;
        }
        setQuote((preve) => ({
            ...preve,
            [name]: value
        }))
    }

    const validateQuoteForm = () => {
        let isError = false;
        const errObj = {}

        if (!quote.full_name.trim()) {
            isError = true,
                errObj.full_name = 'Full is required!'
        }

        if (!quote.email.trim()) {
            isError = true;
            errObj.email = 'Email Id is required!';
        } else if (!emailPattern.test(quote.email)) { // Validate only if email is provided
            isError = true;
            errObj.email = 'Kindly enter proper email format!';
        }

        if (!quote.phone_number) {
            isError = true,
                errObj.phone_number = 'Phone number is required!'
        }

        setQuoteErr(errObj)
        return !isError

    }

    const handleSubmitQuote = async (e) => {
        e.preventDefault();
        if (validateQuoteForm()) {
            await sendEmail(emailTemplateId, quote)
            setIsOpen(false)
        } else {
            toast.error('Form has validation error!')
        }
    }

    const handleInputFoucs = (e) => {
        const { name } = e.target;

        setQuoteErr((preve) => ({
            ...preve,
            [name]: ""
        }))
    }
    return (
        <React.Fragment>
            <section className='relative overflow-hidden isolate bg-[#d9d9d9] min-h-dvh'>
                <div className="absolute inset-0">
                    <ImageTag src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907956/aboutus_jeafg1.jpg"} alt="Background Image" className="object-cover object-center w-full h-full" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative inset-x-0 z-10 flex justify-center md:justify-start items-center h-screen top-1/4 lg:left-11">
                    <div className="max-w-sm md:max-w-xl lg:max-w-5xl px-4 py-4 md:px-8 space-y-6">
                        <h1 className="text-white font-bold lg:max-w-2xl tracking-wide text-lg text-center md:text-start md:text-xl lg:text-3xl font-Poppins leading-6">We are shaping the future of logistics, committed to elevating your experience and delivering excellence nationwide.</h1>
                        <p className='max-w-md md:text-start text-center text-white font-Poppins font-normal text-xs md:text-sm tracking-wide leading-6'>Whether it's last-mile delivery or nationwide distribution, we’re here to simplify logistics and make sure your products reach their destination on time, every time.</p>
                        <div className="flex justify-center md:justify-normal items-center">
                            <Link onClick={handleOpenModal} type='button' className="bg-[#C96202] text-white absolute mt-12 active:translate-y-[6px] py-2.5 px-5 rounded-full text-xs font-medium tracking-wider font-Poppins transition duration-300 ease-in-out transform  hover:shadow-custom-white">Get a Quote</Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* story */}
            {/* <section className='relative isolate overflow-hidden bg-[#d9d9d9] '>
                <div className="mx-auto px-4 py-4 md:px-6 max-w-xl md:max-w-7xl lg:max-w-6xl">
                    <div className="flex justify-center items-center md:flex-row md:gap-6 flex-col">
                        <div className="w-1/2  overflow-hidden rounded-md sm:rounded-xl">
                            <ImageTag src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907883/orustory_zloem2.png"} className={'object-fill object-center'} alt={'orustory'} />
                        </div>
                        <div className="w-1/2">
                            <h1 className='text-2xl font-bold  md:text-4xl font-Poppins tracking-wide  text-black'>Our Stroy</h1>
                            <p className='text-xxs md:text-sm  font-Poppins mt-0 lg:mt-5 font-normal leading-6 tracking-normal md:tracking-wide text-[#000000]'>began as a bold startup with a clear vision to disrupt and elevate the logistics industry in India. Recognizing an opportunity to transform the landscape, we embarked on a mission to innovate and lead with unwavering determination. Driven by a commitment to excellence and a sense of responsibility, we set out to redefine industry standards. As we navigate early challenges and achieve significant milestones, 16D Cargos is emerging as a powerful force poised to conquer the national logistics space, setting new benchmarks and shaping a future where logistics excellence is the new standard.</p>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className='bg-[#d9d9d9] relative isolate overflow-hidden'>
                <div className="container mx-auto flex px-5 py-12 md:flex-row md:gap-12 justify-center flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
                        <img className="w-full h-full object-cover object-center rounded-xl" alt="whychooseus" src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907883/orustory_zloem2.png"} />
                    </div>
                    <div
                        className="md:w-1/2 lg:pl-22  flex flex-col md:items-start md:text-left mt-12 md:mt-0 items-center text-center">
                        <h1 className=" md:text-4xl sm:text-4xl text-3xl mb-4 font-bold font-Poppins text-gray-900">Our Stroy
                        </h1>
                        <p className="tracking-wider font-Poppins font-normal text-black md:text-xs lg:text-sm leading-6">began as a bold startup with a clear vision to disrupt and elevate the logistics industry in India. Recognizing an opportunity to transform the landscape, we embarked on a mission to innovate and lead with unwavering determination. Driven by a commitment to excellence and a sense of responsibility, we set out to redefine industry standards. As we navigate early challenges and achieve significant milestones, 16D Cargos is emerging as a powerful force poised to conquer the national logistics space, setting new benchmarks and shaping a future where logistics excellence is the new standard.</p>
                    </div>
                </div>
            </section>



            {/* Vission */}
            {/* <section className='relative isolate overflow-hidden bg-[#d9d9d9] '>
                <div className="mx-auto max-w-xl md:max-w-7xl lg:max-w-6xl px-4 py-4 md:px-6">
                    <div className="grid md:grid-cols-12 gap-5 grid-cols-1">
                        <div className="w-full md:col-span-5 md:hidden block h-full overflow-hidden rounded-md sm:rounded-xl">
                            <ImageTag src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907845/ourvission_ns8vv7.png"} className={'w-full h-full object-fill object-center'} alt={'orustory'} />
                        </div>
                        <div className="w-full mt-4 md:mt-0 md:col-span-7">
                            <p className='text-xxs md:text-sm font-Poppins font-normal leading-6 tracking-normal md:tracking-widest text-[#000000]'>En<span className='inline-block text-base font-bold  md:text-4xl font-Poppins tracking-wide leading-6 text-black'>vision</span>ing to redefine the logistics landscape by integrating state-of-the-art technology and energizing the industry with visionary young talent. We are committed to spearheading a transformative revolution in logistics, setting unprecedented standards for efficiency, sustainability, and operational excellence. By leveraging innovative solutions and cultivating a culture of forward-thinking ambition, we aim to propel the industry into a future where logistics is not only seamless and intelligent but also pioneering and impactful. Our ultimate ambition is to be the benchmark for excellence in Indian logistics, driving progress and inspiring change both within our country and across the globe.</p>
                        </div>
                        <div className="w-full md:col-span-5 hidden md:block h-full overflow-hidden rounded-md sm:rounded-xl">
                            <ImageTag src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907845/ourvission_ns8vv7.png"} className={'w-full h-full object-fill object-center'} alt={'orustory'} />
                        </div>
                    </div>
                </div>
            </section> */}

            <section className='bg-[#d9d9d9] relative isolate overflow-hidden'>
                <div className="container mx-auto flex px-5 py-12 md:flex-row md:gap-12 justify-center flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:hidden block md:w-1/2 w-full">
                        <ImageTag className="w-full h-full object-cover object-center rounded-xl" alt="whychooseus" src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907845/ourvission_ns8vv7.png"} />
                    </div>
                    <div
                        className="md:w-1/2 lg:pl-22  flex flex-col md:items-start md:text-left mt-12 md:mt-0 items-center text-center">
                        {/* <h1 className=" md:text-4xl sm:text-4xl text-3xl mb-4 font-bold font-Poppins text-gray-900">Our Stroy
                        </h1> */}
                        <p className="tracking-wider font-Poppins font-normal text-black md:text-xs lg:text-sm leading-6">En<span className='inline-block text-base font-bold  md:text-4xl font-Poppins tracking-wide leading-6 text-black'>vision</span>ing to redefine the logistics landscape by integrating state-of-the-art technology and energizing the industry with visionary young talent. We are committed to spearheading a transformative revolution in logistics, setting unprecedented standards for efficiency, sustainability, and operational excellence. By leveraging innovative solutions and cultivating a culture of forward-thinking ambition, we aim to propel the industry into a future where logistics is not only seamless and intelligent but also pioneering and impactful. Our ultimate ambition is to be the benchmark for excellence in Indian logistics, driving progress and inspiring change both within our country and across the globe.</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full hidden md:block md:w-1/2 w-full">
                        <ImageTag className="w-full h-full object-cover object-center rounded-xl" alt="whychooseus" src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907845/ourvission_ns8vv7.png"} />
                    </div>
                </div>
            </section>


            {/* mission */}
            {/* <section className='relative isolate overflow-hidden bg-[#d9d9d9] '>
                <div className="mx-auto max-w-xl md:max-w-7xl lg:max-w-6xl px-4 py-4 md:px-6">
                    <div className="grid md:grid-cols-12 gap-5 grid-cols-1">
                        <div className="w-full h-full overflow-hidden md:col-span-5 rounded-md sm:rounded-xl">
                            <ImageTag src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907857/ourmission_mhtbyk.png"} className={'w-full h-full object-fill object-center'} alt={'orustory'} />
                        </div>
                        <div className="w-full mt-4 md:mt-0 md:col-span-7">
                            <p className='text-xxs md:text-sm font-Poppins mt-0 font-normal leading-6 tracking-normal md:tracking-widest text-[#000000]'>Our<span className='inline-block text-base font-bold  md:text-4xl font-Poppins tracking-wide leading-6 text-black'>Mission</span>is driven by bold vision into reality through meticulous strategic planning and by leveraging the expertise of India’s leading professionals. We are committed to reshaping the logistics landscape with unparalleled service, optimized operations, and a focus on sustainability. By embracing innovation and driving progress, we seek to establish new benchmarks in Indian logistics. Our approach integrates the needs of our clients with the aspirations of our team, fostering a logistics ecosystem renowned for its operational excellence and inspiring transformative advancements across the industry.</p>
                        </div>
                    </div>
                </div>
            </section> */}


            <section className='bg-[#d9d9d9] relative isolate overflow-hidden'>
                <div className="container mx-auto flex px-5 py-12 md:flex-row md:gap-12 justify-center flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
                        <img className="w-full h-full object-cover object-center rounded-xl" alt="whychooseus" src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907857/ourmission_mhtbyk.png"} />
                    </div>
                    <div
                        className="md:w-1/2 lg:pl-22  flex flex-col md:items-start md:text-left mt-12 md:mt-0 items-center text-center">
                        {/* <h1 className=" md:text-4xl sm:text-4xl text-3xl mb-4 font-bold font-Poppins text-gray-900">Our Stroy
                        </h1> */}
                        <p className="tracking-wider font-Poppins font-normal text-black md:text-xs lg:text-sm leading-6">Our <span className='inline-block text-base font-bold  md:text-4xl font-Poppins tracking-wide leading-6 text-black'>Mission</span> is driven by bold vision into reality through meticulous strategic planning and by leveraging the expertise of India’s leading professionals. We are committed to reshaping the logistics landscape with unparalleled service, optimized operations, and a focus on sustainability. By embracing innovation and driving progress, we seek to establish new benchmarks in Indian logistics. Our approach integrates the needs of our clients with the aspirations of our team, fostering a logistics ecosystem renowned for its operational excellence and inspiring transformative advancements across the industry.</p>
                    </div>
                </div>
            </section>


            {/* core value */}
            {/* <section className='relative isolate overflow-hidden bg-[#d9d9d9] '>
                <div className="mx-auto max-w-xl md:max-w-7xl lg:max-w-6xl px-4 py-4 md:px-6">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
                        <div className="block md:hidden w-full md:col-span-5 h-full overflow-hidden rounded-md sm:rounded-xl">
                            <ImageTag src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907965/corevalue_bl6nw2.png"} className={'w-full h-full object-fill object-center'} alt={'orustory'} />
                        </div>
                        <div className="w-full mt-4 md:mt-0 md:col-span-7">
                            <p className='text-xxs md:text-sm mt-0 font-Poppins font-normal leading-6 tracking-normal md:tracking-widest text-[#000000]'>Our<span className='inline-block font-bold text-base md:text-4xl font-Poppins tracking-wide leading-6 text-black'>Core values</span>drive everything we do. We are committed to Customer-Centricity, ensuring our clients’ needs and satisfaction are always our top priority. Integrity guides us in maintaining transparency and ethical practices. We champion Innovation to continuously enhance our services, while Excellence defines our pursuit of superior quality and performance. Our focus on Reliability guarantees dependable service, and our dedication to Sustainability supports environmentally responsible practices. We value Collaboration with clients and stakeholders, embrace Adaptability to meet evolving demands, uphold Accountability for our actions, and foster Empowerment within our team for growth and innovation.</p>
                        </div>
                        <div className="md:block hidden w-full md:col-span-5 h-full overflow-hidden rounded-md sm:rounded-xl">
                            <ImageTag src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907965/corevalue_bl6nw2.png"} className={'w-full h-full object-fill object-center'} alt={'orustory'} />
                        </div>
                    </div>
                </div>
            </section> */}

            <section className='bg-[#d9d9d9] relative isolate overflow-hidden'>
                <div className="container mx-auto flex px-5 py-12 md:flex-row md:gap-12 justify-center flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:hidden block md:w-1/2 w-full">
                        <ImageTag className="w-full h-full object-cover object-center rounded-xl" alt="whychooseus" src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907965/corevalue_bl6nw2.png"} />
                    </div>
                    <div
                        className="md:w-1/2 lg:pl-22  flex flex-col md:items-start md:text-left mt-12 md:mt-0 items-center text-center">
                        {/* <h1 className=" md:text-4xl sm:text-4xl text-3xl mb-4 font-bold font-Poppins text-gray-900">Our Stroy
                        </h1> */}
                        <p className="tracking-wider font-Poppins font-normal text-black md:text-xs lg:text-sm leading-6">Our<span className='inline-block font-bold text-base md:text-4xl font-Poppins tracking-wide leading-6 text-black'>Core values</span>drive everything we do. We are committed to Customer-Centricity, ensuring our clients’ needs and satisfaction are always our top priority. Integrity guides us in maintaining transparency and ethical practices. We champion Innovation to continuously enhance our services, while Excellence defines our pursuit of superior quality and performance. Our focus on Reliability guarantees dependable service, and our dedication to Sustainability supports environmentally responsible practices. We value Collaboration with clients and stakeholders, embrace Adaptability to meet evolving demands, uphold Accountability for our actions, and foster Empowerment within our team for growth and innovation.</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full hidden md:block md:w-1/2 w-full">
                        <ImageTag className="w-full h-full object-cover object-center rounded-xl" alt="whychooseus" src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907965/corevalue_bl6nw2.png"} />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <div className="relative isolate overflow-hidden bg-custom">
                <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
                    <div className="flex flex-col text-left basis-1/2">
                        <p className="inline-block font-semibold text-primary mb-4">F.A.Q</p>
                        <p className="sm:text-4xl text-3xl font-extrabold text-base-content">Frequently Asked Questions</p>
                    </div>
                    <ul className="basis-1/2">
                        {faq && faq.slice(0, visibleFaqs).map((item, index) => (
                            <li key={index} className='group'>
                                <button className="relative  flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10" aria-expanded="false">
                                    <span className="flex-1 text-base-content">{index + 1}. {item?.title}</span>
                                    <svg className="flex-shrink-0 w-4 h-4  ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                                        <rect y="7" width="16" height="2" rx="1" className="block group-hover:opacity-0 origin-center rotate-90 transition duration-200 ease-out false"></rect>
                                    </svg>
                                </button>
                                <div className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                    <div className="pb-5 leading-relaxed">
                                        <div className="space-y-2 leading-relaxed">{item?.answer}</div>
                                    </div>
                                </div>
                            </li>
                        ))}
                        <li>
                            <button type='button' onClick={showMore} className='text-orange-500 mt-3 inline-flex font-normal no-underline group px-2 py-2 items-center -tracking-tight'>
                                See more
                                <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-500 ease-in-out' viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M78.1233 27.7777H21.8758C20.1259 27.7777 18.751 26.5555 18.751 24.9999C18.751 23.4444 20.1259 22.2222 21.8758 22.2222H78.1233C79.8732 22.2222 81.2482 23.4444 81.2482 24.9999C81.2482 26.5555 79.8732 27.7777 78.1233 27.7777Z" fill="#FF8E26" />
                                    <path d="M62.4999 47.2222C62.09 47.2266 61.6837 47.1548 61.307 47.0112C60.9302 46.8677 60.5915 46.6557 60.3125 46.3888C59.0625 45.2777 59.0625 43.5555 60.3125 42.4444L79.9991 24.9444L60.3125 7.4444C59.0625 6.33329 59.0625 4.61107 60.3125 3.49996C61.5624 2.38885 63.4998 2.38885 64.7498 3.49996L86.6238 22.9444C87.8737 24.0555 87.8737 25.7777 86.6238 26.8888L64.7498 46.3333C64.1248 46.8888 63.3123 47.1666 62.5624 47.1666L62.4999 47.2222Z" fill="#FF8E26" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* let us reach you */}

            <div className="relative isolate overflow-hidden bg-custom">
                <div className="mx-auto max-w-md md:max-w-5xl py-6 px-4">
                    <div className="px-3 py-3 md:px-6 md:py-6 grid grid-cols-1 gap-0 md:gap-10 md:grid-cols-12">
                        <div className="py-4 md:col-span-7">
                            <h1 className='font-bold text-lg md:text-4xl text-black font-Poppins leading-6 tracking-wide'>Let us reach you</h1>
                            <p className='text-xxs md:text-sm text-black tracking-wider leading-6  md:max-w-xl mt-4 font-normal font-Poppins'>Ready to streamline your logistics? Connect with us today and discover how our tailored solutions can help your business thrive. Whether you have questions, need a quote, or want to explore partnership opportunities, our team is here to assist you. Simply fill your mail id in the form, and we’ll get back to you promptly.</p>
                        </div>
                        <div className="py-5 md:col-span-5">
                            <form noValidate onSubmit={handleNewsletterSubmit} onChange={(e) => setEmail(e.target.value)} onFocus={onFocus} className='space-y-2'>
                                <div className='block relative'>
                                    <input type="email" id='email' placeholder='Email' name='email' className={`placeholder:text-[8px] focus:shadow-custom-white ${error.email && 'ring-1 ring-red-500 placeholder:text-red-500'} focus:shadow-gray-400 transition-all ease-in-out duration-300 placeholder:tracking-wide w-full focus:outline-none font-Poppins text-xs rounded-md border py-2 px-3 bg-white text-black border-none`} />
                                    <span className="absolute inset-y-0 top-0 end-0 grid place-content-center px-2 pointer-events-none">
                                        <svg className={`size-3 ${error.email && 'fill-red-600'}`} viewBox="0 0 40 38" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M36.4009 11.8696C36.4362 12.8631 37.2702 13.6398 38.2638 13.6045C39.2571 13.5691 40.034 12.735 39.9985 11.7415L36.4009 11.8696ZM27.9133 2.20558V4.00558C27.9335 4.00558 27.9534 4.00525 27.9735 4.00458L27.9133 2.20558ZM12.4861 2.20558L12.426 4.00458C12.446 4.00525 12.4661 4.00558 12.4861 4.00558V2.20558ZM0.400854 11.7415C0.365454 12.735 1.14217 13.5691 2.13565 13.6045C3.12913 13.6398 3.96317 12.8631 3.99855 11.8696L0.400854 11.7415ZM39.9997 11.8056C39.9997 10.8115 39.1938 10.0056 38.1997 10.0056C37.2056 10.0056 36.3997 10.8115 36.3997 11.8056H39.9997ZM38.1997 26.2057L39.9985 26.2695C39.9992 26.2484 39.9997 26.227 39.9997 26.2057H38.1997ZM27.9133 35.8057L27.9735 34.0066C27.9534 34.0059 27.9335 34.0057 27.9133 34.0057V35.8057ZM12.4861 35.8057V34.0057C12.4661 34.0057 12.446 34.0059 12.426 34.0066L12.4861 35.8057ZM2.1997 26.2057H0.399702C0.399702 26.227 0.400086 26.2484 0.400854 26.2695L2.1997 26.2057ZM3.9997 11.8056C3.9997 10.8115 3.19381 10.0056 2.1997 10.0056C1.2056 10.0056 0.399702 10.8115 0.399702 11.8056H3.9997ZM39.1076 13.3598C39.9661 12.8584 40.2553 11.756 39.7539 10.8977C39.2526 10.0393 38.1503 9.74991 37.2918 10.2513L39.1076 13.3598ZM25.5661 19.1857L24.6582 17.6312L24.6433 17.6401L25.5661 19.1857ZM14.8333 19.1857L15.7563 17.6401L15.7412 17.6314L14.8333 19.1857ZM3.10762 10.2513C2.24924 9.74991 1.14689 10.0393 0.645462 10.8977C0.14403 11.756 0.433398 12.8584 1.29178 13.3598L3.10762 10.2513ZM39.9985 11.7415C39.7679 5.26078 34.3345 0.189968 27.8531 0.406592L27.9735 4.00458C32.4707 3.85426 36.2408 7.37281 36.4009 11.8696L39.9985 11.7415ZM27.9133 0.405584H12.4861V4.00558H27.9133V0.405584ZM12.5462 0.406592C6.065 0.189968 0.631614 5.26078 0.400854 11.7415L3.99855 11.8696C4.1587 7.37281 7.92879 3.85426 12.426 4.00458L12.5462 0.406592ZM36.3997 11.8056V26.2057H39.9997V11.8056H36.3997ZM36.4009 26.1416C36.2408 30.6385 32.4707 34.1569 27.9735 34.0066L27.8531 37.6045C34.3345 37.8212 39.7679 32.7505 39.9985 26.2695L36.4009 26.1416ZM27.9133 34.0057H12.4861V37.6057H27.9133V34.0057ZM12.426 34.0066C7.92879 34.1569 4.15868 30.6385 3.99855 26.1416L0.400854 26.2695C0.631614 32.7505 6.065 37.8212 12.5462 37.6045L12.426 34.0066ZM3.9997 26.2057V11.8056H0.399702V26.2057H3.9997ZM37.2918 10.2513L24.6582 17.6312L26.474 20.7399L39.1076 13.3598L37.2918 10.2513ZM24.6433 17.6401C21.9063 19.2747 18.4933 19.2747 15.7563 17.6401L13.9105 20.731C17.7841 23.0444 22.6153 23.0444 26.4889 20.731L24.6433 17.6401ZM15.7412 17.6314L3.10762 10.2513L1.29178 13.3598L13.9254 20.7399L15.7412 17.6314Z" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="">
                                    <button type='submit' className="bg-[#C96202] hover:shadow-gray-400 text-white active:translate-y-[6px] py-2 absolute z-10 px-6 rounded-lg text-xs font-normal tracking-wider font-Poppins flex justify-center items-center gap-2 transition duration-300 ease-in-out transform  hover:shadow-custom-white">
                                        Send  <svg className="size-4" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.79347 20.1379C1.80148 28.3699 23.8095 35.7619 23.8095 35.7619C23.8095 35.7619 31.2016 57.7699 39.4336 52.7779C48.1696 47.4499 58.6336 14.7139 51.7216 7.8499C44.8096 0.985898 12.1215 11.4019 6.79347 20.1379Z" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M37.6796 21.8867L23.8076 35.7587" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <AnimatePresence>
                <Model isOpen={isOpen} setIsOpen={setIsOpen} title={'Let us reach you!'} fields={fields} onChange={handleQuoteInputChange} onFocus={handleInputFoucs} onSubmit={handleSubmitQuote} errors={quoteErr} />
            </AnimatePresence>
        </React.Fragment >
    )
}
