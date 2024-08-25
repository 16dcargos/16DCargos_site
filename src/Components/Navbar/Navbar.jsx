import ImageTag from "../ImageTag/ImageTag";
import logo from "../../assets/Logo/16Dlogo.png";
import { Link } from "react-router-dom";
import BlueBtn from "../Buttons/BlueBtn";
import { useState } from "react";
export default function Navbar() {

    const [toggle, setToggle] = useState(false)

    const handleToggleNav = () => {
        setToggle((preve) => !preve)
    }

    return (
        <>
            <header
                className="fixed inset-x-0 top-0 z-30 mx-auto w-full   max-w-screen-md border border-gray-100 bg-white/80 shadow backdrop-blur-lg md:top-4 md:rounded-3xl lg:max-w-screen-md">
                <div className="px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex shrink-0">
                            <Link aria-current="page" className="flex items-center md:py-0 py-3" to="/">
                                <ImageTag className="h-7 w-auto" src={logo} alt="logo" />
                                <p className="sr-only">Website Title</p>
                            </Link>
                        </div>
                        <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                            <ul className="flex justify-center lg:gap-x-5 gap-x-3  items-center">
                                <li className="">
                                    <Link className="rounded-lg transition-all py-3 duration-200 hover:text-gray-900 flex items-center justify-center lg:text-xs text-sm font-semibold leading-6 text-gray-900">
                                        Home
                                    </Link>
                                </li>
                                <li className="relative group">
                                    <Link
                                        type="button"
                                        className="rounded-lg transition-all duration-200 py-3 hover:text-gray-900 flex items-center justify-center lg:text-xs text-sm font-semibold leading-6 text-gray-900"
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
                                        className={
                                            "absolute hidden group-hover:block -left-8 top-8 z-10 mt-2 w-52 max-w-xs overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-gray-900/5"
                                        }
                                    >
                                        <div className="p-1">
                                            <div className="group relative  rounded-md p-3 text-sm leading-6 hover:bg-gray-100">
                                                <div className="flex-auto">
                                                    <Link className="block lg:text-xs font-semibold text-gray-900">
                                                        About us
                                                        <span className="absolute inset-0"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="group relative  rounded-md p-3 text-sm leading-6 hover:bg-gray-100">
                                                <div className="flex-auto">
                                                    <Link className="block lg:text-xs font-semibold text-gray-900">
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
                                        className="rounded-lg py-3 transition-all duration-200 hover:text-gray-900 flex items-center justify-center lg:text-xs text-sm font-semibold leading-6 text-gray-900"
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
                                                    <Link className="block lg:text-xs font-semibold text-gray-900">
                                                        16D and Nirvaahi
                                                        <span className="absolute inset-0"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="group relative rounded-md p-3 text-sm leading-6 hover:bg-gray-100">
                                                <div className="flex-auto">
                                                    <Link className="block lg:text-xs font-semibold text-gray-900">
                                                        Full Truck Load
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
                                        className="rounded-lg py-3 transition-all duration-200 hover:text-gray-900 flex items-center justify-center lg:text-xs text-sm font-semibold leading-6 text-gray-900"
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
                                                    <Link className="block lg:text-xs font-semibold text-gray-900">
                                                        Fleet Owners
                                                        <span className="absolute inset-0"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="group relative rounded-md p-3 text-sm leading-6 hover:bg-gray-100">
                                                <div className="flex-auto">
                                                    <Link className="block lg:text-xs font-semibold text-gray-900">
                                                        Be Link Mentor
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
                                        className="rounded-lg py-3 transition-all  duration-200 hover:text-gray-900 flex items-center justify-center lg:text-xs text-sm font-semibold leading-6 text-gray-900"
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
                                                    <Link className="block lg:text-xs font-semibold text-gray-900">
                                                        Career
                                                        <span className="absolute inset-0"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="group relative rounded-md p-3 text-sm leading-6 hover:bg-gray-100">
                                                <div className="flex-auto">
                                                    <Link className="block lg:text-xs font-semibold text-gray-900">
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
                                <BlueBtn title={"Get Link Qutoe"} to={"/Contact"} />
                            </div>
                        </div>
                        <div className="md:hidden flex items-center justify-end gap-3">
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
                                            className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                                            aria-current="page">Home</Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
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
