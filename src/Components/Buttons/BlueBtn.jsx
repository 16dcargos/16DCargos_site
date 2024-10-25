import React from 'react'
import { Link } from 'react-router-dom'

export default function BlueBtn({ title, to, onClick }) {
    return (
        <Link className='transition duration-300 ease-in-out hover:shadow-custom-white active:translate-y-1 font-Poppins hover:shadow-gray-600 text-white bg-[#0222C9] block px-1.5 py-1.5 lg:px-4 lg:py-2 text-xs rounded-xl font-semibold' onClick={onClick} to={to}>{title}</Link>
    )
}
