import React from 'react';
import light from '../../assets/images/Light.png'
import { Fade } from 'react-awesome-reveal';
export default function HeadBanner({ text, disc, bg }) {
    return (
        <>
        <Fade>
            <section
                className="h-[35vh] relative overflow-hidden flex items-center bg-center bg-cover"
                style={{
                    backgroundImage: `
                    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                    url('${bg}')
                `,
                backgroundPosition: "50% 50%"
                }}
            >
                <img src={light} className='absolute bottom-0 right-0' alt="light" />
                <div className="container">
                    <div className='py-3 relative before:absolute before:left-[-20px] top-0 h-full w-1 rounded-full bg-[#f00]'>
                    <Fade delay={200}>
                    <h1 className='text-[28px] font-bold md:text-[38px] ms-10 lg:text-[48px]'>{text}</h1>
                    </Fade>
                    </div>
                    <p className='text-[18px] text-slate-300 pt-10 md:text-[25px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. </p>
                </div>
            </section>
        </Fade>
        </>
    );
}
