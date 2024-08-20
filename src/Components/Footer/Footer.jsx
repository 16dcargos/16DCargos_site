import React from "react";
import logo from "../../assets/Logo/16Dlogo.png";
import Img from "../ImageTag/ImageTag";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div className="px-4 bg-white pt-16 mx-auto relative isolate overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
            <div className="grid gap-12  row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="">
                    {/* sm:col-span-2 */}
                    <Link
                        to='/'
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <Img src={logo} key={"1"} className={"w-8"} alt={"logo"} />
                        <span className="ml-2 text-xl font-bold font-Poppins tracking-wide text-gray-800">
                            16 Cargos
                        </span>
                    </Link>
                    <div className="lg:max-w-sm">
                        <p className="text-sm   font-Poppins tracking-wider">
                            Discover our journey and what drives us to revolutionize logistics
                            across Bharat.
                        </p>
                    </div>
                    <div className="space-y-4 mt-6 lg:mt-4">
                        <div className="flex justify-start gap-x-1 items-center">
                            <span>
                                <svg
                                    className="w-5 h-5 mr-1"
                                    viewBox="0 0 52 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M48.1017 7.00781C34.6377 32.5438 17.3576 32.5198 3.89355 7.00781"
                                        stroke="black"
                                        strokeWidth="3.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="#FF8E26"
                                    />
                                    <path
                                        d="M1.97656 11.7367V35.7367C1.97656 38.2829 2.98799 40.7244 4.78833 42.5249C6.58869 44.3251 9.0305 45.3367 11.5766 45.3367H40.3765C42.9227 45.3367 45.3644 44.3251 47.1647 42.5249C48.9651 40.7244 49.9765 38.2829 49.9765 35.7367V11.7367C49.9765 9.19065 48.9651 6.7487 47.1647 4.94834C45.3644 3.14801 42.9227 2.13672 40.3765 2.13672H11.5766C9.0305 2.13672 6.58869 3.14801 4.78833 4.94834C2.98799 6.7487 1.97656 9.19065 1.97656 11.7367Z"
                                        stroke="black"
                                        strokeWidth="3.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <a
                                href="mailto:reachus@16dcargos.com"
                                aria-label="Our email"
                                title="Our email"
                                className="text-sm   font-Poppins tracking-wider"
                            >
                                reachus@16dcargos.com
                            </a>
                        </div>
                        <div className="flex justify-start gap-x-1 items-center">
                            <span>
                                <svg
                                    className="h-5 w-5 mr-1"
                                    viewBox="0 0 46 46"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M31.8905 29.3692L30.7517 30.568C30.7517 30.568 28.0452 33.4175 20.6577 25.6397C13.2703 17.8621 15.9767 15.0127 15.9767 15.0127L16.6938 14.2578C18.4602 12.3981 18.6267 9.41243 17.0856 7.23275L13.9331 2.77403C12.0257 0.0762506 8.33989 -0.280125 6.15362 2.0216L2.22962 6.15285C1.14557 7.29415 0.419121 8.77363 0.507221 10.4149C0.732596 14.6137 2.52677 23.6475 12.5384 34.188C23.1552 45.3655 33.117 45.8097 37.1907 45.4078C38.4792 45.2805 39.5997 44.5858 40.5027 43.635L44.0542 39.896C46.4515 37.3722 45.7755 33.0455 42.7082 31.28L37.932 28.5308C35.918 27.3715 33.4645 27.712 31.8905 29.3692Z"
                                        fill="#FF8E26"
                                    />
                                </svg>
                            </span>
                            <a
                                href="tel:850-123-5021"
                                aria-label="Our phone"
                                title="Our phone"
                                className="text-sm   font-Poppins tracking-wider"
                            >
                                850-123-5021
                            </a>
                        </div>
                        <div className="flex justify-start gap-x-1 items-center">
                            <span>
                                <svg
                                    className="h-5 w-5 mr-1"
                                    viewBox="0 0 46 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23 0C10.5744 0 0.5 10.0744 0.5 22.5C0.5 27.3928 2.10406 31.8825 4.77031 35.5594C4.81813 35.6475 4.82562 35.7459 4.88 35.8303L19.88 58.3303C20.5756 59.3738 21.7475 60 23 60C24.2525 60 25.4244 59.3738 26.12 58.3303L41.12 35.8303C41.1753 35.7459 41.1819 35.6475 41.2297 35.5594C43.8959 31.8825 45.5 27.3928 45.5 22.5C45.5 10.0744 35.4256 0 23 0ZM23 30C18.8581 30 15.5 26.6419 15.5 22.5C15.5 18.3581 18.8581 15 23 15C27.1419 15 30.5 18.3581 30.5 22.5C30.5 26.6419 27.1419 30 23 30Z"
                                        fill="#FF8E26"
                                    />
                                </svg>
                            </span>
                            <Link
                                href="https://www.google.com/maps"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Our address"
                                title="Our address"
                                className="text-sm   font-Poppins tracking-wider"
                            >
                                312 Lovely Street, NY
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="sm:col-span-1">
                    <span className="text-xl font-bold tracking-wide text-black">
                        Services
                    </span>
                    <div className="flex justify-start flex-col mt-2 space-y-2">
                        <Link className="font-Poppins font-normal text-sm tracking-wide transition-colors duration-300 hover:text-gray-800">
                            Full Truck Load (FTL) Services
                        </Link>
                        <Link className="font-Poppins font-normal text-sm tracking-wide transition-colors duration-300 hover:text-gray-800">
                            Partner with Us
                        </Link>
                        <Link className="font-Poppins font-normal text-sm tracking-wide transition-colors duration-300 hover:text-gray-800">
                            Career Opportunities
                        </Link>
                        <Link className="font-Poppins font-normal text-sm tracking-wide transition-colors duration-300 hover:text-gray-800">
                            Skill Development
                        </Link>
                    </div>

                </div>


                <div>
                    <span className="text-xl font-bold tracking-wide text-gray-900">
                        Social
                    </span>
                    <p className="text-sm  mt-2 font-Poppins tracking-wider">
                        Stay connected and updated with our latest news and insights.
                    </p>
                    <div className="mt-4 flex items-center space-x-3">
                        <Link className="">
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
                        <Link className="">
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
                        <Link className="">
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
                        <Link className="">
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

                <div className="">
                    <span className="text-xl font-bold tracking-wide text-gray-900">
                        Newsletter
                    </span>
                    <p className="text-sm mt-2  font-Poppins tracking-wider">
                        Subscribe to our newsletter for the latest updates and industry insights.
                    </p>
                    <form noValidate>
                        <div className="relative mt-3">
                            <input
                                placeholder="Email"
                                type="email"
                                className="flex h-8 w-full rounded-full border-[1px] px-3 py-2 text-sm bg-[#d9d9d9] focus:bg-transparent transition-all duration-300 ease-in-out ring-offset-background font-Poppins placeholder:tracking-wide placeholder:font-Poppins placeholder:text-gray-500 focus-visible:outline-none  focus-visible:ring-offset-2 placeholder:text-xs"
                            />
                            <button className="bg-[#FF8E26] absolute top-0 flex justify-center items-center right-0 h-8 w-8 rounded-full">
                                <svg className="size-4" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.79347 20.1379C1.80148 28.3699 23.8095 35.7619 23.8095 35.7619C23.8095 35.7619 31.2016 57.7699 39.4336 52.7779C48.1696 47.4499 58.6336 14.7139 51.7216 7.8499C44.8096 0.985898 12.1215 11.4019 6.79347 20.1379Z" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M37.6796 21.8867L23.8076 35.7587" stroke="white" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p className="text-sm tracking-wide font-Poppins font-medium ">
                    © 2024 16D Cargos. All Rights Reserved
                </p>
                <div className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <p className="font-Poppins text-xl font-semibold tracking-normal">Move, Manage, Master</p>
                </div>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <Link className="text-sm text-black font-Poppins font-medium tracking-wide">
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link className="text-sm text-black font-Poppins font-medium tracking-wide">
                            Terms of Service
                        </Link>
                    </li>
                </ul>
            </div>
            <svg viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7">
                </circle>
                <defs>
                    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                        <stop stopColor="#3b82f6"></stop>
                        <stop offset="1" stopColor="#1d4ed8"></stop>
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
}
