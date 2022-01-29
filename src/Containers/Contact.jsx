import React from 'react';
import Button from '../Components/Button';
import { SiLinkedin } from 'react-icons/si';

const Contact = () => {
    return (
        <div className='bg-secondary' id='contact'>
            <div className='container lg:px-48 pt-14 pb-8 flex flex-col items-center'>
                <h2 className='text-4xl text-textColor2 font-bold text-center'>Get In Touch</h2>
                <p className='w-8/12 mt-5 text-center'>I’m currently looking for any new opportunities. My inbox is always open for you! Whether you have a question or just want to say hi, I'll be happy to help and talk!</p>

                <Button><a href="https://www.linkedin.com/in/emrekaraa" target={"_blank"}> <span className='text-md flex items-center'> <SiLinkedin className='mr-2 text-lg' /> Contact Me!</span></a> </Button>
            </div>
        </div>)
};

export default Contact;
