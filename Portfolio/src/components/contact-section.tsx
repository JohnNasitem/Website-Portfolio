"use client"

import useAnimateEntrance from './animate-entrance';

const ContactSection = () => {
    const section1Visible = useAnimateEntrance("contact_section1");
    return (
        <div id='contact' className="pageSection font-[family-name:var(--font-geist-mono)] bg-orange-500">
            <div className="grid grid-rows-[1fr_1fr_1fr] p-8 sm:p-10">
                <div id='contact_section1' className={`${section1Visible ? 'animate-fade-slide-in' : ''}`}>
                    Temp
                </div>
            </div> 
        </div>
    )
};
    
  export default ContactSection;