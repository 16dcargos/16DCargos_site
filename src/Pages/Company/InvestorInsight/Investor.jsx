import React, { useState } from 'react'
import ImageTag from '../../../Components/ImageTag/ImageTag';
import OrangeBtn from '../../../Components/Buttons/OrangeBtn';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Model from '../../../Components/model/Model';
import sendEmail from '../../../email/sendEmail';
import toast from 'react-hot-toast';
const Inverstor = ({ handleToggleModal }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [quoteErr, setQuoteErr] = useState({})
    const [quote, setQuote] = useState({
        full_name: "",
        email: "",
        phone_number: "",
        summary: ''
    })
    const emailTemplateId = import.meta.env.VITE_API_TEMPLATE_ID
    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g

    const fields = [
        { placeholder: 'Full name', id: "full_name", name: "full_name", value: quote.full_name, type: 'text', isRequired: true, isTextArea: false },
        { placeholder: 'Email', id: "email", name: "email", value: quote.email, type: 'email', isRequired: true, isTextArea: false },
        { placeholder: 'Phone number', id: "phone_number", name: "phone_number", value: quote.phone_number, type: 'number', isRequired: true, isTextArea: false },
        { placeholder: 'Summary', id: "summary", name: "summary", value: quote.summary, type: 'text', isRequired: true, isTextArea: true },
    ]

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
    const handleOpenModal = () => {
        setIsOpen(true);
    };
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
            <section className="relative z-10 h-screen text-white overflow-hidden">
                <div className="absolute inset-0">
                    <ImageTag src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907981/investor_rq5nie.jpg"} alt="Background Image" className="object-cover object-center w-full h-full" />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative mx-auto max-w-5xl z-10 flex flex-col justify-center items-center h-screen">
                    <h1 className="text-2xl md:text-5xl xl:text-6xl text-center leading-10 mb-5 p-2 tracking-normal flex justify-start flex-row font-bold font-Poppins">Get ahead of the curve—invest with us and fuel the future of logistics.</h1>
                    <OrangeBtn text={'Invest in Us'} />
                </div>
            </section>

            <section className='relative overflow-hidden bg-[#d9d9d9] px-4 py-6 lg:px-8 lg:py-6'>
                <div className="mx-auto max-w-full lg:max-w-3xl">
                    <p className='font-Poppins text-sm font-medium tracking-wider leading-relaxed'>
                        We’re eager to embark on the next stage of our journey and invite investors to play a key role in shaping the future of logistics. As a bootstrapped enterprise, we’ve achieved impressive milestones and driven innovation with our own resources. Now, with a solid foundation and proven success, we’re ready for accelerated growth. We seek strategic investment to enhance capabilities and seize new market opportunities. Join us in this transformative venture and be a part of redefining the logistics landscape in India.
                    </p>
                </div>
            </section>

            <section className='relative isolate overflow-hidden bg-custom py-6'>
                <div className="mx-auto max-w-xl md:max-w-7xl lg:max-w-6xl px-4 py-4 md:px-6">
                    <div className="grid md:grid-cols-12 place-items-center grid-cols-1 gap-3">
                        <div className="w-full md:rounded-lg md:col-span-6 rounded-md">
                            <ImageTag src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907861/ourjourney_stk7rh.png"} alt={'ourjourney'} className={'w-full h-auto object-fill object-center'} />
                        </div>
                        <div className="px-3 w-full md:col-span-6 space-y-7">
                            <h1 className="md:text-2xl lg:text-4xl text-xl text-black font-bold tracking-6 leading-wider">Our Journey: From Bootstrap to Breakthrough</h1>
                            <p className='font-Poppins text-sm text-black font-medium lg:max-w-xl leading-6 tracking-wider'>At <span className='inline-block text-xs lg:text-lg font-bold text-black'>Bharatham Consortium Ventures</span>, we’ve embarked on a transformative journey that began with a vision and a bootstrapped budget. Over the years, our unwavering commitment, innovation, and relentless pursuit of excellence have propelled us to achieve remarkable milestones in the logistics industry. We’ve built a solid foundation through our resourcefulness and creativity, proving our ability to drive change and deliver results. As we stand on the threshold of a new chapter, we invite visionary investors to join us in accelerating our growth and reshaping the logistics landscape in India.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Achievements */}
            <section className="relative isolate overflow-hidden bg-custom">
                <div className="max-w-full mx-auto md:py-8 lg:max-w-6xl">
                    <div className="px-4 py-5 md:max-w-2xl">
                        <h1 className='md:text-3xl text-xl font-bold font-Poppins text-black leading-7 tracking-wide'>Our Achievements: A Testament to Innovation and Success</h1>
                        <p className='font-Poppins text-xs mt-3 text-black font-medium lg:max-w-md leading-6 tracking-wider'>Our journey has been marked by significant achievements that reflect our dedication and ingenuity:</p>
                    </div>

                    <div className="px-4 py-4">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 items-stretch grid-cols-1 gap-2">
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Innovative Solutions</h4>
                                <p className='font-Poppins text-xs md:text-sm mt-4 text-black font-medium lg:max-w-lg leading-6 tracking-wider'>We’ve introduced cutting-edge technologies and streamlined processes that have set new benchmarks in logistics efficiency and effectiveness.</p>
                            </div>
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Milestone Accomplishments</h4>
                                <p className='font-Poppins text-xs md:text-sm mt-4 text-black font-medium lg:max-w-lg leading-6 tracking-wider'>From optimizing supply chain operations to enhancing last-mile delivery, our solutions have consistently delivered value and exceeded expectations.</p>
                            </div>
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Customer-Centric Approach</h4>
                                <p className='font-Poppins text-xs md:text-sm mt-4 text-black font-medium lg:max-w-lg leading-6 tracking-wider'>Our focus on customer satisfaction has earned us a reputation for reliability and excellence, fostering long-term partnerships and repeat business.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Invest us */}
            <section className="relative isolate overflow-hidden bg-custom">
                <div className="max-w-full mx-auto md:py-8 lg:max-w-6xl">
                    <div className="px-4 py-5 md:max-w-2xl">
                        <h1 className='md:text-3xl text-xl font-bold font-Poppins text-black leading-7 tracking-wide'>Why Invest in Us? Unlocking New Growth Opportunities</h1>
                        <p className='text-black md:max-w-xl mt-4 leading-6 tracking-wide font-Poppins font-medium text-xs'>As we transition from a successful bootstrap venture to a growth-driven enterprise, we seek strategic investment to propel us to new heights. Here’s why investing in [Your Company Name] presents a compelling opportunity:</p>
                    </div>

                    <div className="px-4 py-4">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 items-stretch grid-cols-1 gap-2">
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Scalable Business Model</h4>
                                <p className='font-Poppins text-xs md:text-sm mt-4 text-black font-medium lg:max-w-lg leading-6 tracking-wider'>Our business model is designed for scalability, allowing us to rapidly adapt to market demands and expand our reach across new regions and sectors.</p>
                            </div>
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Proven Track Record</h4>
                                <p className='font-Poppins text-xs md:text-sm mt-4 text-black font-medium lg:max-w-lg leading-6 tracking-wider'>Our track record of success and innovation demonstrates our capability to execute and deliver on ambitious goals.</p>
                            </div>
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Strategic Vision</h4>
                                <p className='font-Poppins text-xs md:text-sm mt-4 text-black font-medium lg:max-w-lg leading-6 tracking-wider'>We have a clear vision for the future, with well-defined strategies to leverage emerging trends and capitalize on new market opportunities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Investment opportunities */}
            <section className="relative isolate overflow-hidden bg-custom">
                <div className="max-w-full mx-auto md:py-8 lg:max-w-6xl">
                    <div className="px-4 py-5 md:max-w-2xl">
                        <h1 className='md:text-3xl text-xl font-bold font-Poppins text-black leading-7 tracking-wide'>Investment Opportunities: Be Part of Our Growth Story</h1>
                        <p className='text-black md:max-w-xl mt-4 leading-6 tracking-wide font-Poppins font-medium text-xs'>We are actively seeking investors who are passionate about shaping the future of logistics and are excited to contribute to our growth journey. Here’s how you can be part of our transformative venture</p>
                    </div>

                    <div className="px-4 py-4">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 items-stretch grid-cols-1 gap-2">
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Equity Investment</h4>
                                <p className='font-Poppins text-xs md:text-sm mt-4 text-black font-medium lg:max-w-lg leading-6 tracking-wider'>Participate in our growth by investing in equity, becoming a key stakeholder in our success.</p>
                            </div>
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Strategic Partnerships</h4>
                                <p className='font-Poppins text-xs md:text-sm mt-4 text-black font-medium lg:max-w-lg leading-6 tracking-wider'>Explore opportunities for strategic partnerships that align with your interests and expertise, creating mutually beneficial collaborations.</p>
                            </div>
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Innovation Funding</h4>
                                <p className='font-Poppins text-xs md:text-sm mt-4 text-black font-medium lg:max-w-lg leading-6 tracking-wider'>Support specific innovation initiatives that drive our technological advancements and operational excellence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* our vission for future */}
            <section className="relative isolate overflow-hidden bg-custom">
                <div className="max-w-full mx-auto md:py-8 lg:max-w-6xl">
                    <div className="px-4 py-5 md:max-w-2xl">
                        <h1 className='md:text-3xl text-xl font-bold font-Poppins text-black leading-7 tracking-wide'>Our Vision for the Future: Redefining Logistics in India</h1>
                        <p className='text-black md:max-w-xl mt-4 leading-6 tracking-wide font-Poppins font-medium text-xs'>Our vision extends beyond immediate growth; we aim to redefine the logistics landscape in India through:</p>
                    </div>

                    <div className="px-4 py-4">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 items-stretch grid-cols-1 gap-2">
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Technological Advancements</h4>
                                <p className='font-Poppins text-xs md:text-sm mt-4 text-black font-medium lg:max-w-lg leading-6 tracking-wider'>Embracing and integrating the latest technologies, including AI, IoT, and blockchain, to enhance efficiency, transparency, and reliability in logistics.</p>
                            </div>
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Sustainable Practices</h4>
                                <p className='font-Poppins text-xs md:text-sm mt-4 text-black font-medium lg:max-w-lg leading-6 tracking-wider'>Committing to sustainable and eco-friendly practices that minimize our environmental footprint and contribute to a greener future.</p>
                            </div>
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Customer-Centric Solutions</h4>
                                <p className='font-Poppins text-xs md:text-sm mt-4 text-black font-medium lg:max-w-lg leading-6 tracking-wider'>Continuously innovating to meet the evolving needs of our customers and deliver exceptional service that sets new industry standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* join us */}
            <section className='relative isolate lg:p-8 overflow-hidden bg-custom'>
                <div className="mx-auto max-w-full md:max-w-6xl px-3 py-3 md:px-6">
                    <div className="grid md:grid-cols-2 place-items-center gap-10 grid-cols-1">
                        <div className="w-full rounded-lg md:rounded-xl">
                            <ImageTag src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907884/joinus_jzxiz5.png"} alt={'joinus'} className={'object-fill object-center w-full h-full'} />
                        </div>
                        <div className="w-full px-3 py-3 space-y-5">
                            <h1 className="text-black text-xl font-bold font-Poppins leading-6 tracking-wide">Join Us in Shaping Tomorrow</h1>
                            <p className='font-Poppins text-xs md:text-sm mt-4 text-black font-medium lg:max-w-xl leading-6 tracking-wider'>
                                The logistics industry is at the cusp of a revolutionary transformation, and Bharatham Consortium Ventures is at the forefront of this change. By investing in us, you are not only supporting a successful and innovative enterprise but also playing a crucial role in shaping the future of logistics in India. Together, we can drive growth, create value, and redefine the industry landscape.
                            </p>
                            <div className="inline-block">
                                {/* <BlueBtn title={'Get a Qutoe'} /> */}
                                <button onClick={handleOpenModal} className='transition duration-300 ease-in-out hover:shadow-custom-white active:translate-y-1 font-Poppins hover:shadow-gray-600 text-white bg-[#0222C9] block px-1.5 py-1.5 lg:px-4 lg:py-2 text-xs rounded-xl font-semibold' >Get a Qutoe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='relative min-h-max overflow-hidden bg-[#d9d9d9] px-4 py-6 lg:px-8 lg:py-8'>
                <div className="mx-auto max-w-full lg:max-w-4xl space-y-5">
                    <h2 className='font-Poppins text-lg md:text-3xl text-center font-semibold  tracking-wide leading-relaxed'>
                        We invite you to explore this exciting opportunity and become an integral part of our journey. Contact us today to learn more about investment opportunities and join us in this transformative venture.
                    </h2>

                    <div className="text-center">
                        <Link onClick={handleToggleModal} className="bg-[#C96202] text-white active:translate-y-[6px] py-2.5 px-5 rounded-full text-xs font-medium tracking-wider font-Poppins transition duration-300 ease-in-out transform  hover:shadow-custom-white hover:shadow-gray-600">Contact us</Link>
                    </div>
                </div>
            </section>


            <AnimatePresence>
                <Model isOpen={isOpen} setIsOpen={setIsOpen} title={'Let us reach you!'} fields={fields} onChange={handleQuoteInputChange} onFocus={handleInputFoucs} onSubmit={handleSubmitQuote} errors={quoteErr} />
            </AnimatePresence>

        </React.Fragment>
    )
}

export default Inverstor