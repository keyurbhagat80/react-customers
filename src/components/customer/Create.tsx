import React, { useState } from "react";
import axios from "axios";
import { StyledH1 } from "../../App.style";
import {
  StyledPrimaryButton,
  StyledFormGroup,
  StyledInput,
  StyledFormWrapper,
  StyledSpinner,
  StyledError
} from "./customer.style";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import Notification from "../notification";
import { Values, validateForm } from "./customer.utils";

const Create: React.FC<{}> = () => {
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const history = useHistory();

  const handleFormSubmission = (formData: Values): void => {
    setTimeout(() => {
      axios
        .post(`http://localhost:5000/customers`, formData)
        .then((data) => {
          setTimeout(() => {
            history.push("/");
          }, 1500);

          setSubmitSuccess(true);
        })
        .catch((error) => {
          console.log(error);
          setSubmitError(true);
        });
    }, 500);
    setLoading(false);
  };

  const { handleSubmit, handleChange, handleBlur, touched, errors } = useFormik(
    {
      initialValues: {
        firstName: "",
        lastName: "",
        dob: ""
      },
      validate: validateForm,
      onSubmit: (value) => {
        setLoading(true);
        handleFormSubmission(value);
      }
    }
  );

  return (
    <StyledFormWrapper>
      <StyledH1> Create Customer </StyledH1>
      {!submitSuccess && <p>Fill the form below to create a new post</p>}

      {submitSuccess && (
        <Notification variation={"success"}>
          The form was successfully submitted!
        </Notification>
      )}

      {submitError && (
        <Notification variation={"error"}>
          The form was not successfully submitted. Please try again later.
        </Notification>
      )}

      <form id={"create-post-form"} onSubmit={handleSubmit}>
        <StyledFormGroup>
          <label htmlFor="firstName"> First Name </label>
          <StyledInput
            type="text"
            id="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            name="firstName"
            placeholder="Enter first name"
          />
          {touched.firstName && errors.firstName ? (
            <StyledError>{errors.firstName}</StyledError>
          ) : null}
        </StyledFormGroup>
        <StyledFormGroup>
          <label htmlFor="lastName"> Last Name </label>
          <StyledInput
            type="text"
            id="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            name="lastName"
            placeholder="Enter last name"
          />
          {touched.lastName && errors.lastName ? (
            <StyledError>{errors.lastName}</StyledError>
          ) : null}
        </StyledFormGroup>
        <StyledFormGroup>
          <label htmlFor="dob"> DOB </label>
          <StyledInput
            type="text"
            id="dob"
            onChange={handleChange}
            onBlur={handleBlur}
            name="dob"
            placeholder="Enter date of birth"
          />
          {touched.dob && errors.dob ? (
            <StyledError>{errors.dob}</StyledError>
          ) : null}
        </StyledFormGroup>

        <div>
          <StyledPrimaryButton type="submit">Add Customer</StyledPrimaryButton>
          {loading && <StyledSpinner>Loading...</StyledSpinner>}
        </div>
      </form>
    </StyledFormWrapper>
  );
};

export default Create;
