import React, { useEffect } from 'react'
import HeadBanner from '../components/HeadBanner/HeadBanner'
import { useTranslation } from 'react-i18next'
import CustomCard from '../components/CustomCard/CustomCard'
import { Fade } from 'react-awesome-reveal'

export default function Services() {
    const { t } = useTranslation('global')
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return <main>
        <HeadBanner text={t('navlinks.services')} bg={'https://s3-alpha-sig.figma.com/img/3f18/64e8/65a46bc0aa70eb6014b45e78e83dab49?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o91ujKJudC4S6baeGmdlA6lYVIgVFkmcSsRsYOAPqaubyDqMzz28y3N2~f3hHFOaThLy6t1n7FaCh4z1rpR-pm2~4MVRigjxZCVNLulJ0DuhSbk7Rf6az73a4ZeUnE0wRm1e60RXRnwq5oX2LSji5xINB4AgmjfICpSEca1fbLvSBg2KBqeEvporB7Dmsztnm8Mo6KGCTWTin7rA3RpWWlAEkv3vkHC5wEcjgOfT8KR9C5xLRSTp~OpY3QwizvkIc5dtV8DcY0INVv~XeAjJPLgUfbeHZnB683iuJTa04JPzNpxExPUslW7Xg1YTVP8jU2ROEsjbV5MzFQxNYEMC2g__'} />
        <section className='py-20'>
            <div className="container">
                <div className="flex flex-wrap items-center">
                    <div className="md:w-1/2 px-3 my-3">
                        <Fade>
                            <CustomCard serv name={'The Anatomy of Effective Design Systems'} disc={'Uncover the secrets of seamlessly integrating UI kits into your development workflow, enhancing both design quality and coding efficiency.'} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                        </Fade>
                    </div>
                    <div className="md:w-1/2 px-3 my-3">
                        <Fade>
                            <CustomCard serv name={'The Anatomy of Effective Design Systems'} disc={'Uncover the secrets of seamlessly integrating UI kits into your development workflow, enhancing both design quality and coding efficiency.'} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                        </Fade>
                    </div>
                    <div className="md:w-1/2 px-3 my-3">
                        <Fade>
                            <CustomCard serv name={'The Anatomy of Effective Design Systems'} disc={'Uncover the secrets of seamlessly integrating UI kits into your development workflow, enhancing both design quality and coding efficiency.'} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                        </Fade>
                    </div>
                    <div className="md:w-1/2 px-3 my-3">
                        <Fade>
                            <CustomCard serv name={'The Anatomy of Effective Design Systems'} disc={'Uncover the secrets of seamlessly integrating UI kits into your development workflow, enhancing both design quality and coding efficiency.'} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                        </Fade>
                    </div>
                    <div className="md:w-1/2 px-3 my-3">
                        <Fade>
                            <CustomCard serv name={'The Anatomy of Effective Design Systems'} disc={'Uncover the secrets of seamlessly integrating UI kits into your development workflow, enhancing both design quality and coding efficiency.'} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                        </Fade>
                    </div>
                    <div className="md:w-1/2 px-3 my-3">
                        <Fade>
                            <CustomCard serv name={'The Anatomy of Effective Design Systems'} disc={'Uncover the secrets of seamlessly integrating UI kits into your development workflow, enhancing both design quality and coding efficiency.'} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                        </Fade>
                    </div>
                    <div className="md:w-1/2 px-3 my-3">
                        <Fade>
                            <CustomCard serv name={'The Anatomy of Effective Design Systems'} disc={'Uncover the secrets of seamlessly integrating UI kits into your development workflow, enhancing both design quality and coding efficiency.'} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                        </Fade>
                    </div>
                    <div className="md:w-1/2 px-3 my-3">
                        <Fade>
                            <CustomCard serv name={'The Anatomy of Effective Design Systems'} disc={'Uncover the secrets of seamlessly integrating UI kits into your development workflow, enhancing both design quality and coding efficiency.'} image={'https://s3-alpha-sig.figma.com/img/60e9/18b1/d49e16d94a7d331d0a22d92bbd66a21e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBX0yt96imFK3HppxfOFoH3TCHJCM-fZ6WiWoooUYczXhCNyTQauGgex4cKiZR29~T4qkfqlgOrSwgDhfmMtFYhG48h4hBc5-sK2tppXJ~F9qfh9aJ7LA8tSnrE0NJNuzoZekW9zTHzS4PeLUi21H862WOQEZg0rUB31~qSZczhSWnacKgBMcRY0XzrL8qr0wfeKqVtgfDSkA9WfQmmq~~mjq~~3CqGVrHXvsy7-b7B0hirWvRajlTA89OKOBRFByAySXPt5T1roe7RR7-8gmEo3KJ06lZn6E8NSxJHIPhk25Z8ONJmf4GIJnws8VbpEzwPtbfvBSpqi0RZYWKPHeg__'} />
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    </main>
}
