import React from 'react'
import logo from '../../assets/images/All Safe Motors png.webp';
export default function Loading() {
    return <>
        <div className='h-[100vh] flex flex-col items-center justify-center'>
            <img src={logo} className='w-[120px] my-4' alt="all safe" />
            <div className="loader"></div>
        </div>
    </>
}
