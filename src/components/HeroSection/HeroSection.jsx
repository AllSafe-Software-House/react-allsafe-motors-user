import React from 'react'
import bgImage from '../../assets/images/Group 773975258.png'
import shadow from '../../assets/images/Rectangle 14.png'
import { Pannellum } from 'pannellum-react';
import img from '../../assets/images/shot-panoramic-composition-living-room.jpg'
export default function HeroSection() {
    return (
        <section className="">
            <iframe src="https://carvisualizer.plus360degrees.com/threejs/" className='w-full min-h-[80vh]' frameborder="0"></iframe>
        </section>
        // <div style={{ height: '100vh', width: '100vw' }}>
        //     <Pannellum
        //         width="100%"
        //         height="100%"
        //         image={img}
        //         // pitch={10}
        //         yaw={180}
        //         // hfov={110}
        //         autoLoad
        //         showZoomCtrl={true}
        //     />
        // </div>
        
    )
}
