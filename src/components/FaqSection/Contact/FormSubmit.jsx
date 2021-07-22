import React from "react";
import styled from 'styled-components';
import tw from 'twin.macro';
import validate from "./Validate";
import useForm from "./Form";
import { Container } from '../../shared/index.js';
import { Contact,
  HeadText,
  Heading5,
  Gmail,
  Username,
  Email,
  Message,
  FormFillup,
  SendButton,
  TextArea,
  Component,
  Form, Error} from './ContactStyles';

const FormSubmit = ({ submitForm, gmail }) => {
  const { handleChange, handleSubmit, values, errors, setErrors } = useForm(
    submitForm,
    validate
  );

  return (
    <Contact>
      <Container>
        <div class="flex justify-around">
          <Gmail src={`${gmail}.png`} alt="" />
          <HeadText>Drop us a mail</HeadText>
        </div>
      <Form>
      <form onSubmit={handleSubmit} noValidate>
        <Username>
          <Heading5>Your Name</Heading5>
          <FormFillup
            id="inline-full-name"
            type="text"
            name="username"
            placeholder="Enter your name"
            value={values.username}
            onChange={handleChange}
            onBlur={(e) => {
              if (!e.target.value) {
                setErrors((currentValue) => ({
                  ...currentValue,
                  username: "Name Required"
                }));
              }
            }}
          />
          {errors.username && (
            <Error>{errors.username}</Error>
          )}
        </Username>
        <Email>
          <Heading5>Your Email</Heading5>
          <FormFillup
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={(e) => {
              if (!e.target.value) {
                setErrors((currentValue) => ({
                  ...currentValue,
                  email: "Email Required"
                }));
              } else if (!/\S+@\S+\.\S+/.test(e.target.value)) {
                setErrors((currentValue) => ({
                  ...currentValue,
                  email: "Invalid Email"
                }));
              }
            }}
            />
            {errors.email && (
            <Error>{errors.email}</Error>
          )}

      </Email>

        <Message>
          <Heading5>Message</Heading5>
          <TextArea
            type="text"
            name="text"
            placeholder="Enter your message"
            value={values.text}
            onChange={handleChange}
            onBlur={(e) => {
              if (!e.target.value) {
                setErrors((currentValue) => ({
                  ...currentValue,
                  text: "Message Required"
                }));
              }
            }}
          />
            {errors.text && (
            <Error>{errors.text}</Error>
          )}

        </Message>
        <Component>
          <SendButton type="submit" onClick={handleSubmit}>
            Send Message
          </SendButton>
        </Component>
      </form>
     </Form>
    </Container>
  </Contact>
  );
};

export default FormSubmit;
