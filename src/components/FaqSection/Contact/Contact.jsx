import React, { useState } from "react";
import FormSubmit from "./FormSubmit";
import styled from 'styled-components';
import tw from 'twin.macro';

function Contact(){
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
      setIsSubmitted(true);
    }

  return (
    <div>
            {!isSubmitted ? (
              <FormSubmit submitForm={submitForm} gmail='gmail' />
            ) : (
              "The form has been submitted"
            )}

    </div>
  );
}

export default Contact;
