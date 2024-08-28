import { useTranslation } from "react-i18next";
import HeadBanner from "../components/HeadBanner/HeadBanner";
import { Fade } from "react-awesome-reveal";
import planet from '../assets/images/planet.png'
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TranslateContext } from "../context/TranslateContext";
import { fetchAboutData } from "../redux/slices/aboutSlice";
export default function About() {
    let { data, isLoading, error } = useSelector(({ aboutData }) => aboutData);
    const { arLang } = useContext(TranslateContext);
    let dispatch = useDispatch()
    const { t } = useTranslation('global');
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchAboutData())
    }, [])
    useEffect(() => {
        dispatch(fetchAboutData())
        if (error) {
        }
    }, [arLang])
    return <>
        <HeadBanner text={t('custom-text.aboutText')} about disc={'The meaning of production in Carlio is the creation, development, and the path to progress, and the starting point to achieve the goals that we all have the Petroforce brand, with over 20 years of experience in the oil and petrochemical industry.'} bg={'https://s3-alpha-sig.figma.com/img/f311/ad26/49ec50a8d80e556c60aa0941fe5cba4e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GKVuCjPleiYoMQ8OWA6roalNyDx4jffndi6I3PLMUBEDcWfIgnsqJCIu2uIZWjb0HD8~I9UyE5W5~~Qqn~XGdMjF-MQ50o32AbvSAaad90GZNBcmgeCDPmy3uKVv~zvJppVnKg1xIBhA3W6bHdHQXndsxTcjIn2AD~GqkG~0S4FcFuIX8FsR0wo27797CnbFoljy-jmQ04m9DmS7WEtMC9injPyDMLOHj6gB-WgK9q4PJwHspzd97gA8XBR6Y0m8EfEANH0XScJb6yQsKISw9pz5rOMI-c33Pn2GyEngmg8rISzJkMzbpvgO2kcWvYee4Ty4CI7V4yPF3HQWtmHqNQ__'} />
        <section className="py-16">
            <div className="container">
                <Fade>
                    <h1 className="text-[#f00] font-bold text-[18px] md:text-[25px] lg:text-[35px]">{t('custom-text.overview')}</h1>
                    <p className="font-medium py-10 border-b border-white">Carlio brand is one of the most reliable motor oil manufacturers, which is engaged in the production of high quality products with a history of more than decades in the industry. In order to get more information about other aspects and products of the Carlio brand, you can use the following buttons:</p>
                    <p className="font-medium py-10">The meaning of production in Carlio is the creation, development, and the path to progress, and the starting point to achieve the goals that we all have the Petroforce brand, with over 20 years of experience in the oil and petrochemical industry, we officially started our activities in the field of design, engineering, construction of refinery equipment, and the production of various motor and industrial lubricants in the year 1390 (2011)</p>
                    <p className="font-medium py-10">The meaning of production in Carlio is the creation, development, and the path to progress, and the starting point to achieve the goals that we all have the Petroforce brand, with over 20 years of experience in the oil and petrochemical industry, we officially started our activities in the field of design, engineering, construction of refinery equipment, and the production of various motor and industrial lubricants in the year 1390 (2011)</p>
                    <p className="font-medium py-10">The meaning of production in Carlio is the creation, development, and the path to progress, and the starting point to achieve the goals that we all have the Petroforce brand, with over 20 years of experience in the oil and petrochemical industry, we officially started our activities in the field of design, engineering, construction of refinery equipment, and the production of various motor and industrial lubricants in the year 1390 (2011)</p>
                </Fade>
            </div>
        </section>
        <section className="py-16">
            <div className="container">
                <div className="flex flex-wrap items-start">
                    <div className="w-full relative z-10  lg:w-1/2">
                        <Fade className="absolute z-30 bottom-[-40px] right-[-35px]" delay={1000}>
                            <div className="bg-white p-3 rounded-lg w-[250px] h-[350px]">
                                <img className="w-full h-full rounded-lg object-cover" src="https://s3-alpha-sig.figma.com/img/25d7/8de1/35bb9c42c262aff7bea35340f235d4e1?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kgbxziw2Jpj1EdBVg16LYlboEwLg8e1SX5V4Om8Qm9Z4~OkeIWruFOHSN0kge5ZJ3zUpfq-NaIAXf5oyEhJR3kUrpublxfbXC7jN7E-AS0chMbGIuhaRaAAD6hzNq98cdfOFj5w2Hjb8sbErTDzP49Szz~YRXxUNIOt2apnudviF7amzRdyYXGHaMxENvoXVcOh9FfjaktkZ~hLaO9lrVtrdh0gIhNwlTzCgZpskyqimv2wRBahLXi4Zyx3QFiIeLdrNItgGRt57rIKPiCSVEZAZceWc~mBTM7bXdzhfUkhfdEQ3twzFOvERSPqmXeqHG33S2xGC-NdovE4YWFGqHA__" alt="" />
                            </div>
                        </Fade>
                        <Fade direction="up" duration={1200}>
                            <img className="w-full rounded-xl" src="https://s3-alpha-sig.figma.com/img/f830/423f/24a195cdfbc66117f03c8be3977bf78a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dv9-CgfIdAYQ0qKNDdsQKp7-Njk7payS2277rWMZRpbE6BC4Yd~UbJt64iUSoUUyDGruVVKX1RNM2lVkM8DJAuYPWGTvFqkIeF02~caLbcrzcZ01EyyUQizh~5JpgnZZIwUqVTHRQ5dsoItPnkltqvax7nE2neV0a~4LPY2D-hbMQjTaQxv36~7hXe0ycycpjzNl4H9b8kg-~t9moCbE~7Za5UGHPeNKku2B3~JsrxnJwll9Z9LVvgq8Anlrgfp-7Wk8yvtvTZGoGqtu3OnzT8i0l4HO5stefPGV~MXavkMm1ensm9wFwp8RQOHycSEcM2zZLtRdx67GYa2kwrzH3A__" alt="car" />
                        </Fade>
                    </div>
                    <div className="w-full lg:ps-36 lg:w-1/2">
                        <h3 className="font-semibold text-[18px] mb-7 md:text-[20px] lg:text-[30px]">{t('custom-text.faq')}</h3>
                        <div>
                            <div id="accordion-collapse-1" className="relative py-6 my-2 border-white border-t before:absolute before:left-[-20px] before:top-0 before:h-full before:w-1 before:rounded-full before:bg-[#f00]" data-accordion="open">
                                <h2 id="accordion-collapse-heading-1">
                                    <button type="button" class="flex accord items-center justify-between w-full  font-medium  text-gray-500 gap-3 bg-transparent" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                        <span>What is Flowbite?</span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                                    <div class="pt-5">
                                        <p class="mb-2 ">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                        <p class="">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="accordion-collapse-2" className="relative py-6 my-2 border-white border-t before:absolute before:left-[-20px] before:top-0 before:h-full before:w-1 before:rounded-full before:bg-[#f00]" data-accordion="open">
                                <h2 id="accordion-collapse-heading-2">
                                    <button type="button" class="flex accord items-center justify-between w-full  font-medium  text-gray-500 gap-3 bg-transparent" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                        <span>What is Flowbite?</span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                                    <div class="pt-5">
                                        <p class="mb-2 ">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                        <p class="">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="accordion-collapse-3" className="relative py-6 my-2 border-white border-t before:absolute before:left-[-20px] before:top-0 before:h-full before:w-1 before:rounded-full before:bg-[#f00]" data-accordion="open">
                                <h2 id="accordion-collapse-heading-3">
                                    <button type="button" class="flex accord items-center justify-between w-full  font-medium  text-gray-500 gap-3 bg-transparent" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                        <span>What is Flowbite?</span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                                    <div class="pt-5">
                                        <p class="mb-2 ">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                        <p class="">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-16">
            <div className="container">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-1/2">
                        <Fade>
                            <h3 className="font-bold text-[#f00] text-[20px] mb-4 lg:text-[33px]">{t('custom-text.ourMission')}</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
                                Vulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis. Enim diam id.</p>
                            <h3 className="font-bold text-[#f00] mt-7 text-[20px] mb-4 lg:text-[33px]">{t('custom-text.ourStory')}</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
                                Vulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis. Enim diam id.</p>
                        </Fade>
                    </div>
                    <div className="w-full hidden lg:block lg:ps-36 lg:w-1/2">
                        <Fade direction="up">
                            <img src={planet} className="w-full float" alt="planet" />
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    </>
}