import React from 'react'
import { Link } from 'react-router-dom'

export default function OrangeBtn({ to, text, onClick }) {
    return (
        <Link onClick={onClick} to={to} className="bg-[#C96202] text-white active:translate-y-[6px] py-2.5 px-5 rounded-full text-xs font-medium tracking-wider font-Poppins transition duration-300 ease-in-out transform  shadow-custom-white">{text}</Link>
    )
}
