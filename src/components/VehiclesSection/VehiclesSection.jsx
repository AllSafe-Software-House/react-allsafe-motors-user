import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next';
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router-dom'
import CustomCard from '../CustomCard/CustomCard';

export default function VehiclesSection() {
    const { t } = useTranslation('global');
    return <>
        <section className='py-16'>
            <div className="container">
                <div className='flex justify-between'>
                    <Fade direction='up'>
                        <h3 className='text-[18px] md:text-[22px] lg:text-[32px] font-bold'>{t('custom-text.exportV')}</h3>
                    </Fade>
                    <Fade direction='up' delay={200}>
                        <Link className='flex group'>
                            {t('custom-text.viewAll')}
                            <MdArrowOutward className='ms-2 group-hover:rotate-45 duration-150 text-[22px]' />
                        </Link>
                    </Fade>
                </div>
                <div className="flex flex-wrap mt-3 items-center">
                    <div className="w-full px-2 my-3 md:w-1/2 lg:w-1/4">
                        <CustomCard name={'Toyota Camry New'} disc={'3.5 D5 PowerPulse Momentum 5dr AW…'} miles={"20 Miles"} gear={'Automatic'} date={'2023'} fuel={'Petrol'} price={"$40,000"} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                    </div>
                    <div className="w-full px-2 my-3 md:w-1/2 lg:w-1/4">
                        <CustomCard name={'Toyota Camry New'} disc={'3.5 D5 PowerPulse Momentum 5dr AW…'} miles={"20 Miles"} gear={'Automatic'} date={'2023'} fuel={'Petrol'} price={"$40,000"} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                    </div>
                    <div className="w-full px-2 my-3 md:w-1/2 lg:w-1/4">
                        <CustomCard name={'Toyota Camry New'} disc={'3.5 D5 PowerPulse Momentum 5dr AW…'} miles={"20 Miles"} gear={'Automatic'} date={'2023'} fuel={'Petrol'} price={"$40,000"} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                    </div>
                    <div className="w-full px-2 my-3 md:w-1/2 lg:w-1/4">
                        <CustomCard name={'Toyota Camry New'} disc={'3.5 D5 PowerPulse Momentum 5dr AW…'} miles={"20 Miles"} gear={'Automatic'} date={'2023'} fuel={'Petrol'} price={"$40,000"} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                    </div>
                    <div className="w-full px-2 my-3 md:w-1/2 lg:w-1/4">
                        <CustomCard name={'Toyota Camry New'} disc={'3.5 D5 PowerPulse Momentum 5dr AW…'} miles={"20 Miles"} gear={'Automatic'} date={'2023'} fuel={'Petrol'} price={"$40,000"} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                    </div>
                    <div className="w-full px-2 my-3 md:w-1/2 lg:w-1/4">
                        <CustomCard name={'Toyota Camry New'} disc={'3.5 D5 PowerPulse Momentum 5dr AW…'} miles={"20 Miles"} gear={'Automatic'} date={'2023'} fuel={'Petrol'} price={"$40,000"} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                    </div>
                    <div className="w-full px-2 my-3 md:w-1/2 lg:w-1/4">
                        <CustomCard name={'Toyota Camry New'} disc={'3.5 D5 PowerPulse Momentum 5dr AW…'} miles={"20 Miles"} gear={'Automatic'} date={'2023'} fuel={'Petrol'} price={"$40,000"} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                    </div>
                    <div className="w-full px-2 my-3 md:w-1/2 lg:w-1/4">
                        <CustomCard name={'Toyota Camry New'} disc={'3.5 D5 PowerPulse Momentum 5dr AW…'} miles={"20 Miles"} gear={'Automatic'} date={'2023'} fuel={'Petrol'} price={"$40,000"} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                    </div>
                </div>
            </div>
        </section>
    </>
}
