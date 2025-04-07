"use client"

import useAnimateEntrance from './animate-entrance';

const AboutSection = () => {
    const section1Visible = useAnimateEntrance("about_section1");
    const section2Visible = useAnimateEntrance("about_section2");

    return (
        <div id='about' className="pageSection font-[family-name:var(--font-geist-mono)] bg-red-500">
            <div className="p-8 sm:p-10">
                <h2 id="about_section1" className={`text-2xl sm:text-6xl font-bold text-left ${section1Visible ? 'animate-fade-slide-in' : ''}`}>
                    About
                </h2>
                <div className={`bg-blue-300 h-1 w-20 mt-5 mb-5 ${section1Visible ? 'animate-fade-slide-in' : ''}`}/>
                <p id="about_section2" className={`text-2x1 text-left ${section2Visible ? 'animate-fade-slide-in' : ''}`}>
                    Hi, I'm John, a computer engineering techonlogist. I have a passion for technology and a strong desire to learn and grow in the field.
                    I am interestd in software and game development, and i enjoy working on projects that challenge me to think critically and creatively.
                </p>
            </div>
        </div>
    )
};
    
  export default AboutSection;