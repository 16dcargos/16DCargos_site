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

import profile from '../../assets/images/profile.png';
import profile2 from '../../assets/images/profile2.png';
import profile3 from '../../assets/images/profile3.png';
import profile4 from '../../assets/images/profile4.png';

import cta from '../../assets/images/CTAedit.png';

import { Link } from 'react-router-dom';
export default function Home() {
    const ourService = [
        { id: 0, title: 'Full Truck Load Services', content: 'Providing nationwide FTL services that ensure your goods are delivered safely and on time. Our dedicated team manages the entire process, from vehicle placement to delivery, ensuring reliability and efficiency. We take pride in offering tailored solutions that meet your specific logistics needs, ensuring that your shipments are handled with the utmost care and professionalism.', img: ftl },
        { id: 2, title: 'Nirvaahi', content: 'Streamlining fleet and driver management for optimized operations. Nirvaahi ensures that fleet owners can effectively manage their vehicles and drivers, contributing to smoother logistics operations. By integrating fleet and driver management into one platform, Nirvaahi helps in maintaining operational excellence and reducing downtime.', img: niraahi },
        { id: 1, title: '16D Application', content: 'Simplifying load management for manufacturers and fleet owners. This innovative application connects local vehicle owners with nationwide logistics needs, streamlining operations and enhancing efficiency. 16D is designed to make load management hassle-free, providing a user-friendly platform that bridges the gap between shippers and transporters.', img: app },
    ]
    return (
        <>
            <section className="relative z-10 h-screen text-white overflow-hidden">
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
            </section>

            <section className='relative overflow-hidden bg-[#d9d9d9] px-4 py-6 lg:px-8 lg:py-6'>
                <div className="mx-auto max-w-full lg:max-w-3xl">
                    <p className='font-Poppins text-xs font-medium tracking-wider leading-relaxed'>
                        Our services are designed to provide seamless and dependable transportation solutions across India. We pride ourselves on delivering large volumes of goods swiftly and securely from origin to destination. With a robust network and a fleet of meticulously maintained trucks, we cater to various industries, offering tailored logistics solutions to meet unique needs. Whether it’s long-haul routes or regional deliveries, our FTL services ensure punctual deliveries and cost-efficiency. Partner with us for a hassle-free logistics experience, as we commit to exceeding your expectations and driving your business success throughout the Nation.
                    </p>
                </div>
            </section>
            {/*  Our Vission */}
            <section className='relative isolate overflow-hidden px-3 py-4 lg:px-8 lg:py-6 bg-[#d9d9d9]'>
                <div className='mx-auto max-w-5xl lg:max-w-7xl'>
                    <div className="flex flex-wrap items-start flex-col md:flex-row">
                        <div className='w-full md:w-1/2 rounded-xl'>
                            <div className="w-full h-auto overflow-hidden rounded-md sm:rounded-xl">
                                <ImageTag src={vision} alt={'our vission'} className={''} />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
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
                <div className='mx-auto max-w-5xl lg:max-w-7xl'>
                    <div className="flex items-start flex-col-reverse md:flex-row">
                        <div className="w-full md:w-1/2">
                            <div className='px-4 py-4 lg:py-0'>
                                <h1 className='border-b-[1px] pb-1 border-orange-400 inline-block font-Poppins tracking-wide font-bold text-black text-lg lg:text-3xl'>
                                    Our Mission
                                </h1>
                                <p className='font-Poppins text-xs mt-3 text-black font-medium lg:max-w-lg leading-6 tracking-wider'>
                                    To lead the logistics sector with unwavering commitment, strategic innovation, and operational excellence, ensuring seamless and efficient delivery solutions across the nation.
                                </p>
                            </div>
                        </div>

                        <div className='w-full md:w-1/2 rounded-xl mb-4 md:mb-0'>
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
                                            <ImageTag src={item?.img} className={'w-3 h-3 object-fill'} alt={'profile'} />
                                        </div>
                                        <div className="px-3 py-3">
                                            <p className='text-sm font-Poppins tracking-tight md:tracking-wider font-semibold md:font-bold text-black'>{item?.title}</p>
                                        </div>
                                    </div>
                                    <div className="max-w-full md:max-w-md mt-4">
                                        <p className='text-[9px] leading-4 tracking-wider font-Poppins font-medium text-black'>
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
                <div className="container mx-auto flex px-5 py-12 md:flex-row md:gap-12 justify-center flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
                        <img className="w-full h-full object-cover object-center rounded-xl" alt="whychooseus" src={whychooseus} />
                    </div>
                    <div
                        className="md:w-1/2 lg:pl-22  flex flex-col md:items-start md:text-left mt-12 md:mt-0 items-center text-center">
                        <h1 className="title-font md:text-2xl sm:text-4xl text-3xl mb-4 font-bold font-Poppins text-gray-900">Why Choose <span className='inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#0163E0] from-50% to-20% to-[#FF8E26]'>Us</span>?
                        </h1>
                        <p className="tracking-wider font-Poppins font-normal text-black text-xs leading-6">With a commitment to excellence and a focus on innovation, we offer unparalleled logistics solutions that cater to your every need. From advanced technology to dedicated customer service, we are your trusted partner in logistics. Our strategic approach and the inclusion of top talents ensure that your goods are handled with the utmost care and efficiency. We understand the complexities of logistics and are dedicated to providing solutions that enhance your business operations and deliver outstanding results.</p>
                    </div>
                </div>
            </section>


            {/* Testimonials */}
            <section className=' relative isolate overflow-hidden min-h-screen bg-[#d9d9d9] px-3 py-4 lg:px-8 lg:py-6'>
                <div className='mx-auto max-w-sm lg:max-w-lg'>
                    <div className='px-4 py-4 lg:px-5 lg:py-4 mb-4'>
                        <div className='text-center font-Poppins text-3xl lg:text-4xl font-bold tracking-wider leading-relaxed'>
                            Here's what our {' '}
                            <span className='bg-clip-text text-transparent  inline-block bg-gradient-to-r from-30% from-[#FF8E26] to-55% to-[#0163E0]'>
                                Clients
                            </span>
                            {" "}have to say
                        </div>
                    </div>
                </div>
                <div className='max-w-full mx-auto lg:max-w-4xl px-3'>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
                        <div className="h-auto rounded-lg hover:-translate-y-2 transition duration-700 ease-in-out bg-white shadow-custom-white shadow-gray-500">
                            <div className="px-4 py-4 md:py-6 md:px-6">
                                <div className="flex justify-start items-center">
                                    <div className='w-12 rounded-full bg-gray-400 h-8 flex justify-center items-center'>
                                        <ImageTag src={profile} className={'w-12 h-12 object-fill'} alt={'profil'} />
                                    </div>
                                    <div className="px-4 py-3">
                                        <p className='text-sm font-Poppins tracking-tight md:tracking-wider font-semibold md:font-bold text-black'>QWQER</p>
                                    </div>
                                </div>
                                <div className="max-w-sm md:max-w-md mt-4">
                                    <p className='text-[10px] leading-4 tracking-wider font-Poppins font-normal text-black'>
                                        The seamless service and timely deliveries have made a significant difference in our operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="h-auto rounded-lg hover:-translate-y-2 transition duration-700 ease-in-out bg-white shadow-custom-white shadow-gray-500 md:col-span-2">
                            <div className="px-4 py-4 md:py-6 md:px-6">
                                <div className="flex justify-start items-center">
                                    <div className='w-12 rounded-full bg-gray-400 h-8 flex justify-center items-center'>
                                        <ImageTag src={profile2} className={'w-12 h-12 object-fill'} alt={'profil'} />
                                    </div>
                                    <div className="px-4 py-3">
                                        <p className='text-sm font-Poppins tracking-tight md:tracking-wider font-semibold md:font-bold text-black'>TABP</p>
                                    </div>
                                </div>
                                <div className="max-w-sm md:max-w-md mt-4">
                                    <p className='text-[10px] leading-4 tracking-wider font-Poppins font-normal text-black'>
                                        Their strategic planning and efficient execution have made our supply chain management smoother and more reliable. Highly recommend their services.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="h-auto rounded-lg hover:-translate-y-2 transition duration-700 ease-in-out bg-white shadow-custom-white shadow-gray-500 md:col-span-2">
                            <div className="px-4 py-4 md:py-6 md:px-6">
                                <div className="flex justify-start items-center">
                                    <div className='w-12 rounded-full bg-gray-400 h-8 flex justify-center items-center'>
                                        <ImageTag src={profile3} className={'w-12 h-12 object-fill'} alt={'profil'} />
                                    </div>
                                    <div className="px-4 py-3">
                                        <p className='text-sm font-Poppins tracking-tight md:tracking-wider font-semibold md:font-bold text-black'>Walkaroo</p>
                                    </div>
                                </div>
                                <div className="max-w-sm md:max-w-md mt-4">
                                    <p className='text-[10px] leading-4 tracking-wider font-Poppins font-normal text-black'>
                                        Their commitment to excellence and attention to detail have significantly improved our logistics operations
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="h-auto hover:-translate-y-2 transition duration-700 ease-in-out rounded-lg bg-white shadow-custom-white shadow-gray-500">
                            <div className="px-4 py-4 md:py-6 md:px-6">
                                <div className="flex justify-start items-center">
                                    <div className='w-12 rounded-full bg-gray-400 h-8 flex justify-center items-center'>
                                        <ImageTag src={profile4} className={'w-12 h-12 object-fill'} alt={'profil'} />
                                    </div>
                                    <div className="px-4 py-3">
                                        <p className='text-sm font-Poppins tracking-tight md:tracking-wider font-semibold md:font-bold text-black'>Hatsun Agro Ltd</p>
                                    </div>
                                </div>
                                <div className="max-w-sm md:max-w-md mt-4">
                                    <p className='text-[10px] leading-4 tracking-wider font-Poppins font-normal text-black'>
                                        Their innovative approach and reliable service set them apart from the competition.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-md mx-auto px-4 py-4 md:px-3 md:py-8 flex justify-center items-center text-center font-Poppins ">
                        <Link className='text-orange-500 font-medium no-underline group flex items-center -tracking-tight'>
                            See more
                            <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-500 ease-in-out' viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M78.1233 27.7777H21.8758C20.1259 27.7777 18.751 26.5555 18.751 24.9999C18.751 23.4444 20.1259 22.2222 21.8758 22.2222H78.1233C79.8732 22.2222 81.2482 23.4444 81.2482 24.9999C81.2482 26.5555 79.8732 27.7777 78.1233 27.7777Z" fill="#FF8E26" />
                                <path d="M62.4999 47.2222C62.09 47.2266 61.6837 47.1548 61.307 47.0112C60.9302 46.8677 60.5915 46.6557 60.3125 46.3888C59.0625 45.2777 59.0625 43.5555 60.3125 42.4444L79.9991 24.9444L60.3125 7.4444C59.0625 6.33329 59.0625 4.61107 60.3125 3.49996C61.5624 2.38885 63.4998 2.38885 64.7498 3.49996L86.6238 22.9444C87.8737 24.0555 87.8737 25.7777 86.6238 26.8888L64.7498 46.3333C64.1248 46.8888 63.3123 47.1666 62.5624 47.1666L62.4999 47.2222Z" fill="#FF8E26" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Reqest a quote */}

            <section className='relative isolate overflow-hidden min-h-screen bg-[#d9d9d9]'>
                <div className="absolute inset-0">
                    <Img src={cta} alt="Background Image" className="object-cover object-center w-full h-full" />
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                </div>
                <div className='mx-auto max-w-sm lg:max-w-screen-lg'>
                    <div className='absolute inset-0 z-20 max-w-sm md:max-w-md top-0 md:top-1/4'>
                        <div className="px-3 py-3 md:py-5 md:px-5 text-center md:text-start md:max-w-md">
                            <h1 className='text-white font-Poppins leading-7 md:leading-relaxed tracking-wide font-extrabold text-2xl  lg:text-4xl'>Ready to Transform Your Logistics?</h1>
                        </div>
                        <div className="max-w-sm px-3 md:px-5">
                            <p className='text-xs md:text-sm text-white font-normal text-center md:text-start leading-snug tracking-wider font-Poppins'>Join us in revolutionizing the logistics industry. Discover how our services can benefit your business.</p>
                        </div>
                    </div>

                    <div className="absolute inset-0 top-0 z-30 rounded-md sm:left-1/2 drop-shadow-lg backdrop-blur-sm bg-black/20">
                        <div className="max-w-full lg:max-w-md mx-auto">
                            <div className="px-3 py-3 md:px-4 md:py-4">
                                <h1 className='text-white text-lg md:text-2xl font-Poppins font-bold tracking-wide pb-0 md:pb-4 leading-6 text-center'>Request a Quote</h1>
                                <form noValidate className='space-y-1 md:space-y-2'>
                                    <div className="relative">
                                        <label htmlFor="fullName" className="text-white tracking-wider text-xs font-Poppins font-normal mb-1">Full name</label>
                                        <input type="text" id="fullName" placeholder='Full name' className="w-full focus:outline-none font-Poppins text-xs rounded-md border py-1.5 px-1.5 bg-white text-black border-none placeholder:text-[8px] placeholder:tracking-wide" />
                                        <span className='absolute inset-y-0 top-6 end-0 grid place-content-center px-2 pointer-events-none'>
                                            <svg className='size-3' viewBox="0 0 48 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M46.6661 51.3651C45.4122 48.9427 43.4446 47.3675 41.5228 46.2978C39.6011 45.226 37.6762 44.6185 36.416 44.144C35.4194 43.7737 34.3704 43.2929 33.6661 42.7966C33.3134 42.552 33.0553 42.3053 32.9221 42.1223C32.7848 41.9318 32.7775 41.8476 32.7754 41.7998C32.7754 40.8529 32.7754 39.6729 32.7754 38.1383C33.4017 37.437 34.1541 36.5577 34.8585 35.4288C35.5932 34.253 36.2475 32.7902 36.6512 31.0348C36.8813 30.9224 37.1101 30.7934 37.3339 30.6364C38.0216 30.1629 38.6032 29.4709 39.0756 28.5709C39.5542 27.6667 39.9664 26.5347 40.4043 25.0041C40.682 24.0292 40.8121 23.2384 40.8133 22.5402C40.8143 21.8931 40.6947 21.3053 40.4189 20.8038C40.215 20.4291 39.9268 20.1263 39.6365 19.9234C39.3441 19.7195 39.0703 19.6052 38.8446 19.53C38.8437 19.501 38.8427 19.476 38.8427 19.4438C38.8394 18.6854 38.9904 17.4097 39.1621 16.2422C39.2651 15.5284 39.3285 14.77 39.3285 13.9864C39.3285 12.7878 39.1809 11.5246 38.7958 10.2781C38.2246 8.41036 37.079 6.57286 35.1707 5.18899C33.276 3.81028 30.681 2.89258 27.2535 2.61684C23.4307 2.15067 21.1708 1.71051 19.3448 1.28712C17.5207 0.865709 16.0818 0.443248 13.9841 0.0343811V0.0354358C13.8613 0.0125842 13.7406 4.51841e-05 13.6293 4.51841e-05C13.3546 -0.00206419 13.0601 0.0697717 12.8199 0.196686C12.3599 0.440201 12.1227 0.786608 11.9697 1.07172C11.7116 1.58149 11.6284 2.04356 11.5462 2.53153C11.4369 3.25481 11.3943 4.02262 11.3339 4.65825C11.3049 4.97465 11.2704 5.25661 11.2341 5.45325C11.2164 5.5511 11.1966 5.62704 11.1842 5.66758L11.1748 5.6977C9.33425 8.92645 8.87839 12.2997 8.87839 14.9113C8.87839 16.9902 9.16878 18.6124 9.31128 19.3241C9.36331 19.5895 9.38406 19.7716 9.39554 19.9171C9.24882 20.0212 9.09484 20.144 8.93464 20.3011C8.64847 20.5831 8.36241 20.9638 8.15417 21.4468C7.94605 21.9275 7.82031 22.5039 7.82124 23.1448C7.82124 23.6443 7.89413 24.1802 8.05023 24.7587C8.61624 26.8605 9.3196 28.3203 10.1957 29.3732C10.849 30.1693 11.6055 30.6905 12.335 31.039C12.7407 32.7923 13.3941 34.2542 14.1277 35.4289C14.832 36.5579 15.5843 37.437 16.2108 38.1384C16.2108 39.6731 16.2108 40.8529 16.2108 41.7999C16.2118 41.8176 16.2034 41.9153 16.0496 42.1224C15.828 42.4252 15.2963 42.8518 14.6501 43.2149C14.0051 43.5823 13.2507 43.9038 12.5931 44.1358C11.7388 44.4375 10.5901 44.8089 9.35511 45.3386C7.50296 46.1315 5.42312 47.2844 3.77499 49.1927C2.12066 51.0946 0.975969 53.7687 0.986399 57.2627C0.986399 57.7434 1.00714 58.2428 1.04991 58.7568L1.15374 60H2.40132H47.8325L47.9365 58.7567C47.9792 58.2436 48 57.7463 48 57.2666C48.002 54.9381 47.5026 52.9747 46.6661 51.3651ZM45.2884 57.2886H3.69777C3.69777 57.2802 3.69683 57.2719 3.69683 57.2625C3.69882 55.3107 4.10054 53.8091 4.72374 52.5939C5.66019 50.7772 7.14085 49.5473 8.77339 48.6327C10.4049 47.7213 12.1436 47.1656 13.4942 46.6922C14.5409 46.3208 15.7531 45.788 16.8009 45.0617C17.3242 44.6965 17.8111 44.2813 18.2097 43.7601C18.6009 43.245 18.9203 42.577 18.9214 41.7998C18.9214 40.7447 18.9214 39.4274 18.9214 37.6211V37.0998L18.5738 36.7138C17.8923 35.9595 17.1171 35.0989 16.4283 33.996C15.7415 32.8911 15.1412 31.5529 14.8343 29.8173L14.697 29.0423L13.9551 28.7759C13.2995 28.5356 12.8157 28.2722 12.2767 27.6397C11.746 27.0029 11.1695 25.9197 10.667 24.0541C10.5651 23.6754 10.5307 23.3757 10.5307 23.1447C10.5318 22.8461 10.5838 22.6588 10.6421 22.5224C10.7295 22.3226 10.846 22.2123 10.9469 22.1364L11.0603 22.0677L11.0656 22.0647L11.2008 22.0199L11.3528 21.9189C11.5848 21.7691 11.8096 21.4965 11.9344 21.1854C12.0634 20.8711 12.1176 20.5268 12.1185 20.1148C12.1185 19.7485 12.0739 19.324 11.9687 18.7954C11.8449 18.1743 11.5891 16.7425 11.5891 14.9112C11.588 12.6003 12.0011 9.6911 13.5451 7.00973C13.7283 6.68301 13.7979 6.41137 13.8614 6.13469C13.9644 5.65809 14.0101 5.16813 14.0549 4.6634C14.1112 4.00059 14.1643 3.32747 14.2434 2.85508C15.8228 3.19012 17.0819 3.5438 18.733 3.92676C20.6423 4.37102 23.0312 4.83192 26.9269 5.30747L26.954 5.31157L26.9861 5.31462C29.0473 5.47493 30.6674 5.88485 31.9295 6.44255C33.8222 7.28641 34.9325 8.42782 35.641 9.72427C36.3444 11.0218 36.6181 12.517 36.6181 13.9861C36.6181 14.6229 36.566 15.2555 36.4797 15.8539C36.3039 17.0745 36.1354 18.3896 36.1321 19.4436C36.1332 19.7765 36.1466 20.0846 36.205 20.4071C36.2351 20.5683 36.2758 20.7359 36.3548 20.9262C36.4339 21.1145 36.5503 21.3393 36.7929 21.5662L36.7949 21.5672C37.0602 21.8013 37.2715 21.8751 37.4202 21.9334C37.6846 22.023 37.8303 22.0478 37.9342 22.0823L38.0508 22.126C38.0653 22.1644 38.1028 22.283 38.1028 22.54C38.1039 22.8823 38.0301 23.4504 37.798 24.26C37.2559 26.1734 36.7701 27.2629 36.3611 27.8247C36.1561 28.1098 35.9813 28.2742 35.7868 28.4105C35.591 28.5468 35.359 28.6581 35.0314 28.7758L34.2894 29.0411L34.1521 29.8173C33.8452 31.5529 33.2448 32.8909 32.5581 33.996C31.8694 35.0989 31.0942 35.9595 30.4127 36.7138L30.0661 37.0998V37.6211C30.0661 39.4274 30.0661 40.7447 30.0661 41.7998C30.064 42.5479 30.3575 43.2148 30.7393 43.7289C31.3178 44.504 32.0898 45.0482 32.9139 45.5216C33.739 45.9898 34.6308 46.3686 35.4673 46.6827C36.3756 47.0231 37.4464 47.3799 38.5504 47.8585C40.2078 48.5713 41.9059 49.5431 43.1555 50.9883C44.4021 52.4398 45.2792 54.3419 45.2896 57.2668C45.2895 57.273 45.2884 57.2824 45.2884 57.2886Z" fill="black" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="grid md:grid-cols-2 grid-cols-1 gap-y-2 sm:gap-x-2">
                                        <div className='block relative'>
                                            <label className='text-white tracking-wider text-xs font-Poppins mb-1 font-normal'>Email</label>
                                            <input type="email" id='email' placeholder='Email' name='email' className="placeholder:text-[8px] placeholder:tracking-wide w-full focus:outline-none font-Poppins text-xs rounded-md border py-1.5 px-1.5 bg-white text-black border-none" />
                                            <span className="absolute inset-y-0 top-6 end-0 grid place-content-center px-2 pointer-events-none">
                                                <svg className='size-3' viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M36.4009 11.8696C36.4362 12.8631 37.2702 13.6398 38.2638 13.6045C39.2571 13.5691 40.034 12.735 39.9985 11.7415L36.4009 11.8696ZM27.9133 2.20558V4.00558C27.9335 4.00558 27.9534 4.00525 27.9735 4.00458L27.9133 2.20558ZM12.4861 2.20558L12.426 4.00458C12.446 4.00525 12.4661 4.00558 12.4861 4.00558V2.20558ZM0.400854 11.7415C0.365454 12.735 1.14217 13.5691 2.13565 13.6045C3.12913 13.6398 3.96317 12.8631 3.99855 11.8696L0.400854 11.7415ZM39.9997 11.8056C39.9997 10.8115 39.1938 10.0056 38.1997 10.0056C37.2056 10.0056 36.3997 10.8115 36.3997 11.8056H39.9997ZM38.1997 26.2057L39.9985 26.2695C39.9992 26.2484 39.9997 26.227 39.9997 26.2057H38.1997ZM27.9133 35.8057L27.9735 34.0066C27.9534 34.0059 27.9335 34.0057 27.9133 34.0057V35.8057ZM12.4861 35.8057V34.0057C12.4661 34.0057 12.446 34.0059 12.426 34.0066L12.4861 35.8057ZM2.1997 26.2057H0.399702C0.399702 26.227 0.400086 26.2484 0.400854 26.2695L2.1997 26.2057ZM3.9997 11.8056C3.9997 10.8115 3.19381 10.0056 2.1997 10.0056C1.2056 10.0056 0.399702 10.8115 0.399702 11.8056H3.9997ZM39.1076 13.3598C39.9661 12.8584 40.2553 11.756 39.7539 10.8977C39.2526 10.0393 38.1503 9.74991 37.2918 10.2513L39.1076 13.3598ZM25.5661 19.1857L24.6582 17.6312L24.6433 17.6401L25.5661 19.1857ZM14.8333 19.1857L15.7563 17.6401L15.7412 17.6314L14.8333 19.1857ZM3.10762 10.2513C2.24924 9.74991 1.14689 10.0393 0.645462 10.8977C0.14403 11.756 0.433398 12.8584 1.29178 13.3598L3.10762 10.2513ZM39.9985 11.7415C39.7679 5.26078 34.3345 0.189968 27.8531 0.406592L27.9735 4.00458C32.4707 3.85426 36.2408 7.37281 36.4009 11.8696L39.9985 11.7415ZM27.9133 0.405584H12.4861V4.00558H27.9133V0.405584ZM12.5462 0.406592C6.065 0.189968 0.631614 5.26078 0.400854 11.7415L3.99855 11.8696C4.1587 7.37281 7.92879 3.85426 12.426 4.00458L12.5462 0.406592ZM36.3997 11.8056V26.2057H39.9997V11.8056H36.3997ZM36.4009 26.1416C36.2408 30.6385 32.4707 34.1569 27.9735 34.0066L27.8531 37.6045C34.3345 37.8212 39.7679 32.7505 39.9985 26.2695L36.4009 26.1416ZM27.9133 34.0057H12.4861V37.6057H27.9133V34.0057ZM12.426 34.0066C7.92879 34.1569 4.15868 30.6385 3.99855 26.1416L0.400854 26.2695C0.631614 32.7505 6.065 37.8212 12.5462 37.6045L12.426 34.0066ZM3.9997 26.2057V11.8056H0.399702V26.2057H3.9997ZM37.2918 10.2513L24.6582 17.6312L26.474 20.7399L39.1076 13.3598L37.2918 10.2513ZM24.6433 17.6401C21.9063 19.2747 18.4933 19.2747 15.7563 17.6401L13.9105 20.731C17.7841 23.0444 22.6153 23.0444 26.4889 20.731L24.6433 17.6401ZM15.7412 17.6314L3.10762 10.2513L1.29178 13.3598L13.9254 20.7399L15.7412 17.6314Z" fill="black" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className='block relative'>
                                            <label className='text-white tracking-wider text-xs font-Poppins mb-1 font-normal'>Phone number</label>
                                            <input type="text" id='phoneNumber' placeholder='Phone number' name='phoneNumber' className="w-full placeholder:text-[8px] placeholder:tracking-wide focus:outline-none font-Poppins text-xs rounded-md border py-1.5 px-1.5 bg-white text-black border-none" />
                                            <span className='absolute inset-y-0 top-6 end-0 grid place-content-center px-2 pointer-events-none'>
                                                <svg className='size-3' viewBox="0 0 33 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M23.6 2H9.2C5.22355 2 2 5.22355 2 9.2V38C2 41.9765 5.22355 45.2 9.2 45.2H23.6C27.5765 45.2 30.8 41.9765 30.8 38V9.2C30.8 5.22355 27.5765 2 23.6 2Z" stroke="black" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M16.3998 40.1775C15.7548 40.1775 15.1361 39.9279 14.6801 39.4839C14.2241 39.0399 13.9678 38.4375 13.9678 37.8095C13.9678 37.3411 14.1103 36.8833 14.3776 36.4938C14.6448 36.1045 15.0247 35.8009 15.469 35.6217C15.9134 35.4424 16.4024 35.3955 16.8743 35.4869C17.3461 35.5783 17.7794 35.8038 18.1194 36.1351C18.4597 36.4661 18.6912 36.8881 18.7851 37.3475C18.879 37.8069 18.8308 38.2831 18.6467 38.7157C18.4626 39.1483 18.1508 39.5182 17.751 39.7785C17.3509 40.0387 16.8808 40.1775 16.3998 40.1775Z" fill="black" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="block relative">
                                        <label htmlFor="Subject" className="text-white tracking-wider text-xs font-Poppins font-normal mb-1">Subject</label>
                                        <input type="text" id="Subject" placeholder='Subject' className="w-full placeholder:text-[8px] placeholder:tracking-wide focus:outline-none font-Poppins text-xs rounded-md border py-1.5 px-1.5 bg-white text-black border-none" />
                                        <span className='absolute inset-y-0 top-6 end-0 grid place-content-center px-2 pointer-events-none'>
                                            <svg className='size-3' viewBox="0 0 40 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M19.5505 0.936035L21.9522 3.93824C24.7965 7.49369 25.8447 11.0018 25.7475 14.3675C25.653 17.6401 24.4788 20.5575 23.3063 22.9654C22.9123 23.7744 22.4865 24.5872 22.0965 25.3317C21.9158 25.6769 21.7425 26.0074 21.5837 26.3162C21.0535 27.3474 20.6482 28.2009 20.3907 28.9497C20.132 29.7014 20.084 30.1769 20.117 30.4774C20.1417 30.7042 20.218 30.9324 20.5177 31.2322C21.0135 31.7279 21.3792 31.8672 21.601 31.9097C21.8275 31.9534 22.1287 31.9392 22.5597 31.7622C23.5238 31.3657 24.7008 30.3334 25.9357 28.7849C27.122 27.2974 28.1578 25.5959 28.9085 24.2344C29.28 23.5604 29.5737 22.9846 29.7727 22.5808C29.872 22.3791 29.9475 22.2212 29.997 22.1162L30.0513 21.9999L30.063 21.9739L30.0648 21.9705L31.5293 18.7292L34.083 21.2051C39.865 26.8109 41.6543 34.9057 37.8538 42.2547C34.5488 48.6457 27.7808 52.9999 20 52.9999C9.01248 52.9999 0 44.2929 0 33.4242C0 27.6982 3.16717 23.6009 6.61677 19.5728C7.06682 19.0473 7.52675 18.5177 7.99392 17.9798C11.1971 14.2917 14.7412 10.2109 17.7805 4.34919L19.5505 0.936035ZM32.8172 27.4809C32.037 28.8302 31.0222 30.4262 29.8447 31.9024C28.4627 33.6354 26.632 35.4937 24.4615 36.3864C23.325 36.8537 22.0272 37.0837 20.656 36.8197C19.2797 36.5547 18.049 35.8344 16.9823 34.7677C15.9043 33.6897 15.299 32.4159 15.1465 31.0204C15.002 29.6984 15.2815 28.4307 15.6627 27.3224C16.0452 26.2114 16.593 25.0882 17.1373 24.0299C17.3318 23.6514 17.5238 23.2849 17.714 22.9221C18.0845 22.2154 18.448 21.5216 18.8107 20.7765C19.8897 18.5608 20.6863 16.4177 20.7495 14.2232C20.7835 13.0461 20.608 11.7862 20.0682 10.4319C17.2773 14.9274 14.2804 18.3728 11.7441 21.2888C11.2844 21.8173 10.8399 22.3283 10.4145 22.8251C6.937 26.8857 5 29.7192 5 33.4242C5 41.4167 11.6575 47.9999 20 47.9999C25.8857 47.9999 30.9545 44.7114 33.4125 39.9579C35.5667 35.7922 35.2622 31.2817 32.8172 27.4809Z" fill="black" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="block relative">
                                        <label htmlFor="Description" className="text-white tracking-wider text-sm font-Poppins font-normal mb-1">Description</label>
                                        <textarea type="text" id="Description" placeholder='Description' className="w-full placeholder:text-[8px] placeholder:tracking-wide h-32 resize-y focus:outline-none font-Poppins text-xs rounded-md border px-1.5 py-1.5 bg-white text-black border-none" />
                                        <span className='absolute inset-y-0 top-6 end-0 grid place-content-center px-2 pointer-events-none'>
                                            <svg className='size-3' viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4345 29.2782C23.3645 29.2782 24.0426 28.6389 24.0426 27.6508V24.861H24.1201C25.36 27.5926 27.898 29.2976 31.114 29.2976C36.4029 29.2976 39.8706 25.0935 39.8706 18.6034C39.8706 12.1132 36.3834 7.90911 31.1527 7.90911C27.9948 7.90911 25.4375 9.63336 24.2364 12.3263H24.1395V2.4264C24.1395 1.38026 23.4808 0.702148 22.5121 0.702148C21.5434 0.702148 20.8847 1.38026 20.8847 2.4264V27.6508C20.8847 28.6582 21.5046 29.2782 22.4345 29.2782ZM51.6499 29.2976C55.4665 29.2976 58.7212 27.2052 59.8255 24.241C59.9417 23.9118 60 23.6017 60 23.3305C60 22.4975 59.4188 21.9162 58.605 21.9162C57.8689 21.9162 57.4813 22.2068 57.0552 23.0592C56.0283 25.2679 54.2849 26.469 51.6694 26.469C47.8914 26.469 45.4115 23.4661 45.4115 18.6228C45.4115 13.818 47.8914 10.7377 51.6694 10.7377C54.1686 10.7377 55.9704 11.9195 57.0163 14.1862C57.4233 14.9998 57.8106 15.2904 58.5275 15.2904C59.3608 15.2904 59.9417 14.748 59.9417 13.8956C59.9417 13.6631 59.8838 13.3725 59.8064 13.1206C58.8375 10.1564 55.5249 7.90911 51.5916 7.90911C45.8186 7.90911 42.06 12.152 42.06 18.642C42.06 25.171 45.8571 29.2976 51.6499 29.2976ZM6.91639 29.2782C9.86111 29.2782 12.6509 27.6702 13.8133 25.1904H13.8715V27.7089C13.9102 28.6582 14.5496 29.2976 15.4601 29.2976C16.3901 29.2976 17.0294 28.6582 17.0294 27.6314V14.8061C17.0294 10.6214 13.9683 7.92851 9.08625 7.92851C5.46332 7.92851 2.46043 9.51711 1.33671 11.9775C1.12361 12.4619 0.988071 12.9269 0.988071 13.3338C0.988071 14.1862 1.608 14.7286 2.46043 14.7286C3.06096 14.7286 3.50657 14.5155 3.81654 13.9731C4.86279 11.7451 6.50946 10.7183 9.00868 10.7183C11.9923 10.7183 13.7552 12.3845 13.7552 15.0773V16.7048L7.57511 17.0534C2.71232 17.3828 0 19.572 0 23.1368C0 26.8371 2.82857 29.2782 6.91639 29.2782ZM30.3778 26.469C26.7356 26.469 24.1395 23.3499 24.1395 18.6228C24.1395 13.8762 26.7356 10.7571 30.3778 10.7571C34.1362 10.7571 36.4997 13.7988 36.4997 18.6034C36.4997 23.4468 34.1362 26.469 30.3778 26.469ZM7.69125 26.5853C5.09529 26.5853 3.35164 25.171 3.35164 23.0786C3.35164 21.0444 4.97904 19.7077 7.98193 19.4945L13.7552 19.1264V21.1413C13.7552 24.2023 11.0623 26.5853 7.69125 26.5853Z" fill="black" />
                                            </svg>
                                        </span>
                                    </div>

                                    <div className="flex items-center">
                                        <input type="radio" name="radio1" id="radioButton1" className="h-2.5 w-2.5" />
                                        <label htmlFor="radioButton1" className="pl-3 lg:text-[8px] text-[6px] -tracking-tight leading-3 font-medium text-white font-Poppins">
                                            Please review our<a href="" className='text-orange-500 font-semibold text-[8px] md:text-xs'> Terms and Conditions </a>
                                            before proceeding. By clicking "Agree," you acknowledge that you have read and accept the terms outlined.
                                        </label>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button type='submit' className='text-white active:translate-y-1 mt-2 px-2.5 py-2 rounded-xl font-medium no-underline group text-xs bg-gradient-to-tr from-[#0222C9] via-[#503B7B] to-[#C96202] flex justify-center items-center -tracking-tight'>Submit <svg className='w-4 h-4 group-hover:translate-x-1 transition-all duration-500 ease-in-out' viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M78.1233 27.7777H21.8758C20.1259 27.7777 18.751 26.5555 18.751 24.9999C18.751 23.4444 20.1259 22.2222 21.8758 22.2222H78.1233C79.8732 22.2222 81.2482 23.4444 81.2482 24.9999C81.2482 26.5555 79.8732 27.7777 78.1233 27.7777Z" fill="#fff" />
                                            <path d="M62.4999 47.2222C62.09 47.2266 61.6837 47.1548 61.307 47.0112C60.9302 46.8677 60.5915 46.6557 60.3125 46.3888C59.0625 45.2777 59.0625 43.5555 60.3125 42.4444L79.9991 24.9444L60.3125 7.4444C59.0625 6.33329 59.0625 4.61107 60.3125 3.49996C61.5624 2.38885 63.4998 2.38885 64.7498 3.49996L86.6238 22.9444C87.8737 24.0555 87.8737 25.7777 86.6238 26.8888L64.7498 46.3333C64.1248 46.8888 63.3123 47.1666 62.5624 47.1666L62.4999 47.2222Z" fill="#fff" />
                                        </svg></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}