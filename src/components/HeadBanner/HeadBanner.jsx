import React from 'react';
import light from '../../assets/images/Light.png'
import { Fade } from 'react-awesome-reveal';
import middle from '../../assets/images/Vector.png'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export default function HeadBanner({ text, disc, bg, about = false }) {
    const { t } = useTranslation('global')
    return (
        <>
            <Fade>
                <section
                    className=" py-52 relative overflow-hidden bg-center bg-cover"
                    style={{
                        backgroundImage: `
                    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                    url('${bg}')
                `,
                        backgroundPosition: "50% 50%"
                    }}
                >
                    <img src={middle} className='absolute  top-1/2 -translate-y-1/2 right-0' alt="light" />
                    <div className="container ">
                        <div className='py-3 relative before:absolute before:left-[-20px] before:top-0 before:h-full before:w-1 before:rounded-full before:bg-[#f00]'>
                            <Fade delay={200}>
                                <h1 className='text-[28px] font-bold md:text-[38px] ms-10 lg:text-[48px]'>{text}</h1>
                            </Fade>
                        </div>
                        <p className='text-[18px] text-slate-300 pt-10 md:text-[25px]'> {disc} </p>
                        {about ? <div className='flex pt-5 items-center'>
                            <Link to={'/vehicles'}> 
                            <button className='bg-[#fff] flex border-white border group items-center px-5 py-2 text-black duration-[0.3s] rounded-md'>{t('custom-text.buy')}</button>
                            </Link>
                            <Link to={'/contact-us'} className='mx-4'>
                            <button className='bg-transparent border-white border flex group items-center px-5 py-2 text-white hover:bg-white hover:text-black  duration-[0.3s] rounded-md'>{t('navlinks.contact_us')}</button>
                            </Link>
                        </div> : ""}
                    </div>
                </section>
            </Fade>
        </>
    );
}
