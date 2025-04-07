"use client"

import useAnimateEntrance from './animate-entrance';
import ContactForm from './contact-form';

const ContactSection = () => {
    const section1Visible = useAnimateEntrance("contact_section1");
    const section2Visible = useAnimateEntrance("contact_section2");
    const section3Visible = useAnimateEntrance("contact_section3");

    return (
        <div id='contact' className="pageSection font-[family-name:var(--font-geist-mono)] bg-orange-500">
            <div className="p-8 sm:p-10">
                <h2 id='contact_section1' className={`text-2xl sm:text-6xl font-bold justify-self-left ${section1Visible ? 'animate-fade-slide-in' : ''}`}>
                    Contact
                </h2>
                <div className={`bg-blue-300 h-1 w-20 mt-5 mb-5 ${section1Visible ? 'animate-fade-slide-in' : ''}`}/>

                <div className='grid sm:grid-cols-2 gap-y-5 gap-x-20'>
                    <div id='contact_section2' className={`${section2Visible ? 'animate-fade-slide-in' : ''} flex justify-center items-center w-full h-[600px]`}>
                        Socials here
                    </div>
                    <div id='contact_section3' className={`${section3Visible ? 'animate-fade-slide-in' : ''} flex justify-center items-center w-full h-[600px]`}>
                        <ContactForm />
                    </div>
                </div>
            </div> 
        </div>
    )
};
    
  export default ContactSection;