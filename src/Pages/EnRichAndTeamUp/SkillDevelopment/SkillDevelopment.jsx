import React from 'react'
import ImageTag from '../../../Components/ImageTag/ImageTag'
import { Link } from 'react-router-dom'

const SkillDevelopment = () => {
    return (
        <React.Fragment>
            <section className="relative z-10 min-h-screen bg-custom overflow-hidden">
                <div className="absolute inset-0">
                    <ImageTag src={'https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725985318/heroSkillDevelopment_owbdil.png'} alt="Background Image" className="object-cover object-center w-full h-full" />
                    {/* <div className="absolute inset-0 bg-black/50"></div> */}
                </div>

                <div className="relative space-y-5 mx-auto md:max-w-xl lg:max-w-4xl max-w-xs z-10 flex flex-col justify-center items-center h-screen">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl text-center lg:leading-tight text-white p-2 tracking-wide font-bold font-Poppins">Empowering the Youth for a Brighter Tomorrow</h1>
                    <p className='text-center font-Poppins text-sm md:px-4 px-3 lg:text-xl md:text-sm max-w-md md:max-w-3xl lg:max-w-5xl font-medium text-white md:leading-5 tracking-wider'>At 16D Cargos, we believe in the boundless potential of the youth of Bharat. Our Skill Development Program is designed to bridge the gap between industry requirements and the skills possessed by young professionals. We are committed to nurturing the next generation of logistics leaders, ensuring they are equipped with the expertise needed to thrive in the ever-evolving logistics industry.</p>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[#d9d9d9] px-4 py-6 lg:px-8 lg:py-6'>
                <div className="mx-auto max-w-full lg:max-w-3xl">
                    <h2 className='text-xl md:text-3xl font-bold font-Poppins leading-6 tracking-wide text-black'>
                        Unlocking Potential, Creating Professionals
                    </h2>
                    <p className='font-Poppins text-xs font-medium tracking-wider mt-4 leading-relaxed'>
                        Our program focuses on comprehensive training that covers all aspects of logistics management, from understanding the intricacies of Full Truck Load (FTL) services to mastering advanced fleet management techniques. We provide hands-on experience, enabling participants to gain practical knowledge and develop critical skills that set them apart in the competitive job market.
                    </p>
                </div>
            </section>

            <section className='relative isolate overflow-hidden bg-custom'>
                <div className="max-w-full md:max-w-6xl mx-auto px-4 py-4">
                    <h1 className='text-center p-3 text-black mb-5 font-bold leading-6 tracking-wide font-Poppins md:text-3xl text-xl'>Training Modules</h1>
                    <div className="grid md:grid-cols-2 gap-x-12   grid-cols-1 place-items-center">
                        <div className="w-full h-full  rounded-md md:rounded-lg">
                            <ImageTag src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725984003/trainingmodule_hd97q0.png"} alt={'training'} className={'w-full h-auto object-center object-fill'} />
                        </div>

                        <div className="relative space-y-2">
                            <div className="">
                                <h2 className='font-bold font-Poppins leading-6 tracking-wide xl:text-lg md:text-sm text-sm'>Logistics Fundamentals</h2>
                                <p className='font-medium mt-2 font-Poppins leading-6  tracking-wide text-black md:text-xs text-xs'>Gain a solid foundation in logistics principles and practices.</p>
                            </div>
                            <div className="">
                                <h2 className='font-bold font-Poppins leading-6 tracking-wide xl:text-lg md:text-sm text-sm'>FTL Services</h2>
                                <p className='font-medium mt-2 font-Poppins leading-6 tracking-wide text-black md:text-xs text-xs'>Learn the nuances of managing full truck load operations efficiently.</p>
                            </div>
                            <div className="">
                                <h2 className='font-bold font-Poppins leading-6 tracking-wide xl:text-lg md:text-sm text-sm'>Fleet and Driver Management</h2>
                                <p className='font-medium mt-2 font-Poppins leading-6 tracking-wide text-black md:text-xs text-xs'>Understand the best practices in managing fleets and drivers using tools like Nirvaahi.</p>
                            </div>
                            <div className="">
                                <h2 className='font-bold font-Poppins leading-6 tracking-wide xl:text-lg md:text-sm text-sm'>Technology Integration</h2>
                                <p className='font-medium mt-2 font-Poppins leading-6 tracking-wide text-black md:text-xs text-xs'>Explore how digital tools like the 16D application can streamline logistics operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative bg-[#D9D9D9] isolate flex justify-center items-center overflow-hidden'>
                <div className="mx-auto max-w-full md:max-w-6xl px-3 py-3 md:px-6">
                    <div className="grid md:grid-cols-2 place-items-center gap-10 grid-cols-1">
                        <div className="w-full md:hidden block rounded-lg md:rounded-2xl">
                            <img src="https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725985173/mentorship_l7exbh.png" alt={''} className={' object-fill object-center w-full h-full'} />
                        </div>
                        <div className="w-full px-3 py-3 space-y-5">
                            <h1 className="text-black text-xl md:text-2xl font-bold font-Poppins leading-6 tracking-wide">Mentorship and Guidance
                            </h1>
                            <p className='text-black font-Poppins leading-5 tracking-wider text-xs font-medium '>
                                Participants in our Skill Development Program benefit from the guidance of industry experts and experienced mentors. We believe that learning from those who have excelled in the field is crucial to personal and professional growth. Our mentors are dedicated to helping participants navigate the complexities of the logistics sector, providing invaluable insights and advice.
                            </p>
                        </div>
                        <div className="w-full md:block hidden rounded-lg md:rounded-lg">
                            <img src="https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725985173/mentorship_l7exbh.png" alt={''} className={' object-fill object-center w-full h-full'} />
                        </div>
                    </div>
                </div>
            </section>


            <section className='relative bg-[#D9D9D9] isolate flex justify-center items-center overflow-hidden'>
                <div className="mx-auto max-w-full md:max-w-6xl px-3 py-3 md:px-6">
                    <div className="grid md:grid-cols-2 place-items-center gap-10 grid-cols-1">
                        <div className="w-full  rounded-lg md:rounded-2xl">
                            <img src="https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725985106/opportunitgrowth_lorm8r.png" alt={''} className={' object-fill object-center w-full h-full'} />
                        </div>
                        <div className="w-full px-3 py-3 space-y-5">
                            <h1 className="text-black text-xl md:text-2xl font-bold font-Poppins leading-6 tracking-wide">Opportunities for Growth
                            </h1>
                            <p className='text-black font-Poppins leading-5 tracking-wider text-xs font-medium '>
                                We are not just training individuals; we are creating opportunities for them to join our dynamic team. Outstanding performers in our Skill Development Program are given the chance to work with us, contributing to our mission of revolutionizing the logistics industry. This is more than a job; it is a pathway to a fulfilling career in a sector that is vital to the nation’s economy.
                            </p>
                        </div>
                        {/* <div className="w-full md:block hidden rounded-lg md:rounded-lg">
                            <img src="https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725985106/opportunitgrowth_lorm8r.png" alt={''} className={' object-fill object-center w-full h-full'} />
                        </div> */}
                    </div>
                </div>
            </section>

            <section className='relative bg-[#D9D9D9] isolate flex justify-center items-center overflow-hidden'>
                <div className="mx-auto max-w-full md:max-w-6xl px-3 py-3 md:px-6">
                    <div className="grid md:grid-cols-2 place-items-center gap-10 grid-cols-1">
                        <div className="w-full md:hidden block  rounded-lg md:rounded-2xl">
                            <img src="https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725985065/shapeingfuture_xim37j.png" alt={''} className={' object-fill object-center w-full h-full'} />
                        </div>
                        <div className="w-full px-3 py-3 space-y-5">
                            <h1 className="text-black text-xl md:text-2xl font-bold font-Poppins leading-6 tracking-wide">Join Us in Shaping the Future
                            </h1>
                            <p className='text-black font-Poppins leading-5 tracking-wider text-xs font-medium '>
                                We invite ambitious youngsters to be part of this transformative journey. By developing the skills that matter, you can make a significant impact on the logistics landscape of Bharat. Together, we will build a network of professionals who are not only skilled but also passionate about driving change in the industry.
                            </p>
                        </div>
                        <div className="w-full md:block hidden rounded-lg md:rounded-lg">
                            <img src="https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725985065/shapeingfuture_xim37j.png" alt={''} className={' object-fill object-center w-full h-full'} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative isolate bg-custom'>
                <div className="max-w-2xl mx-auto px-4 py-4 md:p-12">
                    <div className="text-center space-y-3">
                        <h1 className='text-black font-bold leading-6 tracking-wide md:text-3xl text-xl font-Poppins'>Contact Us to Learn More</h1>
                        <p className='leading-6 mt-4 tracking-wider font-medium font-Poppins text-sm text-black'>For more information about our Skill Development Program, please reach out to us. We are excited to help you take the first step towards a successful and rewarding career in logistics.</p>
                        <button className="bg-[#C96202] mt-3 text-white active:translate-y-[6px] py-2.5 px-5 rounded-full text-xs font-medium tracking-wider font-Poppins transition duration-300 ease-in-out transform hover:shadow-gray-500 hover:shadow-custom-white">Contact us</button>
                    </div>
                </div>
            </section>

            <section className='relative overflow-hidden bg-custom'>
                <div className="max-w-xl md:max-w-xl mx-auto">
                    <div className="relative z-0">
                        <div className="md:rounded-xl rounded-lg w-full">
                            <img src="https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725985018/youtubethumb_nfftac.png" className="w-full h-auto object-fill object-center" /><div className="absolute inset-0 flex justify-center items-center"> <svg className='size-7' viewBox="0 0 102 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100.088 12.4872C99.45 7.38718 94.9875 2.92468 89.5687 2.60593C58.3312 0.374683 43.0312 0.374683 12.1125 2.60593C7.0125 2.92468 2.55 7.38718 1.9125 12.4872C-0.6375 31.2934 -0.6375 40.8559 1.9125 59.6622C2.55 64.7622 7.33125 69.2247 12.4313 69.5434C27.7313 70.4997 39.525 71.1372 51 71.1372C62.475 71.1372 74.2688 70.4997 89.8875 69.5434C94.9875 69.2247 99.45 64.7622 100.406 59.6622C102.637 40.8559 102.637 31.2934 100.088 12.4872Z" fill="#FF0000" />
                                <path d="M64.0688 41.593L44.9438 54.343C43.9875 54.9805 42.7125 55.2993 41.4375 55.2993C40.4812 55.2993 39.2063 54.9805 38.5688 54.6618C36.3375 53.3868 35.0625 51.4743 35.0625 48.9243V23.4243C35.0625 20.8743 36.3375 18.9618 38.5688 17.6868C40.8 16.4118 43.0312 16.7305 45.2625 18.0055L64.3875 30.7555C66.3 32.0305 67.2563 33.943 67.2563 36.1743C67.2563 38.4055 65.9813 40.318 64.0688 41.593Z" fill="white" />
                            </svg></div></div>
                    </div>
                </div>
            </section>

            <div className="relative isolate overflow-hidden bg-custom">
                <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
                    <div className="flex flex-col text-left basis-1/2">
                        <p className="inline-block font-semibold text-primary mb-4">F.A.Q</p>
                        <p className="sm:text-4xl text-3xl font-extrabold text-base-content">Frequently Asked Questions</p>
                    </div>
                    <ul className="basis-1/2">
                        <li className='group'>
                            <button className="relative  flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t border-t-black md:text-lg" aria-expanded="false">
                                <span className="flex-1 text-base-content">What services does your company offer?</span>
                                <svg className="flex-shrink-0 w-4 h-4  ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                                    <rect y="7" width="16" height="2" rx="1" className="block group-hover:opacity-0 origin-center rotate-90 transition duration-200 ease-out false"></rect>
                                </svg>
                            </button>
                            <div className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                <div className="pb-5 leading-relaxed">
                                    <p className="space-y-2 font-Poppins tracking-wide text-sm leading-relaxed">We provide comprehensive logistics solutions including Full Truck Load (FTL) services across India, tailored to meet various transportation needs.</p>
                                </div>
                            </div>
                        </li>
                        <li className='group'>
                            <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t border-t-black md:text-lg" aria-expanded="false">
                                <span className="flex-1 text-base-content">How can I get a quote for your services?</span>
                                <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                                    <rect y="7" width="16" height="2" rx="1" className="group-hover:opacity-0 transform origin-center rotate-90 transition-all duration-200 ease-out false"></rect>
                                </svg>
                            </button>
                            <div className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                <div className="pb-5 leading-relaxed">
                                    <p className="space-y-2 font-Poppins tracking-wide text-sm leading-relaxed">You can request a quote through our website or by contacting our sales team directly. Provide details about your shipment, and we’ll get back to you with a tailored quote.</p>
                                </div>
                            </div>
                        </li>
                        <li className='group'>
                            <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t border-t-black md:text-lg" aria-expanded="false">
                                <span className="flex-1 text-base-content">What regions do you cover?</span>
                                <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                                    <rect y="7" width="16" height="2" rx="1" className="group-hover:opacity-0 transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                                </svg>
                            </button>
                            <div className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                <div className="pb-5 leading-relaxed">
                                    <p className="space-y-2 font-Poppins tracking-wide text-sm leading-relaxed">We offer nationwide coverage, delivering services across all major regions and cities in India.</p>
                                </div>
                            </div>
                        </li>
                        <li className='group'>
                            <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t border-t-black md:text-lg" aria-expanded="false">
                                <span className="flex-1 text-base-content">How do you ensure the safety of shipments?</span>
                                <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                                    <rect y="7" width="16" height="2" rx="1" className="group-hover:opacity-0 transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                                </svg>
                            </button>
                            <div className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                <div className="pb-5 leading-relaxed">
                                    <p className="space-y-2 font-Poppins tracking-wide text-sm leading-relaxed">We use advanced tracking systems and adhere to strict safety protocols to ensure your shipments are secure and arrive on time.</p>
                                </div>
                            </div>
                        </li>
                        <li className='group'>
                            <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t border-t-black md:text-lg" aria-expanded="false">
                                <span className="flex-1 text-base-content">What is your approach to sustainability?</span>
                                <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                                    <rect y="7" width="16" height="2" rx="1" className="group-hover:opacity-0 transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                                </svg>
                            </button>
                            <div className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                <div className="pb-5 leading-relaxed">
                                    <p className="space-y-2 font-Poppins tracking-wide text-sm leading-relaxed">We are committed to environmentally responsible practices, including optimizing routes to reduce emissions and investing in green technologies.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link className='text-orange-500 mt-3 inline-flex font-medium no-underline group px-2 py-2 items-center -tracking-tight'>
                                See more
                                <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-500 ease-in-out' viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M78.1233 27.7777H21.8758C20.1259 27.7777 18.751 26.5555 18.751 24.9999C18.751 23.4444 20.1259 22.2222 21.8758 22.2222H78.1233C79.8732 22.2222 81.2482 23.4444 81.2482 24.9999C81.2482 26.5555 79.8732 27.7777 78.1233 27.7777Z" fill="#FF8E26" />
                                    <path d="M62.4999 47.2222C62.09 47.2266 61.6837 47.1548 61.307 47.0112C60.9302 46.8677 60.5915 46.6557 60.3125 46.3888C59.0625 45.2777 59.0625 43.5555 60.3125 42.4444L79.9991 24.9444L60.3125 7.4444C59.0625 6.33329 59.0625 4.61107 60.3125 3.49996C61.5624 2.38885 63.4998 2.38885 64.7498 3.49996L86.6238 22.9444C87.8737 24.0555 87.8737 25.7777 86.6238 26.8888L64.7498 46.3333C64.1248 46.8888 63.3123 47.1666 62.5624 47.1666L62.4999 47.2222Z" fill="#FF8E26" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SkillDevelopment