import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import MainButton from '../MainButton/MainButton';

export default function FairPriceSection() {
    const { t } = useTranslation('global');
    return <>
        <section className='py-16 relative text-white'>
            <div className="container">
                <div className="flex flex-wrap gutter-x-6">
                    <div className='w-full my-2 lg:w-1/2'>
                        <div className='flex flex-wrap gutter-x-6 items-start'>
                            <div className='w-1/2'>
                                <div className='w-full h-1/2 mb-10'>
                                    <Fade direction='up' className='h-full'>
                                        <img src='https://s3-alpha-sig.figma.com/img/3288/4a7d/21e5300e6eeef8f320cadd443910fb57?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cTaS~yKcdLJ-9iDzwTkB9t8O~OXzVoQamnb7zYkXxu3q70POolDp9pdD3DUiUMAVNsVsSN6fpEYUY1nU~HUwrC39rF4Wzp3wlC4aiCq0So2iVVvcJ74g7bhcJ3b-39siybHYnKamlWiRN7dWW0l5t8xLxDP6AlwGshiVRDM3sVCpB3cV4qIwH2OPan1H2HfxZ4VfwFXuTI2L4EwYpCsFuZNW5HZ8EwJ-bWgYifho3uYTcwblgNJopfXQ1LTmYjxCEv1HFLD9nv0CAWng6hJizOqnO81mk-PKoCvnPezNq77cmYmwQLaPO-S2OfQxC6QtgL6tJM61pQimNajNvd3SIA__' className='w-full h-full object-cover' alt="img" />
                                    </Fade>
                                </div>
                                <div className='h-1/2'>
                                    <Fade direction='up' delay={200} className='w-full'>
                                        <img src='https://s3-alpha-sig.figma.com/img/2d20/3977/c60d30e50e3c0655ca7cc456e96de1cb?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b0YXe-R75Kx4P1ei6U1LFCQ2X3WjVzrN0qk14RhANozVyJRWjJMd56fqQWSFiyOS65LzOlTIuDbBhnf6WtFkqlvKMlt02K3OPgFiNPyuAQBfk2AOIz1AmcFTLCwPNPlxIfwCj38YS7sYRASOw2mtyKVUBxcNQ3RWJuDVfgCKvKAkuTeDX2Zqu83sHfmlNez0lOtOK30eZJEbIUEDJwdcRi-Wd8Gksc732haFZypaMXcN7qAR4rIqSWje9V3LKdeQGM5FJ7CV3asutJm6TK-bAx0iFNCI2ZJB2gzYqyARN-Ju9WPoo9ctMXTAMS6kLNgXYXdmuotpzxhL~2E6Io1XoQ__' className='w-full h-full ps-16 object-cover mt-10' alt="img" />
                                    </Fade>
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <div>
                                    <Fade delay={400}>
                                        <img src='https://s3-alpha-sig.figma.com/img/bbb8/fc71/39cff42af5861aca87abcb1e0835ca51?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6pIoCN0Q3MP2gcwubQvjamUJBtFqgkRDovMsnsP7spnRKnozIJKIo~VVUr-zorFnYOq8tTwBzuokI4lupGmyiy-2PymxZtch-~f164wc3auCvGOBzkgcRZg3~m9oqIT7N5bEUtsiy3cfICGsBvcfloLKO9V3FSQ5A0rX89oZe~0K49pOawC-0RigVQOUPacI8tsoX6IQOSI7EN6z0jHGSnJ00AfAv9rt2hw-9eelB~2UYR2AS4adAD-fsSBt4u-X41xg3STXxXWB~Kt8LERtv1Iv6YDK3phxuuNe0X4FCkfTAUs85wZ77DuPVOVfQzTlqbaWhrR2RGmP3tRxtmcNg__' alt="pic" className='w-full' />
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full my-2 lg:ps-36 lg:w-1/2'>
                        <div className='prose'>
                            <Fade>
                                <h2 className='font-main mb-4 font-bold text-[20px] md:text-[32px]'>{t('custom-text.fairPrice')}</h2>
                                <p className='text-[14px] my-14'>We are committed to providing our customers with exceptional service,
                                    competitive pricing, and a wide range of.</p>
                                <ul className='mt-8 list-none'>
                                    <li className='flex items-center my-4'>
                                        <FaCheck />
                                        <p className='ms-4 text-base md:text-[18px] lg:text-[20px]'>We are the UK’s largest provider, with more patrols in more places</p>
                                    </li>
                                    <li className='flex items-center my-4'>
                                        <FaCheck />
                                        <p className='ms-4 text-base md:text-[18px] lg:text-[20px]'>We are the UK’s largest provider, with more patrols in more places</p>
                                    </li>
                                    <li className='flex items-center my-4'>
                                        <FaCheck />
                                        <p className='ms-4 text-base md:text-[18px] lg:text-[20px]'>We are the UK’s largest provider, with more patrols in more places</p>
                                    </li>
                                </ul>
                                <div className='pt-10'>
                                    <MainButton className={'rounded-lg py-4 text-[18px]'} text={t('custom-text.getStarted')} nav={true}/>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
