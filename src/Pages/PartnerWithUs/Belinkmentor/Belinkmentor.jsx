import React from 'react'
import Img from '../../../Components/ImageTag/ImageTag';
import { Link } from 'react-router-dom';

const Belinkmentor = () => {
    return (
        <React.Fragment>


            <section className="relative bg-custom h-screen text-white overflow-hidden">
                <div className="absolute inset-0">
                    <Img src="https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725985680/heroMentor_tfftag.png" alt="Background Image" className="object-cover object-center w-full h-full" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <div className="relative z-10 flex  flex-col justify-center items-center h-full max-w-md md:max-w-3xl mx-auto text-center">
                    <h1 className="md:text-5xl text-2xl mb-4 font-Poppins font-bold leading-relaxed  tracking-wider text-white">Be a Mentor: Share Your Insights and Ideas</h1>
                    <p className="md:text-xs text-xxs font-Poppins font-medium leading-5 md:max-w-xl mx-auto md:tracking-widest tracking-wider text-white mb-8">We believe in the power of collaboration and value the wisdom of experienced professionals. As part of our commitment to excellence, we're inviting you to share your insights, suggestions, and innovative ideas with us. Your mentorship can help us improve and grow, ensuring we continue to deliver top-notch logistics services.</p>
                    <Link className="bg-[#C96202]  text-white active:translate-y-[6px] py-2.5 px-5 rounded-full text-xs font-medium tracking-wider font-Poppins transition duration-300 ease-in-out transform  hover:shadow-custom-white">Guide us through your wisdom</Link>
                </div>
            </section>

            <section className='relative overflow-hidden bg-[#d9d9d9] px-4 py-6 lg:px-8 lg:py-6'>
                <div className="mx-auto max-w-full lg:max-w-2xl">
                    <p className='font-Poppins text-xs font-medium tracking-wider leading-relaxed'>
                        At the heart of our growth and innovation lies collaboration. We recognize the immense value that experienced professionals bring to the table. That’s why we’re opening our doors to mentors who can help us elevate our services and set new standards in the logistics industry.
                    </p>
                </div>
            </section>


            <section className='relative isolate py-5 flex justify-center items-center overflow-hidden bg-custom'>
                <div className="mx-auto max-w-full md:max-w-6xl px-3 py-3 md:px-6">
                    <div className="grid md:grid-cols-2 place-items-center gap-10 grid-cols-1">
                        <div className="w-full md:hidden block rounded-lg md:rounded-xl">
                            <Img src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907884/joinus_jzxiz5.png"} alt={'joinus'} className={'object-fill object-center w-full h-full'} />
                        </div>
                        <div className="w-full px-3 py-3 space-y-5">
                            <h1 className="text-black text-xl md:text-3xl font-bold font-Poppins mb-5 md:mb-8 xl:mb-12  leading-6 tracking-wide">Why Your Insights Matter:</h1>
                            <p className='text-black font-Poppins leading-5 tracking-wider text-xs font-medium '>
                                Your experience and knowledge are invaluable to us. By sharing your insights, suggestions, and innovative ideas, you play a crucial role in shaping the future of our logistics solutions. Your guidance can help us refine our processes, introduce new technologies, and better serve our clients.
                            </p>
                        </div>
                        <div className="w-full hidden md:block rounded-lg md:rounded-xl">
                            <Img src={"https://res.cloudinary.com/dmh7fwdzf/image/upload/v1725907884/joinus_jzxiz5.png"} alt={'joinus'} className={'object-fill object-center w-full h-full'} />
                        </div>
                    </div>
                </div>
            </section>


            <section className='relative isolate  bg-custom'>
                <div className="mx-auto max-w-full md:max-w-6xl px-3 py-3 md:px-6">
                    <div className="flex justify-between items-center gap-10">
                        <h1 className='md:text-3xl  text-xl font-bold leading-6 tracking-wide font-Poppins text-black'>How to Contribute :</h1>
                        <div className="flex items-center space-x-3">
                            <Link className="hover:-translate-y-2 transition duration-700 ease-in-out">
                                <svg
                                    className="h-5"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M30 56.25C44.4975 56.25 56.25 44.4975 56.25 30C56.25 15.5025 44.4975 3.75 30 3.75C15.5025 3.75 3.75 15.5025 3.75 30C3.75 44.4975 15.5025 56.25 30 56.25Z"
                                        fill="url(#paint0_linear_152_157)"
                                    />
                                    <path
                                        d="M39.7757 38.028L40.9417 30.6189H33.6473V25.8131C33.6473 23.7857 34.6644 21.8083 37.9316 21.8083H41.25V15.5006C41.25 15.5006 38.2397 15 35.3631 15C29.3528 15 25.4282 18.5493 25.4282 24.972V30.6189H18.75V38.028H25.4282V55.9397C26.7688 56.145 28.1404 56.25 29.5376 56.25C30.9349 56.25 32.3066 56.145 33.6473 55.9397V38.028H39.7757Z"
                                        fill="white"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_152_157"
                                            x1="30"
                                            y1="3.75"
                                            x2="30"
                                            y2="56.0944"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#18ACFE" />
                                            <stop offset="1" stopColor="#0163E0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </Link>
                            <Link className="hover:-translate-y-2 transition duration-700 ease-in-out">
                                <svg
                                    className="h-5"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55Z"
                                        fill="#C13584"
                                    />
                                    <path
                                        d="M30 17.7027C34.0051 17.7027 34.4796 17.718 36.0613 17.7901C37.5238 17.8569 38.318 18.1012 38.8466 18.3066C39.5467 18.5787 40.0464 18.9038 40.5713 19.4286C41.0963 19.9536 41.4212 20.4533 41.6934 21.1534C41.8987 21.682 42.1431 22.4762 42.2099 23.9386C42.282 25.5204 42.2972 25.9948 42.2972 29.9999C42.2972 34.0051 42.282 34.4795 42.2099 36.0613C42.1431 37.5238 41.8987 38.3179 41.6934 38.8465C41.4212 39.5466 41.0963 40.0464 40.5714 40.5713C40.0464 41.0961 39.5467 41.4211 38.8466 41.6932C38.318 41.8987 37.5238 42.143 36.0613 42.2097C34.4799 42.2819 34.0055 42.2972 30 42.2972C25.9945 42.2972 25.5202 42.2819 23.9387 42.2097C22.4762 42.143 21.682 41.8987 21.1534 41.6932C20.4533 41.4211 19.9536 41.0961 19.4288 40.5713C18.9039 40.0464 18.5787 39.5466 18.3066 38.8465C18.1012 38.3179 17.8569 37.5238 17.7901 36.0613C17.718 34.4795 17.7027 34.0051 17.7027 29.9999C17.7027 25.9948 17.718 25.5204 17.7901 23.9386C17.8569 22.4762 18.1012 21.682 18.3066 21.1534C18.5787 20.4533 18.9038 19.9536 19.4288 19.4288C19.9536 18.9038 20.4533 18.5787 21.1534 18.3066C21.682 18.1012 22.4762 17.8569 23.9387 17.7901C25.5204 17.718 25.9949 17.7027 30 17.7027ZM30 15C25.9262 15 25.4154 15.0172 23.8155 15.0902C22.219 15.1631 21.1285 15.4166 20.1744 15.7875C19.188 16.1708 18.3515 16.6836 17.5176 17.5176C16.6836 18.3515 16.1708 19.188 15.7875 20.1744C15.4166 21.1285 15.1631 22.2189 15.0902 23.8155C15.0172 25.4154 15 25.9263 15 29.9999C15 34.0738 15.0172 34.5845 15.0902 36.1844C15.1631 37.781 15.4166 38.8714 15.7875 39.8255C16.1708 40.8119 16.6836 41.6484 17.5176 42.4824C18.3515 43.3163 19.188 43.8291 20.1744 44.2124C21.1285 44.5833 22.219 44.8368 23.8155 44.9096C25.4154 44.9826 25.9262 44.9999 30 44.9999C34.0737 44.9999 34.5846 44.9826 36.1845 44.9096C37.781 44.8368 38.8715 44.5833 39.8256 44.2124C40.812 43.8291 41.6485 43.3163 42.4824 42.4824C43.3163 41.6484 43.8292 40.8119 44.2125 39.8255C44.5834 38.8714 44.8369 37.781 44.9097 36.1844C44.9827 34.5845 45 34.0738 45 29.9999C45 25.9263 44.9827 25.4154 44.9097 23.8155C44.8369 22.2189 44.5834 21.1285 44.2125 20.1744C43.8292 19.188 43.3163 18.3515 42.4824 17.5176C41.6485 16.6836 40.812 16.1708 39.8256 15.7875C38.8715 15.4166 37.781 15.1631 36.1845 15.0902C34.5846 15.0172 34.0737 15 30 15Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M30.0073 22.3047C25.7532 22.3047 22.3047 25.7532 22.3047 30.0073C22.3047 34.2614 25.7532 37.7099 30.0073 37.7099C34.2614 37.7099 37.7101 34.2614 37.7101 30.0073C37.7101 25.7532 34.2614 22.3047 30.0073 22.3047ZM30.0073 35.0073C27.2459 35.0073 25.0073 32.7687 25.0073 30.0073C25.0073 27.2459 27.2459 25.0073 30.0073 25.0073C32.7688 25.0073 35.0073 27.2459 35.0073 30.0073C35.0073 32.7687 32.7688 35.0073 30.0073 35.0073Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M39.8129 21.9954C39.8129 22.9894 39.007 23.7954 38.0129 23.7954C37.0188 23.7954 36.2129 22.9894 36.2129 21.9954C36.2129 21.0013 37.0188 20.1953 38.0129 20.1953C39.007 20.1953 39.8129 21.0013 39.8129 21.9954Z"
                                        fill="white"
                                    />
                                </svg>
                            </Link>
                            <Link className="hover:-translate-y-2 transition duration-700 ease-in-out">
                                <svg
                                    className="h-5"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55Z"
                                        fill="#0077B5"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M23.4683 17.8549C23.4683 19.4113 22.2833 20.6708 20.4302 20.6708C18.6492 20.6708 17.4641 19.4113 17.5008 17.8549C17.4641 16.2229 18.6491 15 20.4657 15C22.2833 15 23.4328 16.2229 23.4683 17.8549ZM17.6498 41.0239V22.8953H23.2838V41.0226L17.6498 41.0239Z"
                                        fill="white"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M27.7994 28.6821C27.7994 26.4209 27.7249 24.4932 27.6504 22.8991H32.5441L32.8043 25.3826H32.9155C33.657 24.2331 35.5101 22.4922 38.5129 22.4922C42.2193 22.4922 44.9996 24.9391 44.9996 30.2751V41.0276H39.3655V30.9811C39.3655 28.6443 38.5508 27.0512 36.5119 27.0512C34.9544 27.0512 34.0283 28.1262 33.6581 29.1634C33.5091 29.5348 33.4358 30.0528 33.4358 30.5731V41.0276H27.8016V28.6821H27.7994Z"
                                        fill="white"
                                    />
                                </svg>
                            </Link>
                            <Link className="hover:-translate-y-2 transition duration-700 ease-in-out">
                                <svg
                                    className="h-5"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55Z"
                                        fill="#1DA1F2"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M45 20.3857C43.8971 20.8757 42.7101 21.2057 41.4652 21.3547C42.7361 20.5927 43.7121 19.3869 44.171 17.95C42.9831 18.6559 41.6643 19.1669 40.2634 19.4439C39.1404 18.248 37.5395 17.5 35.7706 17.5C32.3719 17.5 29.616 20.2559 29.616 23.6546C29.616 24.1365 29.671 24.6065 29.776 25.0575C24.6604 24.8015 20.1256 22.3506 17.0899 18.6269C16.5599 19.5359 16.2569 20.5928 16.2569 21.7208C16.2569 23.8556 17.3419 25.7395 18.9947 26.8434C17.9847 26.8114 17.0369 26.5344 16.2059 26.0734V26.1504C16.2059 29.1332 18.3288 31.62 21.1426 32.187C20.6266 32.327 20.0826 32.403 19.5218 32.403C19.1248 32.403 18.7387 32.364 18.3627 32.292C19.1458 34.7369 21.4196 36.5168 24.1124 36.5668C22.0065 38.2166 19.3528 39.2015 16.4689 39.2015C15.9709 39.2015 15.481 39.1725 15 39.1145C17.7239 40.8605 20.9586 41.8804 24.4344 41.8804C35.7546 41.8804 41.9452 32.502 41.9452 24.3695C41.9452 24.1025 41.9403 23.8366 41.9273 23.5736C43.1311 22.7036 44.175 21.6197 45 20.3857Z"
                                        fill="white"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-3 md:grid-cols-2 md:mt-8 mt-4 grid-cols-1 gap-5">
                        <div className="hover:shadow-custom-white shadow-md transition-all duration-300 ease-in-out  hover:shadow-gray-500 rounded-lg bg-white">
                            <div className="px-4 md:px-8 md:py-8 py-4">
                                <p className="font-Poppins text-sm font-semibold tracking-tight text-black md:font-bold md:tracking-wider">Online Form</p>

                                <div className="mt-4 max-w-sm md:max-w-xl">
                                    <p className="text-[9px] font-Poppins font-medium leading-4 tracking-wider text-black">Easily share your thoughts and ideas by filling out our mentorship and suggestion form. Your contributions will be reviewed and considered by our team.</p>
                                </div>
                            </div>
                        </div>
                        <div className="hover:shadow-custom-white shadow-md transition-all duration-300 ease-in-out  hover:shadow-gray-500 rounded-lg bg-white">
                            <div className="px-4 md:px-8 md:py-8 py-4">
                                <p className="font-Poppins text-sm font-semibold tracking-tight text-black md:font-bold md:tracking-wider">Email</p>

                                <div className="mt-4 max-w-sm md:max-w-xl">
                                    <p className="text-[9px] font-Poppins font-medium leading-4 tracking-wider text-wrap text-black">Prefer a more direct approach? Send your detailed suggestions and insights to <a href="mailto:chanakya@16dcargos.com" className='inline-block after-line text-xs font-Poppins font-semibold tracking-wide'>chanakya@16dcargos.com
                                    </a> and our team will get back to you promptly.</p>
                                </div>
                            </div>
                        </div>
                        <div className="hover:shadow-custom-white shadow-md transition-all duration-300 ease-in-out  hover:shadow-gray-500 rounded-lg bg-white">
                            <div className="px-4 md:px-8 md:py-8 py-4">
                                <p className="font-Poppins text-sm font-semibold tracking-tight text-black md:font-bold md:tracking-wider">Discussion Forum</p>

                                <div className="mt-4 max-w-sm md:max-w-xl">
                                    <p className="text-[9px] font-Poppins font-medium leading-4 tracking-wider text-black">Join our community forum through social channels to engage in discussions, exchange ideas, and collaborate with other mentors and our team. This platform allows for a dynamic and ongoing conversation about the future of logistics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='relative isolate overflow-hidden  bg-custom'>
                <div className="md:max-w-6xl max-w-xl mx-auto px-3 py-3 md:px-6">
                    <div className="flex justify-center h-full md:py-12 py-2 items-center md:flex-row flex-col gap-5">
                        <div className="md:w-1/2 w-full">
                            <h2 className='md:text-4xl text-2xl font-Poppins text-black leading-6 tracking-wider font-bold'>Benefits of Mentorship:</h2>
                            <p className='font-medium font-Poppins mt-3 md:mt-6 text-xxs md:text-xs leading-5 tracking-wider text-gray-800'>Join Us in Shaping the Future: We are on a mission to revolutionize the logistics industry, and we believe that with your help, we can achieve great things. Join us as a mentor and be part of a transformative journey. Your expertise and guidance can make a significant difference. Let’s work together to build a brighter future for logistics in India.</p>
                        </div>

                        <div className="md:w-1/2 w-full">
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                                <div className="hover:shadow-custom-white shadow-md transition-all duration-300 ease-in-out  hover:shadow-gray-500 rounded-lg bg-white">
                                    <div className="px-4 md:px-6 md:py-6 py-4">
                                        <p className="font-Poppins text-sm font-semibold tracking-tight text-black md:font-bold md:tracking-wider">Impactful Contribution</p>

                                        <div className="mt-4 max-w-sm md:max-w-xl">
                                            <p className="text-[9px] font-Poppins font-medium leading-4 tracking-wider text-black">Your ideas can lead to real changes and improvements in our operations.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="hover:shadow-custom-white shadow-md transition-all duration-300 ease-in-out  hover:shadow-gray-500 rounded-lg bg-white">
                                    <div className="px-4 md:px-6 md:py-6 py-4">
                                        <p className="font-Poppins text-sm font-semibold tracking-tight text-black md:font-bold md:tracking-wider">Networking Opportunities</p>

                                        <div className="mt-4 max-w-sm md:max-w-xl">
                                            <p className="text-[9px] font-Poppins font-medium leading-4 tracking-wider text-black">Connect with other industry professionals and expand your network.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="hover:shadow-custom-white shadow-md transition-all duration-300 ease-in-out  hover:shadow-gray-500 rounded-lg bg-white">
                                    <div className="px-4 md:px-6 md:py-6 py-4">
                                        <p className="font-Poppins text-sm font-semibold tracking-tight text-black md:font-bold md:tracking-wider">Recognition</p>

                                        <div className="mt-4 max-w-sm md:max-w-xl">
                                            <p className="text-[9px] font-Poppins font-medium leading-4 tracking-wider text-black">Your contributions will be acknowledged and celebrated within our community.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='bg-white overflow-hidden isolate relative'>
                <div className="max-w-full mx-auto md:max-w-6xl px-3 py-3 md:px-6">
                    <div className="">
                        <h1 className='md:text-4xl text-2xl font-Poppins tracking-wide leading-6 font-bold text-black mb-2'>Ready to get started?</h1>
                        <p className='font-Poppins text-sm leading-6 tracking-wide font-normal text-black'>Contact us today and become a mentor who makes a difference!</p>
                    </div>
                    <form >
                        <div className="relative inset-0 mt-5">
                            <textarea name="suggestions" id="suggestions" placeholder='Write your suggestions here' className='w-full rounded-xl bg-custom focus:bg-white focus:ring-1 focus:ring-black transition-all duration-300 ease-out font-Poppins leading-6 px-3 py-2.5 h-60 placeholder:absolute placeholder:top-[6.5rem] placeholder:left-10  tracking-wide text-xs text-black placeholder:font-Poppins placeholder:text-gray-600 focus:shadow-custom-white focus:shadow-gray-600 shadow-sm focus:outline-none'></textarea>
                            <div className="absolute  hidden inset-y-0 top-0 end-0 md:grid place-content-center pr-12 pointer-events-none"><svg className='size-5' viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.5002 45.403L46.99 26.9132C44.4735 25.866 41.493 24.1455 38.6742 21.3267C35.855 18.5074 34.1342 15.5264 33.087 13.0097L14.597 31.4997C13.1542 32.9427 12.4327 33.6642 11.8122 34.4595C11.0803 35.398 10.4528 36.4132 9.94085 37.4875C9.50682 38.3982 9.1842 39.3662 8.5389 41.302L5.13612 51.5105C4.81857 52.463 5.0665 53.5132 5.77657 54.2235C6.48665 54.9335 7.53695 55.1815 8.4896 54.864L18.6979 51.461C20.6338 50.8157 21.6017 50.4932 22.5124 50.0592C23.5867 49.5472 24.602 48.9197 25.5405 48.1877C26.3357 47.5672 27.0575 46.8457 28.5002 45.403Z" fill="#FF8E26" />
                                <path d="M52.1207 21.7827C55.96 17.9434 55.96 11.7187 52.1207 7.87946C48.2815 4.04018 42.0567 4.04018 38.2175 7.87946L36 10.0971C36.0305 10.1888 36.0617 10.2817 36.0945 10.3759C36.9072 12.7188 38.441 15.79 41.326 18.6751C44.211 21.5601 47.2822 23.0937 49.6252 23.9066C49.719 23.9391 49.8115 23.9704 49.9028 24.0007L52.1207 21.7827Z" fill="#FF8E26" />
                            </svg></div>
                        </div>
                        <button className='transition duration-300 mt-3 ease-in-out hover:shadow-custom-white active:translate-y-1 font-Poppins hover:shadow-gray-600 text-white bg-[#0222C9] block px-1.5 py-1.5 lg:px-4 lg:py-2 text-xs rounded-xl font-semibold'>Submit</button>
                    </form>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Belinkmentor