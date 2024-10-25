import ImageTag from "../ImageTag/ImageTag";
import logo from "../../assets/Logo/16Dlogo.png";
import { Link } from "react-router-dom";
import BlueBtn from "../Buttons/BlueBtn";
import { useState } from "react";

export default function Navbar({ handleToggleModal }) {

    const [toggle, setToggle] = useState(false)

    const handleToggleNav = () => {
        setToggle((preve) => !preve)
    }
    const [dropToggle, setDropToggle] = useState({})

    const handleOpenDropToggle = (e) => {
        const { id } = e.target
        setDropToggle((prev) => ({
            ...prev,
            [id]: !prev[id], // Toggle the value
        }));
    }
    return (
        <>
            <header
                className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 shadow backdrop-blur-lg md:top-4 md:rounded-3xl lg:max-w-screen-lg">
                <div className="xl:px-6 px-3 md:py-2.5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start shrink-0">
                            <Link aria-current="page" className="flex items-center md:py-0 py-3" to="/">
                                <ImageTag className="lg:h-12 h-7 w-auto" src={logo} alt="logo" />
                                <p className="sr-only">Website Title</p>
                            </Link>
                        </div>
                        <div className="hidden md:flex md:items-center md:justify-center">
                            <ul className="flex justify-center md:gap-x-6 gap-x-2 items-center">
                                <li className="">
                                    <Link to={'/'} className="rounded-lg transition-all py-3 duration-200 hover:text-gray-900 flex items-center justify-center  text-sm font-semibold leading-6 text-gray-900">
                                        Home
                                    </Link>
                                </li>
                                <li className="relative group">
                                    <Link
                                        className="rounded-lg transition-all duration-200 py-3 hover:text-gray-900 flex items-center justify-center  text-sm font-semibold leading-6 text-gray-900"
                                        aria-expanded="false"
                                    >
                                        Company
                                        <svg
                                            className="h-5 w-5 flex-none text-slate-950  group-hover:rotate-180 transition-all duration-700 ease-in-out"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                    <div
                                        id="dropdown"
                                        className={"absolute hidden  group-hover:block -left-8 top-8 z-10 mt-2 w-52 max-w-xs overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-gray-900/5"}
                                    >
                                        <div className="p-1">
                                            <div className="group relative  rounded-md p-3 text-sm leading-6 hover:bg-gray-100">
                                                <div className="flex-auto">
                                                    <Link to={'/aboutus'} className="block  font-semibold text-gray-900">
                                                        About us
                                                        <span className="absolute inset-0"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="group relative  rounded-md p-3 text-sm leading-6 hover:bg-gray-100">
                                                <div className="flex-auto">
                                                    <Link to={'/investor-insight'} className="block  font-semibold text-gray-900">
                                                        Investor Insights
                                                        <span className="absolute inset-0"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="relative group">
                                    <Link
                                        type="button"
                                        className="rounded-lg py-3 transition-all duration-200 hover:text-gray-900 flex items-center justify-center  text-sm font-semibold leading-6 text-gray-900"
                                        aria-expanded="false"
                                    >
                                        Products & Services
                                        <svg
                                            className="h-5 w-5 flex-none text-slate-950 group-hover:rotate-180 transition-all duration-700 ease-in-out"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                    <div
                                        id="dropdown"
                                        className={
                                            "absolute hidden group-hover:block -left-8 top-8 z-10 mt-2 w-52 max-w-xs overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-gray-900/5"
                                        }
                                    >
                                        <div className="p-1">
                                            <div className="group relative rounded-md p-3 text-sm leading-6 hover:bg-gray-100">
                                                <div className="flex-auto">
                                                    <Link to={'/full-truck-loaded'} className="block  font-semibold text-gray-900">
                                                        Full Truck Load
                                                        <span className="absolute inset-0"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="group relative rounded-md p-3 text-sm leading-6 hover:bg-gray-100">
                                                <div className="flex-auto">
                                                    <Link to={'/sixteenD-and-nirvaahi'} className="block  font-semibold text-gray-900">
                                                        16D and Nirvaahi
                                                        <span className="absolute inset-0"></span>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </li>
                                <li className="relative group">
                                    <Link
                                        type="button"
                                        className="rounded-lg py-3 transition-all duration-200 hover:text-gray-900 flex items-center justify-center  text-sm font-semibold leading-6 text-gray-900"
                                        aria-expanded="false"
                                    >
                                        Partner with us
                                        <svg
                                            className="h-5 w-5 flex-none text-slate-950 group-hover:rotate-180 transition-all duration-700 ease-in-out"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                    <div
                                        id="dropdown"
                                        className={
                                            "absolute hidden group-hover:block -left-8 top-8 z-10 mt-2 w-52 max-w-xs overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-gray-900/5"
                                        }
                                    >
                                        <div className="p-1">
                                            <div className="group relative rounded-md p-3 text-sm leading-6 hover:bg-gray-100">
                                                <div className="flex-auto">
                                                    <Link to={'/fleet-owners'} className="block  font-semibold text-gray-900">
                                                        Fleet Owners
                                                        <span className="absolute inset-0"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="group relative rounded-md p-3 text-sm leading-6 hover:bg-gray-100">
                                                <div className="flex-auto">
                                                    <Link to={'/be-link-mentor'} className="block  font-semibold text-gray-900">
                                                        Be a Mentor
                                                        <span className="absolute inset-0"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="relative group">
                                    <Link
                                        type="button"
                                        className="rounded-lg py-3 transition-all  duration-200 hover:text-gray-900 flex items-center justify-center  text-sm font-semibold leading-6 text-gray-900"
                                        aria-expanded="false"
                                    >
                                        Enrich and Teamup
                                        <svg
                                            className="h-5 w-5 flex-none text-slate-950 group-hover:rotate-180 transition-all duration-700 ease-in-out"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                    <div
                                        id="dropdown"
                                        className={
                                            "absolute hidden group-hover:block -left-8 top-8 z-10 mt-2 w-52 max-w-xs overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-gray-900/5"
                                        }
                                    >
                                        <div className="p-1">
                                            <div className="group relative rounded-md p-3 text-sm leading-6 hover:bg-gray-100">
                                                <div className="flex-auto">
                                                    <Link to={'/career'} className="block  font-semibold text-gray-900">
                                                        Career
                                                        <span className="absolute inset-0"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="group relative rounded-md p-3 text-sm leading-6 hover:bg-gray-100">
                                                <div className="flex-auto">
                                                    <Link to={'/skill-development'} className="block  font-semibold text-gray-900">
                                                        Skill Development
                                                        <span className="absolute inset-0"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden md:flex items-center justify-end gap-3">
                            <div >
                                <BlueBtn onClick={handleToggleModal} title={"Get Quote"} />
                            </div>
                        </div>
                        <div className="md:hidden relative flex items-center justify-end gap-3">
                            <button type="button" className="" onClick={handleToggleNav}>
                                {!toggle ? (
                                    <svg className="w-6 h-auto" viewBox="0 0 24 24" fill="none" >
                                        <path d="M20 7L4 7" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M15 12L4 12" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M9 17H4" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                ) : (
                                    <svg className=" w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile screen */}
                {
                    toggle && (
                        <div className="relative isolate overflow-hidden">
                            <div className="items-center h-screen  justify-between w-full md:flex md:w-auto lg:order-2" id="mobile-menu-2">
                                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                    <li>
                                        <Link
                                            onClick={handleToggleNav}
                                            to={'/'}
                                            className="block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-600 hover:text-white transition-all duration-500 ease-in-out"
                                            aria-current="page">Home</Link>
                                    </li>
                                    <li>
                                        <button id="company" onClick={handleOpenDropToggle} className="flex items-center justify-between w-full py-2 px-3 rounded-b-none text-gray-700 hover:bg-gray-600 hover:text-white transition-all duration-500 ease-in-out">Company <svg className={`w-2.5 h-2.5 ms-2.5 ${dropToggle.company ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg></button>


                                        <div className={`z-10 ${dropToggle.company ? '' : 'hidden'} font-normal  bg-white divide-y divide-gray-100 shadow w-full dark:bg-gray-700 dark:divide-gray-600`}>
                                            <ul className="py-2 text-sm text-gray-700 transition-all duration-500 ease-in-out dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <Link onClick={handleToggleNav} to={'/aboutus'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About us</Link>
                                                </li>
                                                <li>
                                                    <Link onClick={handleToggleNav} to={'/investor-insight'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Investor insight</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <button onClick={handleOpenDropToggle} id="product" className="flex items-center justify-between w-full py-2 px-3 rounded-b-none text-gray-700 hover:bg-gray-600 hover:text-white transition-all duration-500 ease-in-out">Product & Service <svg className={`w-2.5 h-2.5 ms-2.5 ${dropToggle.product ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg></button>


                                        <div className={`z-10 ${dropToggle.product ? '' : 'hidden'} font-normal  bg-white divide-y divide-gray-100 shadow w-full dark:bg-gray-700 dark:divide-gray-600`}>
                                            <ul className="py-2 text-sm text-gray-700 transition-all duration-500 ease-in-out dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <Link onClick={handleToggleNav} to={'/sixteenD-and-nirvaahi'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">16D and Nirvaahi</Link>
                                                </li>
                                                <li>
                                                    <Link onClick={handleToggleNav} to={'/full-truck-loaded'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Full Truck Load</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <button onClick={handleOpenDropToggle} id="partner" className="flex items-center justify-between w-full py-2 px-3 rounded-b-none text-gray-700 hover:bg-gray-600 hover:text-white transition-all duration-500 ease-in-out">Partner with us <svg className={`w-2.5 h-2.5 ms-2.5 ${dropToggle.partner ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg></button>


                                        <div className={`z-10 ${dropToggle.partner ? '' : 'hidden'} font-normal  bg-white divide-y divide-gray-100 shadow w-full dark:bg-gray-700 dark:divide-gray-600`}>
                                            <ul className="py-2 text-sm text-gray-700 transition-all duration-500 ease-in-out dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <Link onClick={handleToggleNav} to={'/fleet-owners'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Fleet Owners</Link>
                                                </li>
                                                <li>
                                                    <Link onClick={handleToggleNav} to={'/be-link-mentor'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Be Link Mentor</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <button onClick={handleOpenDropToggle} id="enrich" className="flex items-center justify-between w-full py-2 px-3 rounded-b-none text-gray-700 hover:bg-gray-600 hover:text-white transition-all duration-500 ease-in-out">Enrich and Teamup <svg className={`w-2.5 h-2.5 ms-2.5 ${dropToggle.enrich ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg></button>


                                        <div className={`z-10 ${dropToggle.enrich ? '' : 'hidden'} font-normal  bg-white divide-y divide-gray-100 shadow w-full dark:bg-gray-700 dark:divide-gray-600`}>
                                            <ul className="py-2 text-sm text-gray-700 transition-all duration-500 ease-in-out dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <Link onClick={handleToggleNav} to={'/career'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Career</Link>
                                                </li>
                                                <li>
                                                    <Link onClick={handleToggleNav} to={'/skill-development'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Skill Development</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="px-2 pt-3">
                                        <button type="button" onClick={handleToggleModal} className='transition w-full duration-300 ease-in-out hover:shadow-custom-white active:translate-y-1 font-Poppins hover:shadow-gray-600 text-white text-center bg-[#0222C9] block px-3 py-3 lg:px-4 lg:py-2 text-xs rounded-xl font-semibold'>Contact</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                }
            </header>
        </>
    );
}
