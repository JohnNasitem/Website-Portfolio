"use client"

import useAnimateEntrance from './animate-entrance';
import ContactForm from './contact-form';
import Link from 'next/link';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { JSX } from 'react';

const SVGRenderer = ({icon}: {icon: string}) => {
    const nameToIcon: Record<string, JSX.Element> = {
        Github: <Github />,
        LinkedIn: <Linkedin />,
        Mail: <Mail />,
        Phone: <Phone />
    }

    return nameToIcon[icon] || <div>Icon not added to SVGRenderer</div>
}

const LinkField = ({name, description, link, color}: {name: string, description?: string, link: string, color: string}) => {
    return (
        <div className="rounded-lg p-4 w-full" style={{ backgroundColor: color}}>
            <Link href={link} target='_black' className='grid grid-cols-[auto_auto_1fr] gap-2 text-white'>
                <SVGRenderer icon={name}/>
                <div>{name}</div>
                <div>{description ? `: ${description}` : ''}</div>
            </Link>
        </div>
    )
}

const ContactSection = () => {
    const section1Visible = useAnimateEntrance("contact_section1");
    const section2Visible = useAnimateEntrance("contact_section2");
    const section3Visible = useAnimateEntrance("contact_section3");

    return (
        <div id='contact' className="pageSection font-[family-name:var(--font-geist-mono)]">
            <div className="p-8 sm:p-10">
                <h2 id='contact_section1' className={`text-2xl sm:text-6xl font-bold justify-self-left ${section1Visible ? 'animate-fade-slide-in' : ''}`}>
                    Contact
                </h2>
                <div className={`bg-blue-300 h-1 w-20 mt-5 mb-5 ${section1Visible ? 'animate-fade-slide-in' : ''}`}/>

                <div className='grid sm:grid-cols-2 gap-y-5 gap-x-20'>
                    <div id='contact_section2' className={`${section2Visible ? 'animate-fade-slide-in' : ''} flex justify-center items-center w-full`}>
                        <div className='rounded-lg bg-[var(--color-bg-accent)] p-4 sm:p-8 w-full h-full'>
                            <div className='text-center text-2x1 sm:text-3xl pb-5'>Contact Info</div>
                            <div className='grid gap-4 sm:w-[50%] mx-auto'>
                                <LinkField name='Github' link='https://github.com/JohnNasitem' color='#181717'/>
                                <LinkField name='LinkedIn' link='www.linkedin.com/in/john-nasitem-6b940a23a' color='#0077B5'/>
                                <LinkField name='Mail' description='jc.nasitem@gmail.com' link='mailto:jc.nasitem@gmail.com' color='#DB4437'/>
                            </div>
                        </div>
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