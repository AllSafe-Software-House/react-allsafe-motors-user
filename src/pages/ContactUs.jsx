import React, { useContext, useEffect } from 'react'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'
import mars from '../assets/images/Image Forground.png'
import left from '../assets/images/VectorL.png'
import right from '../assets/images/VectorR.png'
import middle from '../assets/images/Vector.png'
import { FaPhone } from 'react-icons/fa'
import MainButton from '../components/MainButton/MainButton'
import { useDispatch, useSelector } from 'react-redux'
import { TranslateContext } from '../context/TranslateContext'
import { fetchContactUsData } from '../redux/slices/contactSlice'
export default function ContactUs() {
    const { t } = useTranslation('global')
    let { data, isLoading, error } = useSelector(({ contactData }) => contactData);
    let dispatch = useDispatch()
    const { arLang } = useContext(TranslateContext);
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    useEffect(() => {
        dispatch(fetchContactUsData())
        if (error) {
        }
      }, [arLang])
    return <main>
        <section className='pt-32 relative pb-16 overflow-hidden'>
            <img src={right} className='absolute right-0 top-0 z-[-1]' alt="vector" />
            <img src={left} className='absolute left-0 top-0 z-[-1]' alt="vector" />
            <div className="container">
                <div className="flex flex-wrap items-center">
                    <div className='w-full md:w-1/2'>
                        <div className='prose'>
                            <Fade direction='up' delay={400}>
                                <h2 className='font-extrabold text-white text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px]'>{t('custom-text.contact')}</h2>
                                <p className='text-white text-[18px] md:text-[20px]'>Reach out, and let's create a universe of possibilities together!</p>
                            </Fade>
                        </div>
                    </div>
                    <div className='w-full hidden md:block md:w-1/2'>
                        <div>
                            <Fade direction='right'>
                                <img src={mars} alt="Mars" className='w-full' />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-20 relative'>
            <img src={middle} className='absolute right-0 top-0 z-[-1]' alt="vector" />
            <img src={left} className='absolute left-0 top-0 z-[-1]' alt="vector" />
            <div className="container">
                <div className="flex bg-[#FFFFFF0F] mt-10 md:p-6 rounded-2xl flex-wrap">
                    <div className='w-full px-4 my-4'>
                        <h3 className='font-semibold text-[20px] md:text-[30px]'>Let’s connect constellations</h3>
                        <p>Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.</p>
                        <div>
                            <form id='contact' className='mt-10'>
                                <Fade delay={400}>
                                    <div className='flex flex-wrap items-center'>
                                        <div className='w-full px-2 my-3 lg:w-1/2'>
                                            <div>
                                                <input type="text" name='Fname' placeholder={t('placeholders.first_name')} className="my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full" />

                                            </div>
                                        </div>
                                        <div className='w-full px-2 my-3 lg:w-1/2'>
                                            <div>
                                                <input type="text" name='Lname' placeholder={t('placeholders.last_name')} className="my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full" />

                                            </div>
                                        </div>
                                        <div className='w-full px-2 my-3'>
                                            <div>
                                                <input type="email" name='email' placeholder={t('placeholders.email')} className="my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full" />

                                            </div>
                                        </div>
                                        <div className='w-full px-2 my-3'>
                                            <div>
                                                <input type="text" name='phone' placeholder={t('placeholders.phonenumber')} className="my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full" />

                                            </div>
                                        </div>
                                        <div className='w-full px-2 my-3'>
                                            <textarea name='message' className='my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full' rows={10} placeholder={t('placeholders.message')}></textarea>
                                        </div>
                                        <div className='px-2 my-3 w-full'>
                                        <MainButton submit className={'w-full rounded-lg justify-center'} text={t('placeholders.submit')}/>
                                        </div>
                                    </div>
                                </Fade>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-20 overflow-hidden relative'>
            <img src={middle} className='absolute right-0 top-0 z-[-1]' alt="vector" />
            <img src={left} className='absolute left-0 top-0 z-[-1]' alt="vector" />
            <div className="container">
                <div className='prose lg:w-2/3'>
                    <Fade direction='up'>
                        <h3 className='text-white text-[30px] md:text-[44px]'>{t('custom-text.discover')}</h3>
                    </Fade>
                </div>
                <div className='my-2 w-full'>
                    <Fade direction='up' duration={1300}>
                        <div className='border border-[#7C4949] px-9 rounded-lg'>
                            <h4 className='text-[20px] font-bold my-3'>Specify the address of this branch</h4>
                            <p className='my-5 leading-6'>lputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit lputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit </p>
                            <Fade duration={1300} >
                                <div className='flex pt-4 items-center  flex-wrap'>
                                    <div className='w-full md:w-1/2 px-1 my-1 xl:w-1/3'>
                                        <div className='border border-[#262626] justify-center space-x-1 rounded-full py-1 bg-[#1A1A1A] px-2 text-[14px] text-white flex items-center'>
                                            <FaPhone />
                                            <span>+1 (123) 456-7890</span>
                                        </div>
                                    </div>
                                    <div className='w-full md:w-1/2 px-1 my-1 xl:w-1/3'>
                                        <div className='border border-[#262626] justify-center space-x-1 rounded-full py-1 bg-[#1A1A1A] px-2 text-[14px] text-white flex items-center'>
                                            <FaPhone />
                                            <span>+1 (123) 456-7890</span>
                                        </div>
                                    </div>
                                    <div className='w-full md:w-1/2 px-1 my-1 xl:w-1/3'>
                                        <div className='border border-[#262626] justify-center space-x-1 rounded-full py-1 bg-[#1A1A1A] px-2 text-[14px] text-white flex items-center'>
                                            <FaPhone />
                                            <span>+1 (123) 456-7890</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between h-full'>
                                    <button className='border-0 w-full py-2 px-4 mb-6 mt-14 rounded-xl group outline-0 bg-[#1E1E1E] text-white'>
                                        <span className='font-Poppins font-semibold text-[18px]'>{t("custom-text.direction")}</span>
                                    </button>
                                </div>
                            </Fade>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    </main>
}
