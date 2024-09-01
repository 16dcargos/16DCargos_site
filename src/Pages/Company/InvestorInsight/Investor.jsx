import React from 'react'
import investor from '../../../assets/images/investor.jpg';
import ourjourney from '../../../assets/images/ourjourney.png';
import joinus from '../../../assets/images/joinus.png';
import ImageTag from '../../../Components/ImageTag/ImageTag';
import OrangeBtn from '../../../Components/Buttons/OrangeBtn';
import BlueBtn from '../../../Components/Buttons/BlueBtn';
import { Link } from 'react-router-dom';
const Inverstor = () => {
    return (
        <React.Fragment>
            <section className="relative z-10 h-screen text-white overflow-hidden">
                <div className="absolute inset-0">
                    <ImageTag src={investor} alt="Background Image" className="object-cover object-center w-full h-full" />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative mx-auto max-w-5xl z-10 flex flex-col justify-center items-center h-screen">
                    <h1 className="text-2xl md:text-5xl xl:text-6xl text-center leading-10 mb-5 p-2 tracking-normal flex justify-start flex-row font-bold font-Poppins">Get ahead of the curve—invest with us and fuel the future of logistics.</h1>
                    <OrangeBtn text={'Learn More'} />
                </div>
            </section>

            <section className='relative overflow-hidden bg-[#d9d9d9] px-4 py-6 lg:px-8 lg:py-6'>
                <div className="mx-auto max-w-full lg:max-w-3xl">
                    <p className='font-Poppins text-xs font-medium tracking-wider leading-relaxed'>
                        We’re eager to embark on the next stage of our journey and invite investors to play a key role in shaping the future of logistics. As a bootstrapped enterprise, we’ve achieved impressive milestones and driven innovation with our own resources. Now, with a solid foundation and proven success, we’re ready for accelerated growth. We seek strategic investment to enhance capabilities and seize new market opportunities. Join us in this transformative venture and be a part of redefining the logistics landscape in India.
                    </p>
                </div>
            </section>

            <section className='relative isolate overflow-hidden bg-custom py-6'>
                <div className="mx-auto max-w-xl md:max-w-7xl lg:max-w-6xl px-4 py-4 md:px-6">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-3">
                        <div className="w-full md:rounded-lg md:col-span-6 rounded-md">
                            <ImageTag src={ourjourney} alt={'ourjourney'} className={'w-full h-auto object-fill object-center'} />
                        </div>
                        <div className="px-3 w-full md:col-span-6">
                            <h1 className="md:text-xl lg:text-3xl text-xl text-black font-bold tracking-6 leading-wider">Our Journey: From Bootstrap to Breakthrough</h1>
                            <p className='font-Poppins text-xxs lg:text-xs font-medium mt-4 tracking-wider leading-relaxed'>At <span className='inline-block text-xs lg:text-lg font-bold text-black'>Bharatham Consortium Ventures</span>, we’ve embarked on a transformative journey that began with a vision and a bootstrapped budget. Over the years, our unwavering commitment, innovation, and relentless pursuit of excellence have propelled us to achieve remarkable milestones in the logistics industry. We’ve built a solid foundation through our resourcefulness and creativity, proving our ability to drive change and deliver results. As we stand on the threshold of a new chapter, we invite visionary investors to join us in accelerating our growth and reshaping the logistics landscape in India.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Achievements */}
            <section className="relative isolate overflow-hidden bg-custom">
                <div className="max-w-full mx-auto md:py-8 lg:max-w-6xl">
                    <div className="px-4 py-5 md:max-w-2xl">
                        <h1 className='md:text-3xl text-xl font-bold font-Poppins text-black leading-7 tracking-wide'>Our Achievements: A Testament to Innovation and Success</h1>
                        <p className='text-black md:max-w-sm mt-4 leading-6 tracking-wide font-Poppins font-medium text-xs'>Our journey has been marked by significant achievements that reflect our dedication and ingenuity:</p>
                    </div>

                    <div className="px-4 py-4">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 items-stretch grid-cols-1 gap-2">
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Innovative Solutions</h4>
                                <p className='font-Poppins text-xxs font-medium mt-4 leading-5 tracking-wider text-balance text-black'>We’ve introduced cutting-edge technologies and streamlined processes that have set new benchmarks in logistics efficiency and effectiveness.</p>
                            </div>
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Milestone Accomplishments</h4>
                                <p className='font-Poppins text-xxs font-medium mt-4 leading-5 tracking-wider text-balance text-black'>From optimizing supply chain operations to enhancing last-mile delivery, our solutions have consistently delivered value and exceeded expectations.</p>
                            </div>
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Customer-Centric Approach</h4>
                                <p className='font-Poppins text-xxs font-medium mt-4 leading-5 tracking-wider text-balance text-black'>Our focus on customer satisfaction has earned us a reputation for reliability and excellence, fostering long-term partnerships and repeat business.</p>
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
                                <p className='font-Poppins text-xxs font-medium mt-4 leading-5 tracking-wider text-balance text-black'>Our business model is designed for scalability, allowing us to rapidly adapt to market demands and expand our reach across new regions and sectors.</p>
                            </div>
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Proven Track Record</h4>
                                <p className='font-Poppins text-xxs font-medium mt-4 leading-5 tracking-wider text-balance text-black'>Our track record of success and innovation demonstrates our capability to execute and deliver on ambitious goals.</p>
                            </div>
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Strategic Vision</h4>
                                <p className='font-Poppins text-xxs font-medium mt-4 leading-5 tracking-wider text-balance text-black'>We have a clear vision for the future, with well-defined strategies to leverage emerging trends and capitalize on new market opportunities.</p>
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
                                <p className='font-Poppins text-xxs font-medium mt-4 leading-5 tracking-wider text-balance text-black'>Participate in our growth by investing in equity, becoming a key stakeholder in our success.</p>
                            </div>
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Strategic Partnerships</h4>
                                <p className='font-Poppins text-xxs font-medium mt-4 leading-5 tracking-wider text-balance text-black'>Explore opportunities for strategic partnerships that align with your interests and expertise, creating mutually beneficial collaborations.</p>
                            </div>
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Innovation Funding</h4>
                                <p className='font-Poppins text-xxs font-medium mt-4 leading-5 tracking-wider text-balance text-black'>Support specific innovation initiatives that drive our technological advancements and operational excellence.</p>
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
                                <p className='font-Poppins text-xxs font-medium mt-4 leading-5 tracking-wider text-balance text-black'>Embracing and integrating the latest technologies, including AI, IoT, and blockchain, to enhance efficiency, transparency, and reliability in logistics.</p>
                            </div>
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Sustainable Practices</h4>
                                <p className='font-Poppins text-xxs font-medium mt-4 leading-5 tracking-wider text-balance text-black'>Committing to sustainable and eco-friendly practices that minimize our environmental footprint and contribute to a greener future.</p>
                            </div>
                            <div className="bg-white hover:shadow-custom-white shadow-md hover:shadow-gray-500 transition-all duration-300s ease-in-out w-auto h-auto rounded-lg px-8 py-8">
                                <h4 className='text-xl font-Poppins font-bold tracking-normal leading-6'>Customer-Centric Solutions</h4>
                                <p className='font-Poppins text-xxs font-medium mt-4 leading-5 tracking-wider text-balance text-black'>Continuously innovating to meet the evolving needs of our customers and deliver exceptional service that sets new industry standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* join us */}
            <section className='relative isolate min-h-screen flex justify-center items-center overflow-hidden bg-custom'>
                <div className="mx-auto max-w-full md:max-w-5xl px-3 py-3 md:px-6">
                    <div className="grid md:grid-cols-2 place-items-center gap-10 grid-cols-1">
                        <div className="w-full rounded-lg md:rounded-xl">
                            <ImageTag src={joinus} alt={'joinus'} className={'object-fill object-center w-full h-full'} />
                        </div>
                        <div className="w-full px-3 py-3 space-y-5">
                            <h1 className="text-black text-xl font-bold font-Poppins leading-6 tracking-wide">Join Us in Shaping Tomorrow</h1>
                            <p className='text-black font-Poppins leading-5 tracking-wider text-xs font-medium '>
                                The logistics industry is at the cusp of a revolutionary transformation, and Bharatham Consortium Ventures is at the forefront of this change. By investing in us, you are not only supporting a successful and innovative enterprise but also playing a crucial role in shaping the future of logistics in India. Together, we can drive growth, create value, and redefine the industry landscape.
                            </p>
                            <div className="inline-block">
                                <BlueBtn title={'Get a Qutoe'} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='relative min-h-max overflow-hidden bg-[#d9d9d9] px-4 py-6 lg:px-8 lg:py-8'>
                <div className="mx-auto max-w-full lg:max-w-4xl space-y-5">
                    <h2 className='font-Poppins text-3xl text-center font-extrabold tracking-wide leading-relaxed'>
                        We invite you to explore this exciting opportunity and become an integral part of our journey. Contact us today to learn more about investment opportunities and join us in this transformative venture.
                    </h2>

                    <div className="text-center">
                        <Link to={'#'} className="bg-[#C96202] text-white active:translate-y-[6px] py-2.5 px-5 rounded-full text-xs font-medium tracking-wider font-Poppins transition duration-300 ease-in-out transform  hover:shadow-custom-white hover:shadow-gray-600">Contact us</Link>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Inverstor