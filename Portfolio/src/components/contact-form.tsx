'use client';

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const currentDate = new Date();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!formRef.current) return;
        
        emailjs.sendForm("service_4r3llr3", "template_i6u32t9", formRef.current, "pTRT281PVp4M4S4Qv")
        .then(() => {
            alert('Message sent!');
            formRef.current?.reset();
        },
        (error) => {
            console.error('EmailJS error:', error);
            alert('Failed to send message.');
        });
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className='rounded-lg bg-white p-4 sm:p-8 grid grid-cols-2 grid-rows-[auto_auto_auto_auto_1fr_auto] sm:grid-rows-[auto_auto_auto_1fr_auto] gap-x-10 gap-y-5 w-full h-full'>
            <label className='col-span-2 text-center text-[20px] text-3xl flex m-x-auto justify-center'>Send me an Email</label>
            <input type='hidden' name='time' value={`${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`}/>
            <input type='text' name="name" placeholder="Your Name" className="p-2 bg-gray-200 rounded-lg w-full col-span-2 sm:col-span-1"/>
            <input type='text' name="email" placeholder="Your Email" className="p-2 bg-gray-200 rounded-lg w-full col-span-2 sm:col-span-1"/>
            <input type='text' name="subject" placeholder="Email Subject" className="p-2 bg-gray-200 rounded-lg col-span-2 w-full"/>
            <textarea name='message' placeholder='Email Contents' className="p-2 bg-gray-200 rounded-lg col-span-2 h-full w-full"/>
            <button type='submit' className="bg-blue-500 text-white p-2 rounded-lg col-span-2 hover:bg-blue-600">Send Email</button>
        </form>
    )
};

export default ContactForm;