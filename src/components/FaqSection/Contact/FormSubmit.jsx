import React from "react";
import validate from "./Validate";
import useForm from "./Form";
import {
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
  Component1,
  ErrorComponent,
  Form, Error } from './Contactstyles';

const FormSubmit = ({ submitForm, gmail }) => {
  const { handleChange, handleSubmit, values, errors, setErrors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
        <Component1>
          <Gmail src={`${gmail}.png`} alt="gmail" />
          <HeadText>Drop us a mail</HeadText>
        </Component1>
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
            onFocus={(e) => {
              if (!e.target.value) {
                setErrors((currentValue) => ({
                  ...currentValue,
                  username: ""
                }));
              }
            }}
          />
          <ErrorComponent>
            {errors.username && (
              <Error>{errors.username}</Error>
            )}
          </ErrorComponent>
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
            onFocus={(e) => {
              if (!e.target.value) {
                setErrors((currentValue) => ({
                  ...currentValue,
                  email: ""
                }));
              } else if (!/\S+@\S+\.\S+/.test(e.target.value)) {
                setErrors((currentValue) => ({
                  ...currentValue,
                  email: ""
                }));
              }
            }}
            />
          <ErrorComponent>
              {errors.email && (
              <Error>{errors.email}</Error>
            )}
          </ErrorComponent>

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
            onFocus={(e) => {
              if (!e.target.value) {
                setErrors((currentValue) => ({
                  ...currentValue,
                  text: ""
                }));
              }
            }}
          />
          <ErrorComponent>
              {errors.text && (
              <Error>{errors.text}</Error>
            )}
          </ErrorComponent>

        </Message>
        <Component>
          <SendButton type="submit" onClick={handleSubmit}>
            Send Message
          </SendButton>
        </Component>
      </form>
     </Form>
  </>
  );
};

export default FormSubmit;
