import React, { useState } from 'react';
import FormSubmit from './FormSubmit';
import FormSuccess from './FormSuccess';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      {!isSubmitted ? <FormSubmit submitForm={submitForm} gmail='gmail' /> : <FormSuccess />}
    </div>
  );
}

export default Contact;
