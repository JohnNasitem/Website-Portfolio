"use client"

import useAnimateEntrance from './animate-entrance';

const AboutSection = () => {
    const section1Visible = useAnimateEntrance("about_section1");

    return (
        <div id='about' className="pageSection font-[family-name:var(--font-geist-mono)] bg-red-500">
            <div className="grid grid-rows-[1fr_1fr_1fr] p-8 sm:p-10">
                <div id='about_section1' className={`${section1Visible ? 'animate-fade-slide-in' : ''}`}>
                    <h2 className="text-2xl sm:text-6xl font-bold justify-self-left">
                        About
                    </h2>
                    <div className='bg-blue-300 h-1 w-20 mt-5 mb-5'/>
                    <p className="text-2x1 text-left sm:text-left">
                        I am a Computer Engineering Techonlogist.
                    </p>
                </div>
            </div> 
        </div>
    )
};
    
  export default AboutSection;