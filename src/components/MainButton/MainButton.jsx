import React from 'react'
import { IoRocket } from 'react-icons/io5'
import { MdArrowOutward } from 'react-icons/md'

export default function MainButton({ text, className, nav = false, submit = false, type }) {
    return <>
        <button type={type} className={`bg-[#f00] flex group items-center px-5 py-2 text-white duration-[0.3s] ${className}`}>
            {text}
            {nav?<MdArrowOutward className='ms-2 group-hover:rotate-45 duration-150 text-[22px]'/>:''}
            {submit?<IoRocket className='ms-2 rotate-45 duration-150 text-[22px]'/>:''}
        </button>
    </>
}
