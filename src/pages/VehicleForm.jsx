import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import MainButton from '../components/MainButton/MainButton';
import left from '../assets/images/VectorL.png';
import right from '../assets/images/VectorR.png';
import Loading from '../components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { fetchPaymentData } from '../redux/slices/paymentTypesSlice';
import { postBuyCarData } from '../redux/slices/vehicleFormSlice';
import toast, { Toaster } from 'react-hot-toast';

export default function VehicleForm() {
    const { t } = useTranslation('global');
    const [selectedOption, setSelectedOption] = useState(null);
    const { message } = useSelector(({ buyCar }) => buyCar);
    const { data, error, isLoading } = useSelector(({ paymentType }) => paymentType);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [paymentType, setPaymentType] = useState('');

    const validationSchema = Yup.object({
        Fname: Yup.string().required(t('errors.required')),
        Lname: Yup.string().required(t('errors.required')),
        email: Yup.string().email(t('errors.email')),
        phone: Yup.string().matches(/^\d{11}$/, 'Phone number must be 11 digits').required(t('errors.required')),
        paymentType_id: Yup.string().required(t('errors.required')),
        confirm: Yup.string().required(t('errors.required')),
        address: Yup.string().required(t('errors.required')),
    });

    let formik = useFormik({
        initialValues: {
            Fname: '',
            Lname: '',
            email: '',
            phone: '',
            product_id: id,
            paymentType_id: paymentType,
            confirm: '',
            address: '',
        },
        onSubmit: (values) => {
            dispatch(postBuyCarData(values));
        },
        validationSchema,
    });

    const handleOptionChange = (event) => {
        const selectedId = parseInt(event.target.value);
        setSelectedOption(selectedId);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchPaymentData());
        if (error) {
            toast.error(error);
        }
    }, [dispatch]);

    return (
        <main>
            <Toaster />
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <section className='pb-28 pt-56 relative'>
                        <img src={right} className='absolute right-0 top-0 z-[-1]' alt="vector" />
                        <img src={left} className='absolute left-0 bottom-0 z-[-1]' alt="vector" />
                        <div className="container">
                            <div className="flex flex-wrap">
                                <div className='lg:w-1/2 px-2'>
                                    <Fade className='w-full h-full' duration={1200}>
                                        <img
                                            src='https://s3-alpha-sig.figma.com/img/5e04/709e/6424eb18f47268bd197a88c3bc96dff5?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UQWyaX3~FEgarfsuc5-~sMs2AFORFVmTvHQ6zyscLzqp6fbd7fsPEWVb-p-1c-Fah3l4x-L3za4uKznRgVDtMt0YxSpBgJwVnvaJIlopELQ90t5qd2-Kt-7UzDPjaEytJrfUXxBBTHK8bwPzsatvxpicJRPqhJPMU4NFYYvJszo1bEPogBONJ8FyRNw7i2Uk6LwPrI6K4ROTe2WrgnYbG80oM6x~FfsaIQEtz7uaMoOa-I1QaEZOBY47bYi7JjT6OesG4f3YW~3QLVjqk~VEqB13Gj8VkzNo~nIbdCC6cZY7VuCVt~7JUqmhoClTgHdVoz88wQ98e7Lc4WvlZzmzwQ__'
                                            className='w-full h-full rounded-xl'
                                            alt="chair"
                                        />
                                    </Fade>
                                </div>
                                <div className='lg:w-1/2 overflow-hidden px-2'>
                                    <form onSubmit={formik.handleSubmit} className='mt-10'>
                                        <Fade direction='up' delay={400}>
                                            <div className='flex flex-wrap items-center'>
                                                <div className="w-full px-2 my-2">
                                                    <select
                                                        onChange={e => {
                                                            handleOptionChange(e);
                                                            setPaymentType(e.target.value);
                                                            formik.handleChange(e);
                                                        }}
                                                        onBlur={formik.handleBlur}
                                                        name='paymentType_id'
                                                        className="my-1 bg-black border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full"
                                                    >
                                                        <option value={''} className='' disabled selected>{t('placeholders.payment')}</option>
                                                        {data?.data?.map(type => (
                                                            <option key={type.ID} value={type.ID} className=''>
                                                                {type.Title}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {formik.touched.paymentType_id && formik.errors.paymentType_id ? (
                                                        <div className="text-red-500 text-sm">{formik.errors.paymentType_id}</div>
                                                    ) : null}
                                                </div>

                                                {selectedOption && data?.data?.map((type) => {
                                                    if (type.ID === selectedOption) {
                                                        return (
                                                            <div className='border-b px-4 mt-3 content'>
                                                                <div key={type.ID}>
                                                                    <h2 className='text-[20px] font-medium'>{type.Title}</h2>
                                                                    <p className='my-2'>{type.Description}</p>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                    return null;
                                                })}

                                                <div className='w-full px-2 my-3 lg:w-1/2'>
                                                    <div>
                                                        <input
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            type="text"
                                                            name='Fname'
                                                            placeholder={t('placeholders.first_name')}
                                                            className="my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full"
                                                        />
                                                        {formik.touched.Fname && formik.errors.Fname ? (
                                                            <div className="text-red-500 text-sm">{formik.errors.Fname}</div>
                                                        ) : null}
                                                    </div>
                                                </div>

                                                <div className='w-full px-2 my-3 lg:w-1/2'>
                                                    <div>
                                                        <input
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            type="text"
                                                            name='Lname'
                                                            placeholder={t('placeholders.last_name')}
                                                            className=" my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full"
                                                        />
                                                        {formik.touched.Lname && formik.errors.Lname ? (
                                                            <div className="text-red-500 text-sm">{formik.errors.Lname}</div>
                                                        ) : null}
                                                    </div>
                                                </div>

                                                <div className='w-full px-2 my-3'>
                                                    <div>
                                                        <input
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            type="email"
                                                            name='email'
                                                            placeholder={t('placeholders.email')}
                                                            className=" my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full"
                                                        />
                                                        {formik.touched.email && formik.errors.email ? (
                                                            <div className="text-red-500 text-sm">{formik.errors.email}</div>
                                                        ) : null}
                                                    </div>
                                                </div>

                                                <div className='w-full px-2 my-3'>
                                                    <div>
                                                        <input
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            type="text"
                                                            name='phone'
                                                            placeholder={t('placeholders.phonenumber')}
                                                            className=" my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full"
                                                        />
                                                        {formik.touched.phone && formik.errors.phone ? (
                                                            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
                                                        ) : null}
                                                    </div>
                                                </div>

                                                <div className='w-full px-2 my-3'>
                                                    <div>
                                                        <input
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            type="text"
                                                            name='address'
                                                            placeholder={t('placeholders.address')}
                                                            className=" my-1 bg-[#FFFFFF0D] border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full"
                                                        />
                                                        {formik.touched.address && formik.errors.address ? (
                                                            <div className="text-red-500 text-sm">{formik.errors.address}</div>
                                                        ) : null}
                                                    </div>
                                                </div>

                                                <div className='w-full px-2 my-3'>
                                                    <div>
                                                        <select
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            name='confirm'
                                                            className="my-1 bg-black border-[#FFFFFF33] border py-2 px-4 outline-none rounded-lg w-full"
                                                        >
                                                            <option value={''} disabled selected>{t('placeholders.complete')}</option>
                                                            <option value={'yes'}>{t('placeholders.yes')}</option>
                                                            <option value={'no'}>{t('placeholders.no')}</option>
                                                        </select>
                                                        {formik.touched.confirm && formik.errors.confirm ? (
                                                            <div className="text-red-500 text-sm">{formik.errors.confirm}</div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                {message ?
                                                    <p className='text-green-600 px-2'>{message?.message}</p>
                                                    : ''
                                                }

                                                <div className='w-full px-2 mt-7'>
                                                    <MainButton text={t('placeholders.submit')} className={'justify-center rounded-lg w-full'} submit />
                                                </div>
                                            </div>
                                        </Fade>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </main>
    );
}
