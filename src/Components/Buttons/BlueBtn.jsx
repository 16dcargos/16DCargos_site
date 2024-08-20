import React from 'react'
import { Link } from 'react-router-dom'

export default function BlueBtn({ title, to }) {
    return (
        <Link className='shadow-custom-white active:translate-y-[2px] font-Poppins shadow-gray-600 text-white bg-[#0222C9] block px-1.5 py-1.5 lg:px-4 lg:py-2 text-sm rounded-xl font-semibold' to={to}>{title}</Link>
    )
}
