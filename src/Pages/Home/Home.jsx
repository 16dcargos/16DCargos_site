import OrangeBtn from '../../Components/Buttons/OrangeBtn';
import ImageTag from '../../Components/ImageTag/ImageTag';
import Img from '../../Components/ImageTag/ImageTag';
import HomeHero from '../../assets/images/Home.png';
import vision from '../../assets/images/vision.png';
import mission from '../../assets/images/mission.png';
import whychooseus from '../../assets/images/whychooseus.png';

import app from '../../assets/svg/16dapp.svg';
import ftl from '../../assets/svg/ftl.svg';
import niraahi from '../../assets/svg/niraahi.svg';
export default function Home() {
    const ourService = [
        { id: 0, title: 'Full Truck Load Services', content: 'Providing nationwide FTL services that ensure your goods are delivered safely and on time. Our dedicated team manages the entire process, from vehicle placement to delivery, ensuring reliability and efficiency. We take pride in offering tailored solutions that meet your specific logistics needs, ensuring that your shipments are handled with the utmost care and professionalism.', img: ftl },
        { id: 2, title: 'Nirvaahi', content: 'Streamlining fleet and driver management for optimized operations. Nirvaahi ensures that fleet owners can effectively manage their vehicles and drivers, contributing to smoother logistics operations. By integrating fleet and driver management into one platform, Nirvaahi helps in maintaining operational excellence and reducing downtime.', img: niraahi },
        { id: 1, title: '16D Application', content: 'Simplifying load management for manufacturers and fleet owners. This innovative application connects local vehicle owners with nationwide logistics needs, streamlining operations and enhancing efficiency. 16D is designed to make load management hassle-free, providing a user-friendly platform that bridges the gap between shippers and transporters.', img: app },
    ]
    return (
        <>
            <div className="relative z-10 bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
                <div className="absolute inset-0">
                    <Img src={HomeHero} alt="Background Image" className="object-cover object-center w-full h-full" />
                    {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                    <div className='text-5xl text relative lg:text-8xl flex justify-start flex-row font-bold font-Poppins  px-6 py-4 '>
                        <span className="hidden md:block text-xs sm:text-xs text-start font-medium tracking-wide font-Poppins mb-4 absolute inset-y-0">Welcome to</span>
                        <h1 className='tracking-wider'>
                            <span className='text-[#0025A9]'>16D</span> <span className='text-[#C96202]'>
                                Cargos
                            </span>
                        </h1>
                    </div>
                    <p className="text-xs lg:text-lg font-Poppins max-w-sm lg:max-w-lg leading-4 tracking-wider lg:tracking-wide text-gray-300 mb-6">We're dedicated to transforming logistics in India, delivering unmatched service and innovative solutions to meet all your transportation needs.</p>

                    <OrangeBtn text={'Learn More'} />
                </div>
            </div>

            <section className='relative overflow-hidden bg-[#d9d9d9] px-4 py-6 lg:px-8 lg:py-6'>
                <div className="mx-auto max-w-full lg:max-w-3xl">
                    <p className='font-Poppins text-xs font-medium tracking-wider leading-relaxed'>
                        Our services are designed to provide seamless and dependable transportation solutions across India. We pride ourselves on delivering large volumes of goods swiftly and securely from origin to destination. With a robust network and a fleet of meticulously maintained trucks, we cater to various industries, offering tailored logistics solutions to meet unique needs. Whether it’s long-haul routes or regional deliveries, our FTL services ensure punctual deliveries and cost-efficiency. Partner with us for a hassle-free logistics experience, as we commit to exceeding your expectations and driving your business success throughout the Nation.
                    </p>
                </div>
            </section>
            {/*  Our Vission */}
            <section className='relative isolate overflow-hidden px-3 py-4 lg:px-8 lg:py-6 bg-[#d9d9d9]'>
                <div className='mx-auto max-w-md lg:max-w-7xl'>
                    <div className="flex flex-wrap items-start flex-col lg:flex-row">
                        <div className='w-full lg:w-1/2 rounded-xl'>
                            <div className="w-full h-auto overflow-hidden rounded-md sm:rounded-xl">
                                <ImageTag src={vision} alt={'our vission'} className={''} />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className='px-4 py-4 lg:py-0'>
                                <h1 className='border-b-[1px] pb-1 border-orange-400 inline-block font-Poppins tracking-wide font-bold text-black text-lg lg:text-3xl'>
                                    Our Vission
                                </h1>
                                <p className='font-Poppins text-xs mt-3 text-black font-medium lg:max-w-lg leading-6 tracking-wider'>
                                    To transform the logistics industry in Bharat by harnessing the power of strategic planning and the best talents in the country, setting a new benchmark for efficiency and reliability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className='relative isolate overflow-hidden px-3 py-4 lg:px-8 lg:py-6 bg-[#d9d9d9]'>
                <div className='mx-auto max-w-md lg:max-w-7xl'>
                    <div className="flex items-start flex-col-reverse lg:flex-row">
                        <div className="w-full lg:w-1/2">
                            <div className='px-4 py-4 lg:py-0'>
                                <h1 className='border-b-[1px] pb-1 border-orange-400 inline-block font-Poppins tracking-wide font-bold text-black text-lg lg:text-3xl'>
                                    Our Mission
                                </h1>
                                <p className='font-Poppins text-xs mt-3 text-black font-medium lg:max-w-lg leading-6 tracking-wider'>
                                    To lead the logistics sector with unwavering commitment, strategic innovation, and operational excellence, ensuring seamless and efficient delivery solutions across the nation.
                                </p>
                            </div>
                        </div>

                        <div className='w-full lg:w-1/2 rounded-xl mb-4 md:mb-0'>
                            <div className="w-full h-auto overflow-hidden rounded-md sm:rounded-xl">
                                <ImageTag src={mission} alt={'Our Mission'} className={''} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our service */}
            <section className='relative isolate overflow-hidden py-2 sm:py-5 px-2 sm:px-5 bg-[#d9d9d9]'>
                <div className='mx-auto max-w-md lg:max-w-7xl '>
                    <div className='px-4 py-4 lg:px-5 lg:py-3'>
                        <div className='text-center font-Poppins text-2xl lg:text-3xl font-bold  tracking-widest leading-5'>
                            Our <span className='bg-clip-text text-transparent inline-block bg-gradient-to-r from-30% from-[#FF8E26] to-55% to-[#0163E0]'>
                                Service
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-full md:max-w-screen-lg px-4 py-4">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 items-stretch lg:gap-7 justify-center grid-cols-1">
                        {ourService && ourService.map((item, index) => (
                            <div className='rounded-lg bg-white shadow-custom-white shadow-gray-500' key={index}>
                                <div className='px-4 py-4'>
                                    <div className="flex justify-start items-center">
                                        <div className='w-8 rounded-full bg-black h-8 flex justify-center items-center'>
                                            <ImageTag src={item?.img} className={'w-3 h-3 object-fill'} alt={'profil'} />
                                        </div>
                                        <div className="px-3 py-3">
                                            <p className='text-sm font-Poppins tracking-tight md:tracking-wider font-semibold md:font-bold text-black'>{item?.title}</p>
                                        </div>
                                    </div>
                                    <div className="max-w-full md:max-w-md mt-4">
                                        <p className='text-[9px] leading-4 tracking-wider font-Poppins font-normal text-black'>
                                            {item?.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Why choose us */}
            <section className='bg-[#d9d9d9] relative isolate overflow-hidden'>
                <div className="container mx-auto flex px-5 py-24 md:flex-row  justify-center flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded-xl" alt="whychooseus" src={whychooseus} />
                    </div>
                    <div
                        className="md:w-1/2 lg:pl-22 md:pl-16 flex flex-col md:items-start md:text-left mt-16 md:mt-0 items-center text-center">
                        <h1 className="title-font md:text-2xl sm:text-4xl text-3xl mb-4 font-bold font-Poppins text-gray-900">Why Choose <span className='inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#0163E0] from-50% to-20% to-[#FF8E26]'>Us</span>?
                        </h1>
                        <p className="tracking-wider font-Poppins font-normal text-black text-xs leading-6">With a commitment to excellence and a focus on innovation, we offer unparalleled logistics solutions that cater to your every need. From advanced technology to dedicated customer service, we are your trusted partner in logistics. Our strategic approach and the inclusion of top talents ensure that your goods are handled with the utmost care and efficiency. We understand the complexities of logistics and are dedicated to providing solutions that enhance your business operations and deliver outstanding results.</p>
                    </div>
                </div>
            </section>
        </>
    )
}