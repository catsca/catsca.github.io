import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormBoolean from './FormBoolean';
import Confirm from './Confirm';
import Success from './Success';
import Fail from './Fail';
import Cookies from 'universal-cookie';
import emailjs from 'emailjs-com';

const UserForm = (props) => {

    const cookies = new Cookies();
  
    const [step, setStep] = useState(1);
    const [secondPersonName, setSecondPersonName] = useState();
    const [plusOne, setPlusOne] = useState();
    const [childrenNumber, setChildrenNumber] = useState();
    const [specialMenu, setSpecialMenu] = useState();
    
    const [form, setForm] = useState({
    });

    const nextStep = () => setStep(step + 1);

    const prevStep = () => setStep(step - 1);

    const failStep = () => setStep(5);

    const handleChange = (value, name) => setForm({
        ...form,
        [name]: value
    });

    if( cookies.get('alreadySent') === '1' ) {
        return <Success />
    } else {
        switch(step) {
            case 1: 
            return (
                <FormBoolean 
                    nextStep = {nextStep}
                    handleChange = {handleChange}
                    failStep={failStep}
    
                />
            );
            
            case 2:  
                return (
                    <FormUserDetails 
                        nextStep = {nextStep}
                        prevStep = {prevStep}
                        handleChange = {handleChange}
                        form={form}
                    />
                );
    
            case 3:
                return (
                    <Confirm 
                        nextStep = {nextStep}
                        prevStep = {prevStep}
                        form={form}
    
                    />
                )
    
            case 4: 
                return <Success />
            
            case 5:
                return <Fail />
            default:
                return <Success />
        }
    }
}


export default UserForm;
