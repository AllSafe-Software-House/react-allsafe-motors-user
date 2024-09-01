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
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { postContactUsFormData } from '../redux/slices/contactFormSlice'
import Loading from '../components/Loading/Loading'
export default function ContactUs() {
    const { t } = useTranslation('global')
    let { data, isLoading, error } = useSelector(({ contactData }) => contactData);
    let { message, errorS } = useSelector(({ postContact }) => postContact);
    let dispatch = useDispatch()
    const { arLang } = useContext(TranslateContext);
    const validationSchema = Yup.object({
        Fname: Yup.string().required(t('errors.required')),
        Lname: Yup.string().required(t('errors.required')),
        email: Yup.string().email(t('errors.email')),
        phone: Yup.string().matches(/^\d{11}$/, 'Phone number must be 11 digits').required(t('errors.required')),
        message: Yup.string().required(t('errors.required')),
    });
    let formik = useFormik({
        initialValues: {
            Fname: '',
            Lname: '',
            email: '',
            phone: '',
            message: '',
        }, onSubmit: (values) => {
            dispatch(postContactUsFormData(values));
        }, validationSchema
    })
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchContactUsData())
    }, [])
    console.log(message?.message);
    console.log(data?.data);
    useEffect(() => {
        dispatch(fetchContactUsData())
        if (error) {
        }
    }, [arLang])
    return <main>
        {isLoading ? <Loading /> : <>
            <section className='pt-32 relative pb-16 overflow-hidden'>
                <img src={right} className='absolute right-0 top-0 z-[-1]' alt="vector" />
                <img src={left} className='absolute left-0 top-0 z-[-1]' alt="vector" />
                <div className="container">
                    <div className="flex flex-wrap items-center">
                        <div className='w-full md:w-1/2'>
                            <div className='prose'>
                                <Fade direction='up' delay={400}>
                                    <h2 className='font-extrabold text-white text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px]'>{t('custom-text.contact')}</h2>
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
                                <form onSubmit={formik.handleSubmit} id='contact' className='mt-10'>
                                    <Fade delay={400}>
                                        <div className='flex flex-wrap items-center'>
                                            <div className='w-full px-2 my-3 lg:w-1/2'>
                                                <div>
                                                    <input type="text" name='Fname' placeholder={t('placeholders.first_name')} onChange={formik.handleChange} onBlur={formik.handleBlur} className="my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full" />
                                                    {formik.touched.Fname && formik.errors.Fname ? <p className='text-left text-red-700'>{formik.errors.Fname}</p> : null}
                                                </div>
                                            </div>
                                            <div className='w-full px-2 my-3 lg:w-1/2'>
                                                <div>
                                                    <input type="text" name='Lname' placeholder={t('placeholders.last_name')} onChange={formik.handleChange} onBlur={formik.handleBlur} className="my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full" />
                                                    {formik.touched.Lname && formik.errors.Lname ? <p className='text-left text-red-700'>{formik.errors.Lname}</p> : null}
                                                </div>
                                            </div>
                                            <div className='w-full px-2 my-3'>
                                                <div>
                                                    <input type="email" name='email' placeholder={t('placeholders.email')} onChange={formik.handleChange} onBlur={formik.handleBlur} className="my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full" />
                                                    {formik.touched.email && formik.errors.email ? <p className='text-left text-red-700'>{formik.errors.email}</p> : null}
                                                </div>
                                            </div>
                                            <div className='w-full px-2 my-3'>
                                                <div>
                                                    <input type="text" name='phone' placeholder={t('placeholders.phonenumber')} onChange={formik.handleChange} onBlur={formik.handleBlur} className="my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full" />
                                                    {formik.touched.phone && formik.errors.phone ? <p className='text-left text-red-700'>{formik.errors.phone}</p> : null}
                                                </div>
                                            </div>
                                            <textarea name='message' onChange={formik.handleChange} onBlur={formik.handleBlur} className='my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full' rows={10} placeholder={t('placeholders.message')}></textarea>
                                            <div className='w-full px-2 my-3'>
                                                {formik.touched.message && formik.errors.message ? <p className='text-left text-red-700'>{formik.errors.message}</p> : null}
                                            </div>
                                            {message ? <p className='text-green-600 px-3'>{message?.message}</p> : null}
                                            <div className='px-2 my-3 w-full'>
                                                <MainButton submit className={'w-full rounded-lg justify-center'} text={t('placeholders.submit')} />
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
                    {data?.data?.map((branch, i) =>
                        <div key={i} className='my-2 w-full'>
                            <Fade direction='up' duration={1300}>
                                <div className='border border-[#7C4949] px-9 rounded-lg'>
                                    <h4 className='text-[20px] font-bold my-3'>{branch.Title}</h4>
                                    <p className='my-5 leading-6'>{branch.Description}</p>
                                    <Fade duration={1300} >
                                        <div className='flex pt-4 items-center  flex-wrap'>
                                            <div className='w-full md:w-1/2 px-1 my-1 xl:w-1/3'>
                                                <div className='border border-[#262626] justify-center space-x-1 rounded-full py-1 bg-[#1A1A1A] px-2 text-[14px] text-white flex items-center'>
                                                    <MdEmail />
                                                    <span>{branch.Email}</span>
                                                </div>
                                            </div>
                                            <div className='w-full md:w-1/2 px-1 my-1 xl:w-1/3'>
                                                <div className='border border-[#262626] justify-center space-x-1 rounded-full py-1 bg-[#1A1A1A] px-2 text-[14px] text-white flex items-center'>
                                                    <FaPhone />
                                                    <span>{branch.Phone}</span>
                                                </div>
                                            </div>
                                            <div className='w-full md:w-1/2 px-1 my-1 xl:w-1/3'>
                                                <div className='border border-[#262626] justify-center space-x-1 rounded-full py-1 bg-[#1A1A1A] px-2 text-[14px] text-white flex items-center'>
                                                    <FaLocationDot />
                                                    <span>{branch.Address}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-between h-full'>
                                            <a href={branch.Location}>
                                                <button className='border-0 w-full py-2 px-4 mb-6 mt-14 rounded-xl group outline-0 bg-[#1E1E1E] text-white'>
                                                    <span className='font-Poppins font-semibold text-[18px]'>{t("custom-text.direction")}</span>
                                                </button>
                                            </a>
                                        </div>
                                    </Fade>
                                </div>
                            </Fade>
                        </div>
                    )}
                </div>
            </section>
        </>}
    </main>
}
