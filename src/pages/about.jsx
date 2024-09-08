import { useTranslation } from "react-i18next";
import HeadBanner from "../components/HeadBanner/HeadBanner";
import { Fade } from "react-awesome-reveal";
import planet from '../assets/images/planet.png'
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TranslateContext } from "../context/TranslateContext";
import { fetchAboutData } from "../redux/slices/aboutSlice";
import Loading from "../components/Loading/Loading";
import toast, { Toaster } from "react-hot-toast";
export default function About() {
    let { data, isLoading, error } = useSelector(({ aboutData }) => aboutData);
    const { arLang } = useContext(TranslateContext);
    let dispatch = useDispatch()
    const { t } = useTranslation('global');
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchAboutData())
        if (error) {
            toast.error(error);
        }
    }, [])
    console.log(data?.data);
    useEffect(() => {
        dispatch(fetchAboutData())
        if (error) {
            toast.error(error);
        }
    }, [arLang])
    return <>
        <Toaster position="top-right" />
        {isLoading ? <Loading /> : <>

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
                                {data?.data?.Questions?.map((ques, i) =>
                                    <div className="collapse relative py-6 my-2 rounded-none border-white border-t before:absolute before:left-[-20px] before:top-0 before:h-full before:w-1 before:rounded-full before:z-10 z-0 overflow-visible before:bg-[#f00] collapse-arrow bg-transparent">
                                        <input type="radio" name="my-accordion-2" defaultChecked />
                                        <div className="collapse-title text-xl font-medium">{ques.Title}</div>
                                        <div className="collapse-content">
                                            <p class="mb-2 ">{ques.Description}</p>
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
                        <div className="w-full my-5 lg:w-1/2">
                            <Fade>
                                <h3 className="font-bold text-[#f00] text-[20px] mb-4 lg:text-[33px]">{data?.data?.ourMission?.Title}</h3>
                                <p>{data?.data?.ourMission?.Description}</p>
                                <h3 className="font-bold text-[#f00] mt-7 text-[20px] mb-4 lg:text-[33px]">{data?.data?.ourStory?.Title}</h3>
                                <p>{data?.data?.ourStory?.Description}</p>
                            </Fade>
                        </div>
                        <div className="w-full hidden my-5 lg:block lg:ps-36 lg:w-1/2">
                            <Fade direction="up">
                                <img src={planet} className="w-full float" alt="planet" />
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>}
    </>
}