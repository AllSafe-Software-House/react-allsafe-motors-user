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
    console.log(data?.data);
    useEffect(() => {
        dispatch(fetchAboutData())
        if (error) {
        }
    }, [arLang])
    return <>
        <HeadBanner text={data?.data?.heroSection?.Title} about disc={data?.data?.heroSection?.Description} bg={data?.data?.heroSection?.Image} />
        <section className="py-16">
            <div className="container">
                <Fade>
                    <h1 className="text-[#f00] font-bold text-[18px] md:text-[25px] lg:text-[35px]">{data?.data?.Overview?.Title}</h1>
                    <p className="font-medium py-10 border-b border-white">{data?.data?.Overview?.Description}</p>
                </Fade>
            </div>
        </section>
        <section className="py-16">
            <div className="container">
                <div className="flex flex-wrap items-start">
                    <div className="w-full relative z-10  lg:w-1/2">
                        <Fade className="absolute z-30 bottom-[-40px] right-[-35px]" delay={1000}>
                            <div className="bg-white p-3 rounded-lg w-[250px] h-[350px]">
                                <img className="w-full h-full rounded-lg object-cover" src={data?.data?.questionSection.Image[0]} alt="" />
                            </div>
                        </Fade>
                        <Fade direction="up" duration={1200}>
                            <img className="w-full rounded-xl" src={data?.data?.questionSection.Image[1]} alt="car" />
                        </Fade>
                    </div>
                    <div className="w-full lg:ps-36 lg:w-1/2">
                        <h3 className="font-semibold text-[18px] mb-7 md:text-[20px] lg:text-[30px]">{data?.data?.questionSection?.Title}</h3>
                        <div>
                            {data?.data?.Questions?.map((ques,i) => 
                            <div key={i} id={`accordion-collapse-${i}`} className="relative py-6 my-2 border-white border-t before:absolute before:left-[-20px] before:top-0 before:h-full before:w-1 before:rounded-full before:bg-[#f00]" data-accordion="close">
                                <h2 id={`accordion-collapse-heading-${i}`}>
                                    <button type="button" class="flex accord items-center justify-between w-full  font-medium  text-gray-500 gap-3 bg-transparent" data-accordion-target={`#accordion-collapse-body-${i}`} aria-expanded="false" aria-controls={`accordion-collapse-body-${i}`}>
                                        <span>{ques.Title}</span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id={`accordion-collapse-body-${i}`} class="hidden" aria-labelledby={`accordion-collapse-heading-${i}`}>
                                    <div class="pt-5">
                                        <p class="mb-2 ">{ques.Description}</p>
                                    </div>
                                </div>
                            </div>
                            )}
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
                            <h3 className="font-bold text-[#f00] text-[20px] mb-4 lg:text-[33px]">{data?.data?.ourMission?.Title}</h3>
                            <p>{data?.data?.ourMission?.Description}</p>
                            <h3 className="font-bold text-[#f00] mt-7 text-[20px] mb-4 lg:text-[33px]">{data?.data?.ourStory?.Title}</h3>
                            <p>{data?.data?.ourStory?.Description}</p>
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