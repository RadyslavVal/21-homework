import React from 'react';
import './Contact.css';
import male from '../../image/male.png';
import female from '../../image/female.png';
import question from '../../image/question.png';

const Contact = ({ data }) => {
    const { firstName, lastName, phone, gender } = data;
    return (
        <div className="Contact">
            <div className="Contact-gender">
                <img src={gender === 'male' ? male : gender === 'female' ? female : question} alt="Gender" />
            </div>
            <div className='Contact-info'>
                <div className="Contact-name">
                    <div className="Contact-firstName">{firstName}</div>
                    <div className="Contact-lastName">{lastName}</div>
                </div>
                <div className="Contact-phone">{phone}</div>
            </div>
        </div >
    );
}

export default Contact;
