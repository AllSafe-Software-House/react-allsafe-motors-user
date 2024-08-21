import React from 'react'
import bgImage from '../../assets/images/Group 773975258.png'
import shadow from '../../assets/images/Rectangle 14.png'
export default function HeroSection() {
    return (
        <section className="hero min-h-[50vh] md:h-min-[70vh] lg:min-h-[100vh] relative bg-cover">
            <img src={bgImage} alt="bg" className='absolute w-full z-[-1] h-full' />
            <div className='absolute bottom-0 top-0 right-0 w-full z-[-2]'>
                <img src={shadow} className='absolute left-0 bottom-0 w-full' alt="shadow" />
                <img className='w-full h-full' src={'https://s3-alpha-sig.figma.com/img/d4cf/5b9d/3b80ddef98fab815bdb33d7431b2f094?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T198uZCXllF6bE7BJDfTIeEbZo3RhbjZu-omXBoV~NT4i9wSonvgaKeeKD6prb-A4iLk7YbOpRs9Le5XfN3f8w3KMFMJpOliwEI-X1rsTXNoQyNayAffYGqueq-ROt3RpkCs7Sn1Zgee~T42spSk1-SqrAce40b6nqvWvrFukipleBWdjUDOtWfVKOaOOsuAnd28DifYqOrgCcEh0gASK8CmmO194oBmYeainoES55mjXCYhlPH2qj2uOfO8~qti0NEBlqJPeaM29TwoNFVwReqq8ggcbF0A3fk4Bw0O-yLeHWgZsv2fHF47tBSMthPcuVLKpVT03ONS~H49OcIWsQ__'} alt="car" />
            </div>
        </section>
    )
}
